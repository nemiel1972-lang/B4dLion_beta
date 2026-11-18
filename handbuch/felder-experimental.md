Seiten: [Übersicht](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auktionen](seite-auktionen.md) · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auktionen](felder-auktionen.md) · **Experimental**

---

# Felder: Experimental

Experimentelle Funktionen, Galaxie-Cache und Diagnose-Log.

77 Felder, so wie die B4dLion-Oberfläche sie zeigt (Nummer = Feldnummer vor dem Feldnamen).

![Experimental](img/bild-Experimental.png)

_Oberfläche mit Vorlagen-Werten, ohne echte Daten._

## Experimentell

#### 3.218 Modus

`Experimental.MinePlanRanking.Mode` · Standard: **„Payback“** · Text

Payback = kürzeste Amortisation zuerst (wie AutoMine). Cheapest = niedrigste Kosten zuerst. Npv = höchster Nettogewinn im Betrachtungszeitraum (Gewinn pro Tag mal Tage des Zeitraums minus Kosten); Schritte, die sich im Zeitraum nicht amortisieren, entfallen.

#### 3.219 HorizonDays

`Experimental.MinePlanRanking.HorizonDays` · Standard: **90** · Zahl

Betrachtungszeitraum für die Nettogewinn-Reihung, in Tagen.

**Beispiel:** 90 = ein Schritt ist gut, wenn er innerhalb von 90 Tagen mehr einbringt, als er kostet.

#### 3.220 MaxPaybackDays

`Experimental.MinePlanRanking.MaxPaybackDays` · Standard: **1000** · Zahl

Längste Amortisation, die noch als sinnvoll gilt (genutzt mit „Nur sinnvolle“).

#### 3.221 OnlySensible

`Experimental.MinePlanRanking.OnlySensible` · Standard: **nein** · Schalter

Schritte ausblenden, deren Amortisation länger als das Limit ist.

#### 3.222 IncludeResearch

`Experimental.MinePlanRanking.IncludeResearch` · Standard: **ja** · Schalter

Plasmatechnologie neben den Minenschritten einordnen (sie erhöht den Ertrag aller Minen auf allen Planeten).

#### 3.223 AstrophysicsGain

`Experimental.MinePlanRanking.AstrophysicsGain` · Standard: **ja** · Schalter

Astrophysik im Plan bewerten (Standard an, nur Anzeige): Kosten = die Stufen bis zum nächsten neuen Planeten plus der durchschnittliche Ausbau eines vorhandenen Planeten, Ertrag = der durchschnittliche Tagesertrag eines Planeten. Expeditionsslots zählen nicht.

#### 3.224 DailyBudgetDeut

`Experimental.MinePlanRanking.DailyBudgetDeut` · Standard: **0** · Zahl

Tagesbudget für den Aufbauplan in Deuterium-Äquivalent (z. B. Expo-Einnahmen). 0 = auf der Seite eingeben.

#### 3.225 UsePlanForAutoMine

`Experimental.MinePlanRanking.UsePlanForAutoMine` · Standard: **nein** · Schalter

AutoMine baut eine Mine nur, wenn der Planet unter den ersten Schritten des Aufbauplans vorkommt (beste Amortisation zuerst, über alle Planeten). Die anderen Planeten warten. Aus = jeder Planet baut für sich.

#### 3.226 PlanLookahead

`Experimental.MinePlanRanking.PlanLookahead` · Standard: **12** · Zahl

Wie viele Schritte des Aufbauplans als fällig gelten. Größer = mehr Planeten bauen gleichzeitig.

#### 6.138 Spieler

`Experimental.GalaxyCache.Track.Players` · Standard: **[]** · Liste · Array/komplex – im JSON-Tab bearbeiten

Watch-Liste: Spieler-IDs, durch Komma getrennt. Ihre Systeme werden zuerst gescannt, jedes Ereignis dieser Spieler (neue Kolonie, Planet weg, neuer Mond, Statuswechsel, Umzug) kommt per Telegram. Einfacher auf der Galaxy-Seite (Watch list) zu bearbeiten.

#### 6.139 Allianzen

`Experimental.GalaxyCache.Track.Alliances` · Standard: **[]** · Liste · Array/komplex – im JSON-Tab bearbeiten

Watch-Liste: Allianz-IDs, durch Komma getrennt. Alle bekannten Mitglieder werden wie die Spieler oben beobachtet.

#### 6.142 Aktiv

`Experimental.GalaxyCache.Hunter.Active` · Standard: **nein** · Schalter

Hauptschalter dieser Funktion. Aus = der Bot macht hier nichts.

#### 6.143 MinMinutes

`Experimental.GalaxyCache.Hunter.MinMinutes` · Standard: **4** · Zahl

Default `4` and `5` (minimum 3). Each watched player is checked at a random interval in this range: all systems where the cache knows the player (otherwise the home system from the highscore) are read through the GalaxyCache scanner queue, right after the rush scans and before all other scans. With more than 10 players the page shows a hint with the estimated requests per hour; nothing is blocked.

_Beschreibung noch englisch._

#### 6.144 MaxMinutes

`Experimental.GalaxyCache.Hunter.MaxMinutes` · Standard: **5** · Zahl

Default `4` and `5` (minimum 3). Each watched player is checked at a random interval in this range: all systems where the cache knows the player (otherwise the home system from the highscore) are read through the GalaxyCache scanner queue, right after the rush scans and before all other scans. With more than 10 players the page shows a hint with the estimated requests per hour; nothing is blocked.

_Beschreibung noch englisch._

#### 6.145 KeepDays

`Experimental.GalaxyCache.Hunter.KeepDays` · Standard: **14** · Zahl

Default `14`. Days of history kept in the hunter file.

_Beschreibung noch englisch._

#### 6.146 Spieler

`Experimental.GalaxyCache.Hunter.Players` · Standard: **[]** · Liste · Array/komplex – im JSON-Tab bearbeiten

Own list, separate from `GalaxyCache.Track.Players`. Entries `{Id, Name, Paused, NotifyTimer, NotifyVacation, NotifyBan}`; edited on the Hunter page. Alerts per player (Telegram/Discord, text starts with `[Hunter]`): `NotifyTimer` = the player went from active (under 15 min) to a timer or to no activity (at most every 10 minutes per player, only when the previous scan is not older than 30 minutes), `NotifyVacation` = vacation mode on/off, `NotifyBan` = banned/unbanned (vacation and ban count only after the first reading).

_Beschreibung noch englisch._

#### 6.147 Ursprung

`Experimental.GalaxyCache.Hunter.Spy.Origin` · Standard: **(leer)** · Text

"Espionage on demand" on the Hunter page (spy buttons per player and for all watched players: planets and moons / planets / moons, option "Skip home planet"). `Origin` = starting planet or moon as `G:S:P:P` (planet) or `G:S:P:M` (moon); empty (default) = celestial with the most probes (also used when the starting point has no probes left). `WaitMinMs`/`WaitMaxMs` = random wait between two spy flights, default `300`/`400` (minimum 100). Probe count per flight comes from `AutoFarm.NumProbes`. With no free slot the bot waits 15 s and retries up to 8 times. Orders are dropped while the bot sleeps or is paused.

_Beschreibung noch englisch._

#### 6.148 WaitMinMs

`Experimental.GalaxyCache.Hunter.Spy.WaitMinMs` · Standard: **300** · Zahl

_Noch keine Beschreibung._

#### 6.149 WaitMaxMs

`Experimental.GalaxyCache.Hunter.Spy.WaitMaxMs` · Standard: **400** · Zahl

_Noch keine Beschreibung._

#### 6.151 Aktiv

`Experimental.AsteroidHunt.Active` · Standard: **nein** · Schalter

Den Jäger an- oder ausschalten (Standard aus).

#### 6.152 ShipType

`Experimental.AsteroidHunt.ShipType` · Standard: **„Pathfinder“** · Text

Schiff, das gesendet wird, so geschrieben wie im Spiel (englischer Name). Jedes Schiff geht, z. B. Pathfinder, Cruiser, Reaper, Destroyer; eine Sonde kann keine Items finden. Es wird der Planet mit den meisten dieser Schiffe genutzt. Ein unbekannter Name fällt auf Pathfinder zurück.

**Beispiel:** Pathfinder

#### 6.153 ShipCount

`Experimental.AsteroidHunt.ShipCount` · Standard: **1** · Zahl

Wie viele Schiffe gesendet werden (Standard 1).

#### 6.154 MaxAttemptsPerDay

`Experimental.AsteroidHunt.MaxAttemptsPerDay` · Standard: **0** · Zahl

Versuche pro Spieltag (0 = unbegrenzt, höchstens 60). Laut Foren ist die Zahl der Versuche nicht begrenzt, aber pro Tag kann nur ein Item gefunden werden – der Jäger hört nach dem ersten Fund auf.

#### 6.155 SearchSystems

`Experimental.AsteroidHunt.SearchSystems` · Standard: **10** · Zahl

Der Asteroid ist nicht in deinem Heimatsystem: So viele Systeme werden der Reihe nach versucht (eigenes System, +1, -1, +2, -2 ...). Ein Ziel, das der Server ablehnt, kostet keinen Versuch.

**Beispiel:** 10 = Systeme 0, +1, -1 ... bis zu 5 entfernt.

#### 6.156 SaveJson

`Experimental.AsteroidHunt.SaveJson` · Standard: **ja** · Schalter

Jeden Versuch und Fund nach data/asteroiden_funde_<alias>.json schreiben.

#### 9.001 ReduceLogs

`Experimental.ReduceLogs` · Standard: **ja** · Schalter

Globaler Schalter: An = Zusatz-Logs (devlogs) und ihre Diagnosetexte werden gar nicht erst erzeugt. Aus = sie werden geschrieben, solange eine Log-Sammlung läuft. Fehlt der Eintrag: private Builds aus, öffentliche Builds an.

#### 9.002 Aktiv

`Experimental.CollectLogs.Active` · Standard: **nein** · Schalter

Sammeln ein/aus (Standard aus).

#### 9.003 Stunden

`Experimental.CollectLogs.Hours` · Standard: **12** · Zahl

Dauer der Sammlung in Stunden (Standard 12).

#### 9.004 Anonymisieren

`Experimental.CollectLogs.Anonymize` · Standard: **ja** · Schalter

Name, Universum, Mail, Himmelskörper, Koordinaten (x:x:Position), IP und Token ersetzen (Standard an). Aus = Rohdaten, nicht weitergeben.

#### 9.012 Aktiv

`Experimental.ExtraDebugLog.Active` · Standard: **ja** · Schalter

Zusatz-Log ein- oder ausschalten (Standard an).

#### 9.013 Repatriierung

`Experimental.ExtraDebugLog.Repatriate` · Standard: **ja** · Schalter

Repatriate / Reverse-Repatriate: Kandidaten, Ladung nach dem Ledger, Sendeversuche und Ergebnisse.

#### 9.014 Buchführung

`Experimental.ExtraDebugLog.Ledger` · Standard: **ja** · Schalter

Ressourcen-Ledger: welche Ansprüche wie viel eines Himmelskörpers halten und welche davon für Repatriate und Collect zählen.

#### 9.015 BotPause

`Experimental.ExtraDebugLog.BotPause` · Standard: **ja** · Schalter

Beginn und Ende der Pause, Ablehnungen und blockierte Flüge.

#### 9.016 DefenderRecheck

`Experimental.ExtraDebugLog.DefenderRecheck` · Standard: **ja** · Schalter

Angriffsliste vor dem Fleetsave: Zeiten und Entscheidung.

#### 9.017 FleetsaveSlot

`Experimental.ExtraDebugLog.FleetsaveSlot` · Standard: **ja** · Schalter

Jede Slot-Entscheidung von SendFleet mit den Zahlen.

#### 9.018 MinePlanRanking

`Experimental.ExtraDebugLog.MinePlanRanking` · Standard: **ja** · Schalter

Berechnungsart und die besten Schritte der Minenplan-Rangliste.

#### 9.019 AsteroidHunt

`Experimental.ExtraDebugLog.AsteroidHunt` · Standard: **ja** · Schalter

Alle Meldungen der Asteroidenjagd.

#### 9.020 GalaxyCache

`Experimental.ExtraDebugLog.GalaxyCache` · Standard: **ja** · Schalter

Cache-Treffer, Hintergrund-Scans und erkannte Ereignisse des Galaxie-Caches.

#### 9.021 Slots

`Experimental.ExtraDebugLog.Slots` · Standard: **ja** · Schalter

_Noch keine Beschreibung._

#### 9.022 Lifeform

`Experimental.ExtraDebugLog.Lifeform` · Standard: **ja** · Schalter

_Noch keine Beschreibung._

#### 9.023 Expeditionen

`Experimental.ExtraDebugLog.Expeditions` · Standard: **ja** · Schalter

_Noch keine Beschreibung._

#### 9.024 FarmCalc

`Experimental.ExtraDebugLog.FarmCalc` · Standard: **ja** · Schalter

_Noch keine Beschreibung._

## Repatriate und das Ressourcen-Ledger

#### 4.056 Ledger komplett ignorieren

`Experimental.RepatriateLedgerHold.Ignore` · Standard: **nein** · Schalter · An: Repatriate, Reverse-Repatriate und /collect bewegen den gesamten Bestand, egal was die Bauansprüche halten. Aus (Standard): Ansprüche schützen ihren Bestand wie unten eingestellt

An: Repatriate, Reverse-Repatriate und /collect ignorieren das Ressourcen-Ledger komplett und bewegen den gesamten Bestand, auch was Bauansprüche halten. Die Worker (AutoMine und andere) können dann feststellen, dass ihr gespeicherter Bestand weg ist. Standard aus.

#### 4.057 Schützen ab dieser Deckung

`Experimental.RepatriateLedgerHold.MinPercent` · Standard: **30** · Zahl · 0 % = jeder gehaltene Bestand ist geschützt (altes Verhalten), 100 % = nur vollständig gedeckte Ansprüche

Ein wartender Anspruch schützt seinen gehaltenen Bestand nur dann vor Repatriate und Collect, wenn er schon mindestens diesen Prozentsatz seines Gesamtbedarfs (Metall+Kristall+Deuterium) hält. Ansprüche mit Flügen oder voll gedeckte schützen immer. 0 = jeder gehaltene Bestand ist geschützt (altes Verhalten).

**Beispiel:** 30 = ein Metallminen-Anspruch, der 1 % von 995 Mio hält, sperrt den Himmelskörper nicht mehr.

## Galaxie-Cache (gemeinsame Galaxie-Scans)

#### 6.119 Galaxie-Cache nutzen

`Experimental.GalaxyCache.Active` · Standard: **ja** · Schalter · Standardmäßig an

Den Cache an- oder ausschalten (Standard an). Aus: Alle Worker fragen wieder live ab.

#### 6.120 Eintrag gültig für (Stunden)

`Experimental.GalaxyCache.MaxAgeHours` · Standard: **12** · Zahl · Ältere Einträge werden wieder live abgefragt

Wie alt ein Eintrag sein darf, damit Worker ihn statt einer Live-Abfrage nutzen (Standard 12).

**Beispiel:** 12

#### 6.121 Hintergrund-Scan: ganzes Universum (an) oder nur um meine Planeten (aus)

`Experimental.GalaxyCache.ScanAll` · Standard: **ja** · Schalter · AN = jede Galaxie und jedes System, langsam, zuerst deine eigene Umgebung. „Systeme rund um jeden Planeten“ wird dann ignoriert. AUS = nur die Systeme rund um deine eigenen Planeten, so viele wie dort eingestellt

Der Hintergrund-Scan geht langsam alle Galaxien und Systeme durch, zuerst die Umgebung deiner eigenen Systeme, damit der Cache ein Gesamtbild liefert (Standard an). AUS = nur die Systeme rund um deine Planeten; dann gilt die Einstellung „Systeme rund um jeden Planeten“.

#### 6.122 Scan ganzes Universum: Stunden pro Galaxie (nur wenn AN)

`Experimental.GalaxyCache.HoursPerGalaxy` · Standard: **1** · Zahl · Die Pause zwischen Systemen ergibt sich daraus (1 = etwa 7 Sekunden). 0 = die Pausen unten nutzen

Vollscan: Zeitbudget je Galaxie. Die Pause zwischen zwei Systemen ergibt sich daraus (1 Stunde = etwa 7 Sekunden je System, 9 Galaxien = etwa 9 Stunden). 0 = die Pausen DelayMinSeconds / DelayMaxSeconds nutzen. Standard 1.

#### 6.123 Scan ganzes Universum: wiederholen nach (Stunden) (nur wenn AN)

`Experimental.GalaxyCache.FullScanIntervalHours` · Standard: **24** · Zahl · Jedes System wird höchstens so oft gescannt (24 = einmal am Tag)

Vollscan: jedes System wird nach so vielen Stunden erneut gescannt. 24 = ein Vollscan pro Tag, beginnend an der Hauptwelt und nach außen. Standard 24.

#### 6.124 Spielerliste aus der OGame-API lesen

`Experimental.GalaxyCache.UseApi` · Standard: **ja** · Schalter · players.xml und highscore.xml: je eine Anfrage, keine Last im Spiel. Aus: stattdessen die Highscore-Seiten lesen

Liest die Spielerliste (Status, Allianz, Rang) aus der öffentlichen OGame-API: players.xml und highscore.xml, je eine Anfrage, keine Last im Spiel. Der Host wird aus Universumsnummer und Sprache gebildet. Der API-Status kann nachhinken (ein zurückgekehrter Spieler bleibt eine Weile inaktiv markiert), deshalb entscheiden die Galaxie-Scans über den Status; die API liefert nur die Spielerliste und den Rang. Aus = stattdessen die Highscore-Seiten lesen. Standard an.

#### 6.125 Spieler-Datenbank aus der Highscore

`Experimental.GalaxyCache.UseHighscore` · Standard: **ja** · Schalter · Liest einmal am Tag die Highscore (Status i / I / gesperrt / Urlaub, Rang, Hauptwelt). Systeme inaktiver Spieler werden zuerst frisch gehalten

Liest einmal am Tag die Highscore in eine Spieler-Datenbank: Status (inaktiv i, lange inaktiv I, gesperrt, Urlaub), Rang, Allianz und Hauptwelt. Systeme mit inaktiven Spielern werden zuerst gescannt und frisch gehalten. Rang und Status korrigieren auch alte Cache-Einträge. Standard an.

#### 6.126 Highscore lesen alle (Stunden)

`Experimental.GalaxyCache.HighscoreIntervalHours` · Standard: **24** · Zahl

Wie oft die Highscore gelesen wird (Standard 24 Stunden). Ein fehlgeschlagenes Lesen wird nach einer Stunde wiederholt.

#### 6.127 AutoFarm nutzt Einträge bis (Stunden)

`Experimental.GalaxyCache.AutoFarmMaxAgeHours` · Standard: **36** · Zahl · Ältere Einträge werden live abgefragt

AutoFarm nimmt seinen Scan aus dem Cache, solange der Eintrag nicht älter ist (Standard 36 Stunden). Vor einem Angriff wird das Ziel weiter live geprüft.

#### 6.128 Systeme rund um jeden Planeten (gilt nur, wenn der Schalter oben AUS ist)

`Experimental.GalaxyCache.RangeSystems` · Standard: **15** · Zahl · 15 = 15 Systeme links und rechts = 31 rund um jeden Planeten. Ohne Wirkung, solange der Scan des ganzen Universums an ist

Gilt nur, wenn der Schalter „ganzes Universum“ (ScanAll) AUS ist: Der Hintergrund-Scan geht so viele Systeme links und rechts jedes eigenen Systems durch (Standard 15, also 31 Systeme rund um jeden Planeten). Bei ScanAll an ohne Wirkung.

**Beispiel:** 15 = 31 Systeme rund um jeden Planeten.

#### 6.129 Leere Systeme gültig für (Stunden)

`Experimental.GalaxyCache.EmptyMaxAgeHours` · Standard: **72** · Zahl · Systeme ohne Planeten werden vor Ablauf dieser Zeit nicht erneut gescannt

Systeme ohne Planeten werden erst nach so vielen Stunden erneut gescannt (Standard 72).

#### 6.130 Eigene Systeme: mindestens alle (Minuten) scannen

`Experimental.GalaxyCache.OwnSystemsEveryMinutes` · Standard: **60** · Zahl · Systeme mit eigenen Planeten oder Monden werden so oft neu gescannt, vor allen anderen Scans (0 = aus)

Systeme mit eigenen Planeten und Monden werden mindestens so oft neu gescannt, vor allen anderen Hintergrund-Scans (Standard 60 Minuten, 0 = aus). Eine Raidkolonie neben dir fällt so innerhalb der Stunde auf statt erst beim 24-Stunden-Vollscan.

#### 6.131 Eigene Systeme: zusätzlich so viele Systeme links und rechts

`Experimental.GalaxyCache.OwnSystemsRange` · Standard: **0** · Zahl · 0 = nur die Systeme mit eigenen Planeten und Monden

Zusätzlich so viele Systeme links und rechts jedes eigenen Systems scannen (Standard 0 = nur das System selbst). 1 = auch die beiden Nachbarn.

#### 6.132 Pause zwischen Hintergrund-Abfragen, von (Sekunden)

`Experimental.GalaxyCache.DelayMinSeconds` · Standard: **4** · Zahl

Kürzeste Pause zwischen zwei Hintergrund-Abfragen (Standard 4 Sekunden).

#### 6.133 Pause zwischen Hintergrund-Abfragen, bis (Sekunden)

`Experimental.GalaxyCache.DelayMaxSeconds` · Standard: **8** · Zahl

Längste Pause zwischen zwei Hintergrund-Abfragen (Standard 8 Sekunden).

#### 6.134 Kolonisieren liest den Cache

`Experimental.GalaxyCache.UseInColonize` · Standard: **ja** · Schalter · Besetzte Positionen werden ohne Live-Abfrage übersprungen; freie werden weiter live geprüft

Kolonisieren überspringt Positionen, die der frische Cache als besetzt zeigt. Als frei gezeigte Positionen werden immer live geprüft (Standard an).

#### 6.135 AutoFarm liest den Cache

`Experimental.GalaxyCache.UseInAutoFarm` · Standard: **ja** · Schalter · Der Scan nach inaktiven Zielen nutzt frische Cache-Einträge statt Live-Abfragen; das Ziel wird vor einem Angriff weiter live geprüft

AutoFarm nimmt seinen Scan nach inaktiven Zielen aus dem Cache, solange der Eintrag frisch ist (Standard an). Vor einem Angriff wird das Ziel weiter live neu geprüft.

#### 6.136 Erkannte Ereignisse ins Log schreiben

`Experimental.GalaxyCache.Events` · Standard: **ja** · Schalter · Neue Kolonie, Planet weg, neuer Mond, Statuswechsel, Umzug

Erkannte Änderungen ins Log schreiben: neue Kolonie, Planet weg, neuer Mond, Statuswechsel, Umzug (Standard an).

#### 6.137 Per Telegram / Discord warnen

`Experimental.GalaxyCache.Telegram` · Standard: **ja** · Schalter · Bei neuen Kolonien und Umzügen anderer Spieler

Neue Kolonien und Umzüge anderer Spieler per Telegram / Discord melden (Standard an). Andere Ereignisse stehen nur im Log.

#### 6.140 Beobachtete Systeme: mindestens alle (Stunden) scannen

`Experimental.GalaxyCache.Track.EveryHours` · Standard: **3** · Zahl · Systeme beobachteter Spieler werden so oft aufgefrischt

Systeme beobachteter Spieler werden mindestens so oft neu gescannt (Standard 3 Stunden).

#### 6.141 Beobachteter Spieler: Eil-Scan der Nachbarsysteme

`Experimental.GalaxyCache.Track.RescanOnLoss` · Standard: **ja** · Schalter · Planet weg: meine Systeme +-1. Neue Kolonie oder Umzug in System X: X-1 und X+1. Vor allen anderen Scans

Eil-Scans für beobachtete Spieler (Standard an): Verschwindet ein Planet, werden die Systeme deiner eigenen Planeten neu gescannt; erscheint eine neue Kolonie oder ein Umzug in System X, werden X-1 und X+1 neu gescannt. Ein neu gefundener Spieler wird 24 Stunden beobachtet.

## Berichte aus dem Spiel lesen

#### 6.150 Expeditionsberichte lesen

`Experimental.ReportReading.Expeditions` · Standard: **ja** · Schalter · An (Standard): Funde und Tagesdurchschnitte werden gesammelt. Aus: keine Berichtsanfragen; die Statistik bleibt leer und der Minenplan läuft ohne Expeditionsdurchschnitte

An (Standard): Der Bot liest etwa alle 20 Minuten die Expeditionsberichte und sammelt Funde und Tagesschnitte. Aus: Es werden keine Berichte abgerufen. Die Statistik bleibt leer, die Telegram-Fundmeldungen entfallen und der Minenplan rechnet ohne Expeditions-Tagesschnitte.

## Defender: vor dem Fleetsave noch einmal prüfen

#### 8.032 Vor dem Fleetsave noch einmal prüfen

`Experimental.DefenderRecheck.Active` · Standard: **nein** · Schalter · Standardmäßig aus

Die zweite Prüfung an- oder ausschalten (Standard aus).

#### 8.033 Auf die Antwort warten

`Experimental.DefenderRecheck.TimeoutSeconds` · Standard: **4** · Zahl · Danach wird der Fleetsave wie geplant gesendet

Wie lange der Defender auf die Antwort wartet. Danach geht der Fleetsave wie geplant raus.

**Beispiel:** 4 = nach 4 Sekunden ohne Antwort geht der Fleetsave raus.

## Reservierter Slot für den Fleetsave

#### 8.034 Einen Slot für den Fleetsave reservieren

`Experimental.FleetsaveSlot.Active` · Standard: **ja** · Schalter · Standardmäßig an

Den reservierten Slot an- oder ausschalten (Standard an).

#### 8.035 Reservierte Slots

`Experimental.FleetsaveSlot.Slots` · Standard: **1** · Zahl · Wirkt zusätzlich zu „Freizulassende Slots“

Wie viele Slots für den Fleetsave frei bleiben.

**Beispiel:** 1 = der letzte freie Slot wird nur vom Fleetsave genutzt.

## Bot-Verzögerung (Pause-Knopf und /pause)

#### 9.005 Verzögerungsfunktion aktiv

`Experimental.BotPause.Active` · Standard: **ja** · Schalter · Aus: Der Pause-Knopf und /pause werden abgelehnt

Die Verzögerungsfunktion an- oder ausschalten. Aus: Der Pause-Knopf und /pause werden abgelehnt.

#### 9.006 Dauer der Verzögerung

`Experimental.BotPause.DurationMinutes` · Standard: **15** · Zahl · Wird genutzt, wenn du den Knopf drückst oder /pause ohne Zeit sendest

Wie lange eine Verzögerung dauert, wenn du keine Zeit angibst.

**Beispiel:** 15 = der Bot macht 15 Minuten nach dem Druck auf Pause weiter.

#### 9.007 Abstand vor einem Rückruf

`Experimental.BotPause.RecallMarginMinutes` · Standard: **2** · Zahl · Ein Rückruf, der innerhalb der Verzögerungszeit plus dieser Reserve fällig ist, blockiert die Verzögerung

Sicherheitsabstand zu einem geplanten Rückruf. Die Verzögerung wird abgelehnt, wenn ein Rückruf innerhalb der Verzögerungszeit plus dieser Reserve fällig ist.

**Beispiel:** 2 = bei 15 Minuten Verzögerung blockiert ein Rückruf in 17 Minuten oder früher die Verzögerung.

#### 9.008 Längste Verzögerung

`Experimental.BotPause.MaxDurationMinutes` · Standard: **120** · Zahl · Obergrenze für /pause mit Zeitangabe

Längste Verzögerung, die du mit /pause anfordern kannst.

#### 9.009 Den Defender ebenfalls verzögern

`Experimental.BotPause.StopDefender` · Standard: **nein** · Schalter · Aus (Standard): Der Defender bleibt wachsam. An: nichts läuft; ein bekannter Angriff innerhalb der Grenze unten plus der Verzögerungsdauer blockiert die Verzögerung

Den Defender ebenfalls verzögern (Standard aus; die Einstellung heißt weiter StopDefender). Dann wacht nichts über Angriffe, deshalb wird die Verzögerung abgelehnt, wenn ein bekannter Angriff innerhalb der Grenze unten plus der Verzögerungsdauer eintrifft.

#### 9.010 Keine Verzögerung vor einem Angriff

`Experimental.BotPause.AttackMarginMinutes` · Standard: **15** · Zahl · Ein Angriff, der innerhalb dieser Zeit eintrifft, blockiert die Verzögerung

Eine Verzögerung wird abgelehnt, wenn innerhalb dieser Minuten ein Angriff eintrifft (Standard 15). Spionage-, Angriffs- und Expeditionsmissionen sind außerdem gesperrt, solange der Bot verzögert ist.

#### 9.011 Verzögerungsmodus

`Experimental.BotPause.Mode` · Standard: **„Gate“** · Text · Gate (Standard): Die Worker laufen weiter, überspringen während der Verzögerung ihren Zyklus und machen danach gestaffelt weiter. Stop: die alte harte Pause, alle Worker werden gestoppt und neu gestartet

Gate (Standard): Während der Verzögerung laufen die Worker weiter, überspringen aber ihren Zyklus und machen kurz danach mit ihrer gewohnten Planung weiter, verteilt über etwa eine Minute. Stop: die alte harte Pause, jeder Worker wird gestoppt und danach neu gestartet.

