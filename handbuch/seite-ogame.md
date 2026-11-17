Seiten: [Übersicht](README.md) · [Start](seite-start.md) · **Ogame** · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auktionen](seite-auktionen.md) · [Experimental](seite-experimental.md) · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auktionen](felder-auktionen.md) · [Experimental](felder-experimental.md)

---

# Ogame

_Menüpunkt: Ogame_

Die Seite zeigt das Spiel selbst (die OGame-Oberfläche des Bots) in einem eingebetteten Fenster, damit du im Browser direkt spielen oder nachsehen kannst, ohne den Bot zu verlassen. Die Adresse des Spiels wird aus der Config gebildet (Host und Port der Instanz).

## Spielansicht

Ein Vollbild-Rahmen lädt die Spielseite der gewählten Instanz. Beim Laden erscheint kurz eine Ladeanzeige. Hast du mehrere Instanzen, steht oben ein Auswahlfeld 'Instanz:'; mit nur einer Instanz ist es ausgeblendet. Die zuletzt gewählte Instanz wird vorausgewählt.

1. Instanz im Auswahlfeld wählen; der Rahmen lädt die Spielseite dieser Instanz neu.
2. Aus der Galaxie-Ansicht (Fleet&Farm > Galaxy) kannst du eine Position öffnen; die Ogame-Seite zeigt dann direkt die Galaxieansicht des Spiels an dieser Stelle.

Felder: [Allgemein](felder-allgemein.md)

## Hinweise

- Ist als Host 0.0.0.0, localhost oder leer eingetragen, benutzt die Seite den Host, mit dem du die WebUI aufgerufen hast (so funktioniert der Link auch von einem anderen Rechner).
- Eine Instanz, deren Config-Datei nicht lesbar ist, fehlt in der Auswahl, die anderen bleiben nutzbar.
- Die Adresse ist laut Code immer http://Host:Port/game/index.php; ob der Browser sie erreicht, hängt von Netz und Port-Freigabe ab.

