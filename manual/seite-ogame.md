Pages: [Overview](README.md) · [Start](seite-start.md) · **Ogame** · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auctions](seite-auktionen.md) · [Bar and controls](seite-bedienung.md)

Fields: [General](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auctions](felder-auktionen.md)

---

# Ogame

_Menu item: Ogame_

The page shows the game itself (the bot's OGame interface) in an embedded frame, so you can play or look things up directly in the browser without leaving the bot. The game's address is built from the config (host and port of the instance).

## Game view

A full-screen frame loads the game page of the chosen instance. A loading indicator shows briefly while loading. With several instances there is an 'Instance:' selection field at the top; with only one instance it is hidden. The instance chosen last is preselected.

1. Choose an instance in the selection field; the frame reloads the game page of that instance.
2. From the galaxy view (Fleet&Farm > Galaxy) you can open a position; the Ogame page then shows the game's galaxy view at that spot.

Fields: [General](felder-allgemein.md)

## Notes

- If the host is set to 0.0.0.0, localhost or empty, the page uses the host you opened the WebUI with (so the link also works from another computer).
- An instance whose config file cannot be read is missing from the selection; the others stay usable.
- According to the code the address is always http://host:port/game/index.php; whether the browser can reach it depends on network and port forwarding.

