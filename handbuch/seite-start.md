Seiten: [Übersicht](README.md) · **Start** · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md)

---

# Start

_Menüpunkt: Start_

Die Startseite ist eine Übersicht aus Kacheln über den Bot und deinen Account: Status, Worker, Rohstoffe, Flotten, Ereignisse. Hier schaltest du die Worker ein und aus und stellst die Slot-Grenzen ein. Die Seite liest nur die Statusdatei des Bots, das Bot-Log und die Config; Zugangsdaten werden nirgends angezeigt.

## Kopfleiste

Oben stehen Schalter für die Anzeige: Daten verbergen (blendet Koordinaten und Namen aus), Layout zurücksetzen, Layout sperren, Doctor, die Deckkraft des Kachel-Hintergrunds und ein Schalter, ob kleinere Kacheln in Lücken nachrücken. Außerdem gibt es eine Aktualisieren-Schaltfläche, die Ressourcen, Schiffe und Produktion aller Planeten und Monde einmal neu liest.

1. Kacheln per Ziehen an der Titelzeile verschieben; die Kachelbreite (Spalten) lässt sich an der Kachel ändern. Mit Layout sperren ist das gegen versehentliches Verschieben gesperrt.
2. Layout zurücksetzen stellt Reihenfolge und Breiten wieder her.
3. Aktualisieren nur drücken, wenn du nicht selbst im Browser spielst (laut Tooltip).

## Worker

Zeigt alle Worker mit einem Schalter (an/aus) und Laufzeitinfo. Ein Klick auf den Namen führt zur Seite des Workers. Für Brain werden die Unter-Worker (Auto Mine, Auto Ships, Auto Research, LF Mine, LF Research, Auto Repatriate, Autobuild Defence, Offer Of The Day, Keep Boosters, Directives, AutoFleetJumpGate) einzeln aufgeführt. Darunter stehen die Slot-Einstellungen (max. Slots je Worker) und die Slot-Priorität je Worker (kleiner = wichtiger). Auch der AutoTrader (Rohstoffhändler) steht in der Liste; seine Einstellungen öffnest du mit einem Klick auf den Namen.

1. Schalter eines Workers anklicken, um ihn ein- oder auszuschalten. Steht dort 'Off by an override', ist er durch einen Override abgeschaltet; bei manchen Workern schaltest du auf deren eigener Seite.
2. Zahl bei 'max slots' bzw. 'slot priority' ändern, um Slots und Priorität zu setzen.
3. Auswahl 'Reihenfolge aller Bauten': Off, CheapestPlanet, CheapestGlobal, Fastest.
4. Auswahl 'Einwohner und Nahrung zuerst, bis': Off, T1, T2, T3.

Felder: [Allgemein](felder-allgemein.md), [Fleet & Farm](felder-farm.md), [Logistic & Expedition](felder-logistik.md), [Build & Research (Brain)](felder-bauforschung.md)

## Status-Kacheln

Konto und Zeit (u. a. Punkte), Rohstoffe (alle Planeten und Monde, mit Produktion), Globale Items (auf allen Planeten aktiv), Flottenbestand (Schiffe auf allen Planeten und Monden), Gestartete Flotten, Lebensform-Boni (Expeditionen), Flotten (Slots und laufende Flotten, mit Slots für Transports (Brain) und Attacks (AutoFarm)) und Letzte Ereignisse (die letzten Information/Warning/Error-Zeilen des heutigen Logs). Oben in der Bot-Kachel stehen Zustand (Running, Sleeping, Ghost sleep), Aufwachzeit bzw. Schlafbeginn und anstehende Rückrufe.

## Eingehende Angriffe, Doctor und Update

Bei einem Angriff erscheint eine rot umrandete Kachel 'Eingehende Angriffe'. Der Doctor prüft die Config auf Widersprüche und zeigt Hinweise bzw. Vorschläge; er lässt sich in der Kopfleiste abschalten. Die Versions-Kachel prüft auf neue Versionen und kann ein Update installieren.

1. Beim Doctor-Hinweis 'Dismiss' klicken, um die Hinweise bis zum nächsten Bot-Start auszublenden; bei einem Vorschlag den Haken 'Bekannt' setzen, damit er nicht mehr gemeldet wird.
2. Update: 'Check now' prüft sofort; bei einer neuen Version 'Install update' und die Rückfrage bestätigen. Der Bot stoppt, ersetzt die Dateien und startet neu; Config, Daten und Logins bleiben (laut Code), die Seite lädt sich danach selbst neu.

## Hinweise

- Die Statuswerte kommen aus einer Statusdatei, die der Bot etwa alle 30 Sekunden schreibt; fehlt sie oder ist sie alt, zeigt die Seite keine oder ältere Werte.
- Ist die Summe der geplanten Slots größer als die verfügbaren (Spiel-Slots minus frei zu haltende Slots), wird der Zähler rot; die Slot-Priorität entscheidet dann.
- Hast du mehrere Instanzen, wählst du sie in einem Auswahlfeld; mit nur einer Instanz ist es ausgeblendet.

