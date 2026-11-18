Pages: [Overview](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · **Build & Research** · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auctions](seite-auktionen.md) · [Bar and controls](seite-bedienung.md)

Fields: [General](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auctions](felder-auktionen.md)

---

# Build & Research

_Menu item: Build&Research_

Here you control what the bot builds and researches: mines, lifeform buildings (LF), research, ships and defence. Each tab edits its own part of the Brain config block. Only the matching part is saved per tab, and the values are read fresh before writing. At the top right there are Hide data and, with several instances, the instance selection.

![Build & Research](img/bild-Brain.png)

_Interface with template values, no real data._

## LF mines

Shows per planet (sorted by coordinate) the active lifeform and the 12 lifeform buildings with picture, current level and target. At the top are the mine values of Brain.LifeformAutoMine (switch LF mines active, start crystal mine level, target series 0-18, caps for population, food, technology). Manual target levels per building are stored as separate values per planet (yellow); they only apply to the race they were saved with.

1. Change values at the top and click Save changes (Discard resets).
2. Enter a number under a building tile to override the target of that planet; Base values resets it to the default.
3. For many planets: use the collapsible field Override for selected planets (all races), select planets, click Apply, then save.

Fields: [Build & Research (Brain)](felder-bauforschung.md)

## LF research

Shows per planet the lifeform techs actually assigned (18 slots in T1/T2/T3) with current level and status. Editable are target and priority per slot, the maximum research level per planet and the switch LF research active. Planets without their own set use the global set; the first change creates the own set as a copy. Excluded planets appear as paused (you edit that in the Exclusions tab).

1. Change the defaults or the values of a planet, then Save changes.
2. Select planets and click Copy to selected planets to transfer the defaults.
3. Reset brings back the config defaults for a planet.

Fields: [Build & Research (Brain)](felder-bauforschung.md)

## Build overview

Live view of the mine plan, read-only (AutoMine writes the data). At the top a frame shows whether and how things are built (e.g. OFFLINE with build order Off, LIVE with Cheapest per planet or by plan), below it per planet the next steps for mines, LF buildings and LF research as well as the build requests (Open, Waiting for delivery, Delivery on the way, Stock is enough, Built in 24 h). The collapsible field Plan settings (mine plan) holds values of Experimental.MinePlanRanking.

1. Open Plan settings (mine plan), change values, Save changes or Discard.
2. You set the order of all buildings, according to the display, on the start page (Order of all buildings).

Fields: [Security & Sleep](felder-sicherheit.md), [Build & Research (Brain)](felder-bauforschung.md)

## AutoMine

Edits Brain.AutoMine: the card Mine values (AutoMine) with switches and numbers, below it per planet and moon the current building level (Now) and the target. Home planet and home moon use the home values, all other celestial bodies the colony values (if all colony values are 0, the home values apply there too). A celestial body's own target is marked yellow and saved as a ColonyOverrides entry.

1. Change the card's values and Save changes.
2. Apply start phase (colonies) enters the start phase values as maximum levels (mines 15/12/12, solar plant 10, robotics 2, research lab 1, shipyard 1); then adjust and save.
3. Select celestial bodies and copy the base values to them, or Reset own targets to use the colony values again.

Fields: [Build & Research (Brain)](felder-bauforschung.md)

## Exclusions

A matrix of planets and moons against workers. A (red) tick means: this celestial body is excluded for the worker. Columns include AutoMine, LF mines, LF research, AutoShips, AutoDefence, Repatriate, Jump Gate and Sleep fleetsave. Below are the run intervals of the workers (random time between from and to, in minutes).

1. Set or remove ticks, select several celestial bodies and use Exclude from worker …, or Remove from all exclusions.
2. Change intervals and Save changes.

Fields: [Build & Research (Brain)](felder-bauforschung.md), [Fleet & Farm](felder-farm.md), [Security & Sleep](felder-sicherheit.md)

## Research

The account researches (Brain.AutoResearch) as a row of tiles with picture, maximum level and priority tick. In a collapsible block below are the switches and numbers: AutoResearch active, check interval min/max, Research at low lab, Ensure expedition slots, Force expedition start, Optimize for start, Transports, Plasma priority checks payback.

1. Enter the maximum level per technology and set the priority with the tick.
2. Open the options, change them, Save changes.

Fields: [Build & Research (Brain)](felder-bauforschung.md)

## AutoShips

Ship building (config key Brain.AutoCargo). The tile row is the priority from left to right: one order per celestial body and run, namely the first ship from the left whose target amount is not yet reached. The freighter can be moved like any other ship. Pathfinder needs the Discoverer class, Reaper the General class; crawlers are limited by the game. Excluded celestial bodies are in the Exclusions tab.

1. Drag a ship by its picture or move it in priority with the arrows; enter Keep/Target per celestial body.
2. Add ship adds a ship at the end (lowest priority, target 0); an entry can be removed.
3. Set options and Save changes.

Fields: [Build & Research (Brain)](felder-bauforschung.md)

## AutoDefence

Target values of the defence per planet and moon as a tile row (the moon hangs behind its planet). Without its own entry the defaults apply (celestial bodies without own values); the first intervention on a celestial body creates its own set (Overrides, exact coordinate). Options: AutoDefence active, check interval, Fetch resources by transport, Max. production hours, Random order, Skip moons.

1. Change the defaults or the values of a celestial body; Take stock as target adopts the built stock as target.
2. Select celestial bodies and use Copy to selected or Copy to all.
3. Defaults to 0 sets all defaults to 0 (celestial bodies without own values then build nothing; only effective after Save).
4. Save changes.

Fields: [Build & Research (Brain)](felder-bauforschung.md)

## Notes

- Changes only apply after Save changes; Unsaved/Saved shows the state. Discard resets.
- If the build order is set to Off, no build starts (AutoMine, AutoResearch, LF mines, LF research); the build overview is then only a preview.
- According to the code there are also the older pages Build order (read-only: what the Brain workers want to build per celestial body and last started) and Build calculation (mine plan: costs, extra yield, payback, energy; changes nothing). They link to each other through the Build order and Build calculation tabs, but according to the layout have no entry in the main bar.

