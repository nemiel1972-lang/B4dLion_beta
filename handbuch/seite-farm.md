Seiten: [Übersicht](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · **Fleet & Farm** · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auktionen](seite-auktionen.md) · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auktionen](felder-auktionen.md) · [Experimental](felder-experimental.md)

---

# Fleet & Farm

_Menüpunkt: Fleet&Farm_

Die Seite bündelt das Farmen (AutoFarm und Trümmerfeld-Ernte AutoHarvest) und zugehörige Werkzeuge in Reitern. Du siehst, was AutoFarm entscheidet, kannst Ziele sperren oder gezielt angreifen und alle Farm-Einstellungen an einer Stelle ändern. Oben gibt es 'Daten verbergen' und die Instanzauswahl (bei mehreren Instanzen).

![Fleet & Farm](img/bild-AutoFarm.png)

_Oberfläche mit Vorlagen-Werten, ohne echte Daten._

## Farm

Hat zwei Unterteile: Status und Settings. Status hat die Ansichten Übersicht (Worker-Status, Deuterium der Start-Himmelskörper, Flottenslots, Galaxie-Scan, Scan-Fortschritt, Verluste und Gewinn), Ziele (Ziele und Entscheidungen), Angriffe (aufgezeichnete Angriffe), Systeme (gecachte Systeme), Blacklist & Wartung und Logs & Fehler; die Daten aktualisieren sich alle 5 Sekunden. Settings enthält alle Einstellungen in aufklappbaren Gruppen: Allgemein, Scanbereich und Reihenfolge, Galaxie-Cache, Asteroiden-Suche, Zielauswahl, Spionageberichte, Verteidigte Ziele, Gewinn und Deuterium, Blacklist und Allianzschutz, Sonden und Slots, Fracht und Flotte, Geleitschutz und Simulation, Kampfrechner (erweitert), Zeitplan, AutoHarvest. Felder ohne Wirkung, widersprüchliche oder selten nötige Felder werden markiert; automatisch geändert wird nichts.

1. Status/Settings oben im Reiter wählen, dann die Ansicht (Übersicht, Ziele, ...).
2. Blacklist & Wartung: 'Spieler sperren' (ID oder Name eintragen), 'Freigeben', 'Entfernen', 'Scan + Angriff' für ein einzelnes verteidigtes Ziel, 'Blacklist leeren', 'Systemcache leeren und Scan neu starten'. Jeder Befehl fragt nach und läuft zu Beginn des nächsten AutoFarm-Zyklus.
3. 'Farm zurücksetzen' und 'Gesamte Datenbank zurücksetzen' verlangen zusätzlich die Eingabe von DELETE.
4. Settings: Werte ändern, dann 'Änderungen speichern' oder 'Verwerfen'. Gespeichert werden nur geänderte Felder.

Felder: [Fleet & Farm](felder-farm.md), [Experimental](felder-experimental.md)

## HoldForReview

Zeigt alle Ziele, die AutoFarm in den letzten 2 Stunden als verteidigt verworfen hat (Verteidigung vorhanden, zu stark, nicht rentabel), mit Rohstoffen, Verteidigung und Schiffen. Danach verschwinden sie aus der Liste (die Blacklist des Workers bleibt).

1. Sortierung wählen: Rohstoffe, Flotte oder Def-Punkte.
2. 'Scan + Angriff' berechnet Geleitschutz und Gewinn und greift das Ziel allein an; braucht 2 freie Flottenslots. Optional unter 'Min. Geschwindigkeit bei Neuberechnung' eine Mindestgeschwindigkeit wählen (Standard: Wert aus der Config).
3. 'Sperren' sperrt das Ziel dauerhaft.

Felder: [Fleet & Farm](felder-farm.md)

## Combat sim

Vergleicht die Kampfrechner (ogamed/Go, Go mit Lebensform-Boni, Rust) mit gemessenen Verlusten. Zusammenfassung oben, darunter eine Zielliste mit 'Best calc', Gewonnen, Verloren und Offen (Flotte noch nicht zurück). Im Schattenmodus bleibt Go maßgeblich.

1. Filter: Ziel (Name oder G:S:P), 'Actual only', 'Deviations only', 'Rust errors only'; 'Refresh' lädt neu.
2. Zeile anklicken, um die Einzelkämpfe aufzuklappen. 'Export CSV' und 'Export JSON' exportieren mit denselben Filtern.
3. 'Reset' löscht das gesamte Kampflog nach Rückfrage; vorher exportieren.

## Hinweise

- Befehle an AutoFarm (Sperren, Scan + Angriff, Reset) laufen erst im nächsten Zyklus; der AutoFarm-Worker muss aktiv sein.
- Farm zurücksetzen löscht Blacklist, Ziele, Berichte, Angriffsverlauf, Verlust-/Gewinnliste und Scan-Position; nur gescannte Systeme und der Galaxie-Cache bleiben. Gesamte Datenbank zurücksetzen löscht auch die gescannten Systeme. Beides ist nicht rückgängig zu machen.
- Ein gesperrter Spieler wird von AutoFarm nie ausgespäht oder angegriffen.
- Ohne AutoFarm-Datenbank zeigt der Status-Teil einen Hinweis; er füllt sich nach dem ersten AutoFarm-Lauf.

