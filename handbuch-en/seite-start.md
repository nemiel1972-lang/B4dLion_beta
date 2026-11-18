Pages: [Overview](README.md) · **Start** · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auctions](seite-auktionen.md) · [Experimental](seite-experimental.md) · [Bar and controls](seite-bedienung.md)

Fields: [General](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auctions](felder-auktionen.md) · [Experimental](felder-experimental.md)

---

# Start

_Menu item: Start_

The start page is an overview of tiles about the bot and your account: status, workers, resources, fleets, events. Here you switch workers on and off and set the slot limits. The page only reads the bot's status file, the bot log and the config; credentials are never shown.

## Header bar

At the top there are switches for the display: Hide data (hides coordinates and names), Reset layout, Lock layout, Doctor, the opacity of the tile background and a switch for whether smaller tiles move up into gaps. There is also a Refresh button that re-reads resources, ships and production of all planets and moons once.

1. Move tiles by dragging the title bar; the tile width (columns) can be changed on the tile. Lock layout protects against moving them by accident.
2. Reset layout restores order and widths.
3. Only press Refresh while you are not playing in the browser yourself (according to the tooltip).

## Workers

Shows all workers with a switch (on/off) and runtime info. Clicking the name opens the worker's page. For Brain the sub-workers (Auto Mine, Auto Ships, Auto Research, LF Mine, LF Research, Auto Repatriate, Autobuild Defence, Offer Of The Day, Keep Boosters, Directives, AutoFleetJumpGate) are listed individually. Below are the slot settings (max. slots per worker) and the slot priority per worker (lower = more important).

1. Click a worker's switch to turn it on or off. If it says 'Off by an override', it is switched off by an override; for some workers you switch on their own page.
2. Change the number at 'max slots' or 'slot priority' to set slots and priority.
3. Selection 'Order of all buildings': Off, CheapestPlanet, CheapestGlobal, Fastest.
4. Selection 'Population and food first, until': Off, T1, T2, T3.

Fields: [General](felder-allgemein.md), [Fleet & Farm](felder-farm.md), [Logistic & Expedition](felder-logistik.md), [Build & Research (Brain)](felder-bauforschung.md)

## Status tiles

Account and time (including points), Resources (all planets and moons, with production), Global items (active on all planets), Fleet stock (ships on all planets and moons), Fleets sent, Lifeform bonuses (expeditions), Fleets (slots and running fleets, with slots for Transports (Brain) and Attacks (AutoFarm)) and Latest events (the last Information/Warning/Error lines of today's log). At the top of the bot tile you see the state (Running, Sleeping, Ghost sleep), wake-up time or sleep start and pending recalls.

## Incoming attacks, Doctor and update

When you are attacked, a red-bordered tile 'Incoming attacks' appears. The Doctor checks the config for contradictions and shows hints and suggestions; it can be switched off in the header bar. The version tile checks for new versions and can install an update.

1. On a Doctor hint click 'Dismiss' to hide the hints until the next bot start; on a suggestion tick 'Known' so it is not reported again.
2. Update: 'Check now' checks immediately; for a new version click 'Install update' and confirm the question. The bot stops, replaces the files and restarts; config, data and logins stay (according to the code), and the page reloads by itself afterwards.

## Notes

- The status values come from a status file the bot writes about every 30 seconds; if it is missing or old, the page shows no or older values.
- If the sum of the planned slots is larger than the available ones (game slots minus slots to keep free), the counter turns red; the slot priority then decides.
- The Hunter switch exists only in the SLOTS build.
- With several instances you choose one in a selection field; with only one instance it is hidden.

