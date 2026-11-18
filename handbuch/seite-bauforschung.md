Seiten: [Übersicht](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · **Build & Research** · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auktionen](seite-auktionen.md) · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auktionen](felder-auktionen.md) · [Experimental](felder-experimental.md)

---

# Bau & Forschung

_Menüpunkt: Bau&Forschung_

Hier steuerst du, was der Bot baut und erforscht: Minen, Lebensform-Gebäude (LF), Forschung, Schiffe und Verteidigung. Jeder Reiter bearbeitet einen eigenen Teil des Config-Blocks Brain. Gespeichert wird je Reiter nur der zugehörige Teil, die Werte werden vor dem Schreiben frisch gelesen. Oben rechts gibt es Daten verbergen und bei mehreren Instanzen die Instanzauswahl.

![Build & Research](img/bild-Brain.png)

_Oberfläche mit Vorlagen-Werten, ohne echte Daten._

## LF-Minen

Zeigt je Planet (nach Koordinate sortiert) die aktive Lebensform und die 12 Lebensform-Gebäude mit Bild, Ist-Stufe und Ziel. Oben stehen die Minenwerte von Brain.LifeformAutoMine (Schalter LF-Minen aktiv, Start-Kristallminenstufe, Zielreihe 0-18, Obergrenzen für Bevölkerung, Nahrung, Technologie). Manuelle Zielstufen je Gebäude liegen als eigene Werte je Planet (gelb); sie gelten nur für die Rasse, mit der sie gespeichert wurden.

1. Oben Werte ändern und Änderungen speichern klicken (Verwerfen setzt zurück).
2. Unter einer Gebäudekachel eine Zahl eintragen, um das Ziel dieses Planeten zu überschreiben; Grundwerte setzt es auf die Vorgabe zurück.
3. Für viele Planeten: Klappfeld Überschreiben für markierte Planeten (alle Rassen) nutzen, Planeten markieren, Anwenden klicken, dann speichern.

Felder: [Build & Research (Brain)](felder-bauforschung.md)

## LF-Forschung

Zeigt je Planet die tatsächlich vergebenen Lebensform-Techs (18 Slots in T1/T2/T3) mit Ist-Stufe und Stand. Bearbeitbar sind Ziel und Priorität je Slot, die maximale Forschungsstufe je Planet und der Schalter LF-Forschung aktiv. Planeten ohne eigenen Satz nutzen den globalen Satz; die erste Änderung legt den eigenen Satz als Kopie an. Ausgeschlossene Planeten erscheinen als pausiert (bearbeitet wird das im Reiter Ausschlüsse).

1. Werte der Standardwerte oder eines Planeten ändern, dann Änderungen speichern.
2. Planeten markieren und Auf markierte Planeten kopieren, um die Standardwerte zu übertragen.
3. Zurücksetzen holt die Standardwerte der Config für einen Planeten zurück.

Felder: [Build & Research (Brain)](felder-bauforschung.md)

## Bauübersicht

Live-Ansicht des Minenplans, nur lesend (die Daten schreibt AutoMine). Oben zeigt ein Rahmen, ob und wie gebaut wird (z. B. OFFLINE bei Baureihenfolge Aus, LIVE bei Billigstes je Planet oder nach Plan), darunter je Planet die nächsten Schritte für Minen, LF-Gebäude und LF-Forschung sowie die Bauanfragen (Offen, Warten auf Lieferung, Lieferung unterwegs, Bestand reicht, Gebaut in 24 h). Im einklappbaren Feld Planeinstellungen (Minenplan) stehen Werte von Experimental.MinePlanRanking.

1. Planeinstellungen (Minenplan) aufklappen, Werte ändern, Änderungen speichern oder Verwerfen.
2. Die Reihenfolge aller Bauten stellst du laut Anzeige auf der Startseite ein (Reihenfolge aller Bauten).

Felder: [Experimental](felder-experimental.md), [Build & Research (Brain)](felder-bauforschung.md)

## AutoMine

Bearbeitet Brain.AutoMine: Karte Minenwerte (AutoMine) mit Schaltern und Zahlen, darunter je Planet und Mond aktuelle Gebäudestufe (Jetzt) und Ziel. Heimatplanet und Heimatmond nutzen die Heimat-Werte, alle anderen Himmelskörper die Kolonie-Werte (sind alle Kolonie-Werte 0, gelten auch dort die Heimat-Werte). Ein eigenes Ziel eines Himmelskörpers wird gelb markiert und als ColonyOverrides-Eintrag gespeichert.

1. Werte der Karte ändern und Änderungen speichern.
2. Startphase übernehmen (Kolonien) trägt die Werte der Startphase als Maximalstufen ein (Minen 15/12/12, Solarkraftwerk 10, Robotik 2, Forschungslabor 1, Schiffswerft 1); danach anpassen und speichern.
3. Himmelskörper markieren und die Basiswerte darauf kopieren, oder Eigene Ziele zurücksetzen, um wieder die Kolonie-Werte zu nutzen.

Felder: [Build & Research (Brain)](felder-bauforschung.md)

## Ausschlüsse

Matrix aus Planeten und Monden gegen Worker. Ein Häkchen (rot) heißt: dieser Himmelskörper ist für den Worker ausgeschlossen. Spalten sind u. a. AutoMine, LF-Minen, LF-Forschung, AutoShips, AutoDefence, Repatriate, Jump Gate und Schlaf-Fleetsave. Darunter stehen die Laufintervalle der Worker (zufällige Zeit zwischen von und bis, in Minuten).

1. Häkchen setzen oder entfernen, mehrere Himmelskörper auswählen und Bei Worker ausschließen … nutzen, oder Aus allen Ausschlüssen entfernen.
2. Intervalle ändern und Änderungen speichern.

Felder: [Build & Research (Brain)](felder-bauforschung.md), [Fleet & Farm](felder-farm.md), [Security & Sleep](felder-sicherheit.md)

## Forschung

Die Konto-Forschungen (Brain.AutoResearch) als Kachelreihe mit Bild, Maximalstufe und Prioritäts-Haken. In einem einklappbaren Block darunter stehen die Schalter und Zahlen: AutoResearch aktiv, Prüfintervall min/max, Forschung bei niedrigem Labor, Expeditionsslots sicherstellen, Expeditionsstart erzwingen, Für Start optimieren, Transporte, Plasma-Priorität prüft Amortisation.

1. Maximalstufe je Technologie eintragen und die Priorität per Haken setzen.
2. Optionen aufklappen, ändern, Änderungen speichern.

Felder: [Build & Research (Brain)](felder-bauforschung.md)

## AutoShips

Schiffsbau (Config-Schlüssel Brain.AutoCargo). Die Kachelreihe ist die Priorität von links nach rechts: pro Himmelskörper und Lauf ein Auftrag, nämlich das erste Schiff von links, dessen Zielmenge noch nicht erreicht ist. Das Frachtschiff lässt sich wie jedes andere verschieben. Pathfinder braucht die Entdecker-Klasse, Reaper die General-Klasse; Crawler sind durch das Spiel begrenzt. Ausgeschlossene Himmelskörper stehen im Reiter Ausschlüsse.

1. Schiff per Bild ziehen oder mit den Pfeilen in der Priorität verschieben; Behalten/Ziel pro Himmelskörper eintragen.
2. Schiff hinzufügen fügt ein Schiff am Ende (niedrigste Priorität, Ziel 0) hinzu; ein Eintrag lässt sich entfernen.
3. Optionen setzen und Änderungen speichern.

Felder: [Build & Research (Brain)](felder-bauforschung.md)

## AutoDefence

Zielwerte der Verteidigung je Planet und Mond als Kachelreihe (der Mond hängt hinter seinem Planeten). Ohne eigenen Eintrag gelten die Standardwerte (Himmelskörper ohne eigene Werte); der erste Eingriff bei einem Himmelskörper legt dessen eigenen Satz an (Overrides, exakte Koordinate). Optionen: AutoDefence aktiv, Prüfintervall, Rohstoffe per Transport holen, Max. Produktionsstunden, Zufällige Reihenfolge, Monde überspringen.

1. Standardwerte oder Werte eines Himmelskörpers ändern; Jetzt zum Ziel übernimmt den gebauten Bestand als Ziel.
2. Himmelskörper markieren und Auf markierte kopieren oder Auf alle kopieren nutzen.
3. Standardwerte auf 0 setzt alle Standardwerte auf 0 (Himmelskörper ohne eigene Werte bauen dann nichts; erst mit Speichern wirksam).
4. Änderungen speichern.

Felder: [Build & Research (Brain)](felder-bauforschung.md)

## Hinweise

- Änderungen gelten erst nach Änderungen speichern; Ungespeichert/Gespeichert zeigt den Stand. Verwerfen setzt zurück.
- Ist die Baureihenfolge auf Aus gestellt, startet kein Bau (AutoMine, AutoResearch, LF-Minen, LF-Forschung); die Bauübersicht ist dann nur eine Vorschau.
- Laut Code gibt es zusätzlich die älteren Seiten Baureihenfolge (nur lesend: was die Brain-Worker pro Himmelskörper bauen wollen und zuletzt gestartet haben) und Bauberechnung (Minenplan: Kosten, Mehrertrag, Amortisation, Energie; ändert nichts). Sie verlinken sich über die Reiter Baureihenfolge und Bauberechnung gegenseitig, haben aber laut Layout keinen Eintrag in der Hauptleiste.

