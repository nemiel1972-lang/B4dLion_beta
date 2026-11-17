// Suche ueber suche.json (Nummer, Pfad, Beschreibung)
(function () {
    var q = document.getElementById('q'), res = document.getElementById('res'), idx = null;
    function load(cb) { if (idx) return cb(); fetch('suche.json').then(function (r) { return r.json(); }).then(function (j) { idx = j; cb(); }).catch(function () { idx = []; cb(); }); }
    q.addEventListener('input', function () {
        var s = q.value.trim().toLowerCase();
        if (s.length < 2) { res.style.display = 'none'; return; }
        load(function () {
            var out = idx.filter(function (f) { return (f.n + ' ' + f.p + ' ' + f.t).toLowerCase().indexOf(s) >= 0; }).slice(0, 40);
            res.innerHTML = '';
            out.forEach(function (f) {
                var a = document.createElement('a'); a.href = f.u;
                a.innerHTML = '<b></b> <code></code><small></small>';
                a.children[0].textContent = f.n; a.children[1].textContent = f.p; a.children[2].textContent = f.t;
                res.appendChild(a);
            });
            if (!out.length) res.textContent = 'Nichts gefunden.';
            res.style.display = 'block';
        });
    });
    document.addEventListener('click', function (e) { if (!res.contains(e.target) && e.target !== q) res.style.display = 'none'; });
})();
