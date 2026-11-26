Pages: [Overview](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Bar and controls](seite-bedienung.md)

Fields: [General](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · **Build & Research (Brain)** · [Security & Sleep](felder-sicherheit.md)

---

# Fields: Build & Research (Brain)

Building, research, lifeform, ships, defence, transports, ledger, boosters and offers.

125 fields, as the B4dLion interface shows them (number = field number before the field name).

![Build & Research (Brain)](img/bild-Brain.png)

_Interface with template values, no real data._

## More settings (2)

#### 3.002 BuildOrder

`Brain.BuildOrder` · Default: **“CheapestGlobal”** · Text

_No description yet._

#### 4.030 Active

`Brain.DeutHold.Active` · Default: **no** · Switch

Fixed deuterium stock per celestial: the amount set below stays untouched by every fleet (cargo and flight fuel); only fleetsave and sleep fleetsave may take it. Cargo, fuel, reserves and the expedition supply are counted on top of it. Builds are not affected.

#### 4.031 Amount

`Brain.DeutHold.Amount` · Default: **10000000** · Number

Deuterium that stays on every celestial in the list below (default 10,000,000). Only fleetsave and sleep fleetsave may take it.

#### 4.032 Celestial

`Brain.DeutHold.Celestials` · Default: **[]** · List · Array/complex - edit in the JSON tab

The celestials (usually moons) that keep the amount above. Add them with the coordinate field. A single entry may also carry its own Amount in the config file.

## AutoMine   ● on

#### 3.003 AutoMine active

`Brain.AutoMine.Active` · Default: **no** · Switch · Switch

Builds mines, storages, power and facilities on all your planets.

#### 3.004 Fetch missing resources by transport

`Brain.AutoMine.Transports.Active` · Default: **no** · Switch · Allow this worker to move resources from other celestials when it lacks them

Allow Brain functions to move resources between your planets.

#### 3.005 Galaxy

`Brain.AutoMine.HomeWorld.Galaxy` · Default: **1** · Number

Your main planet. It uses the level limits of the top block, all other planets use the Colony block.

#### 3.006 System

`Brain.AutoMine.HomeWorld.System` · Default: **1** · Number

Your main planet. It uses the level limits of the top block, all other planets use the Colony block.

#### 3.007 Position

`Brain.AutoMine.HomeWorld.Position` · Default: **1** · Number

Your main planet. It uses the level limits of the top block, all other planets use the Colony block.

#### 3.008 Type

`Brain.AutoMine.HomeWorld.Type` · Default: **“Planet”** · Text

Your main planet. It uses the level limits of the top block, all other planets use the Colony block.

#### 3.065 Run interval, min

`Brain.AutoMine.CheckIntervalMin` · Default: **40** · Number

Shortest pause in minutes between two runs of this function.

#### 3.066 Run interval, max

`Brain.AutoMine.CheckIntervalMax` · Default: **70** · Number · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Longest pause in minutes between two runs. The bot picks a random time between minimum and maximum so it does not act like a clock.

## Caps for the home world

#### 3.009 Max. Metal Mine

`Brain.AutoMine.MaxMetalMine` · Default: **0** · Number

Highest level up to which "Metal Mine" is built. 0 = do not build.

#### 3.010 Max. Crystal Mine

`Brain.AutoMine.MaxCrystalMine` · Default: **0** · Number

Highest level up to which "Crystal Mine" is built. 0 = do not build.

#### 3.011 Max. Deuterium Synthesizer

`Brain.AutoMine.MaxDeuteriumSynthetizer` · Default: **0** · Number

Highest level up to which "Deuterium Synthesizer" is built. 0 = do not build.

#### 3.012 Max. Solar Plant

`Brain.AutoMine.MaxSolarPlant` · Default: **0** · Number

Highest level up to which "Solar Plant" is built. 0 = do not build.

#### 3.013 Max. Fusion Reactor

`Brain.AutoMine.MaxFusionReactor` · Default: **0** · Number

Highest level up to which "Fusion Reactor" is built. 0 = do not build.

#### 3.014 Max. Metal Storage

`Brain.AutoMine.MaxMetalStorage` · Default: **0** · Number

Highest level up to which "Metal Storage" is built. 0 = do not build.

#### 3.015 Max. Crystal Storage

`Brain.AutoMine.MaxCrystalStorage` · Default: **0** · Number

Highest level up to which "Crystal Storage" is built. 0 = do not build.

#### 3.016 Max. Deuterium Tank

`Brain.AutoMine.MaxDeuteriumTank` · Default: **0** · Number

Highest level up to which "Deuterium Tank" is built. 0 = do not build.

#### 3.017 Max. Robotics Factory

`Brain.AutoMine.MaxRoboticsFactory` · Default: **0** · Number

Highest level up to which "Robotics Factory" is built. 0 = do not build.

#### 3.018 Max. Shipyard

`Brain.AutoMine.MaxShipyard` · Default: **0** · Number

Highest level up to which "Shipyard" is built. 0 = do not build.

#### 3.019 Max. Research Lab

`Brain.AutoMine.MaxResearchLab` · Default: **0** · Number

Highest level up to which "Research Lab" is built. 0 = do not build.

#### 3.020 Max. Missile Silo

`Brain.AutoMine.MaxMissileSilo` · Default: **0** · Number

Highest level up to which "Missile Silo" is built. 0 = do not build.

#### 3.021 Max. Nanite Factory

`Brain.AutoMine.MaxNaniteFactory` · Default: **0** · Number

Highest level up to which "Nanite Factory" is built. 0 = do not build.

#### 3.022 Max. Terraformer

`Brain.AutoMine.MaxTerraformer` · Default: **0** · Number

Highest level up to which "Terraformer" is built. 0 = do not build.

#### 3.023 Max. Space Dock

`Brain.AutoMine.MaxSpaceDock` · Default: **0** · Number

Highest level up to which "Space Dock" is built. 0 = do not build.

#### 3.024 Max. Lunar Base

`Brain.AutoMine.MaxLunarBase` · Default: **0** · Number

Highest level up to which "Lunar Base" is built. 0 = do not build.

#### 3.025 Max. Lunar Shipyard

`Brain.AutoMine.MaxLunarShipyard` · Default: **0** · Number

Highest level up to which "Lunar Shipyard" is built. 0 = do not build.

#### 3.026 Max. Lunar Robotics Factory

`Brain.AutoMine.MaxLunarRoboticsFactory` · Default: **0** · Number

Highest level up to which "Lunar Robotics Factory" is built. 0 = do not build.

#### 3.027 Max. Sensor Phalanx

`Brain.AutoMine.MaxSensorPhalanx` · Default: **0** · Number

Highest level up to which "Sensor Phalanx" is built. 0 = do not build.

#### 3.028 Max. Jump Gate

`Brain.AutoMine.MaxJumpGate` · Default: **0** · Number

Highest level up to which "Jump Gate" is built. 0 = do not build.

#### 3.029 Max. Interstellar Anomaly Scanner

`Brain.AutoMine.MaxInterstellarAnomalyScanner` · Default: **0** · Number

Highest level up to which "Interstellar Anomaly Scanner" is built. 0 = do not build.

#### 3.060 Max. days of investment return

`Brain.AutoMine.MaxDaysOfInvestmentReturn` · Default: **9999** · Number

Skip builds that need longer than this many days to pay back. 9999 = no limit.

## Caps for all other planets (Colony)

#### 3.030 Max. Metal Mine

`Brain.AutoMine.Colony.MaxMetalMine` · Default: **0** · Number

Highest level up to which "Metal Mine" is built on colonies. 0 = do not build.

#### 3.031 Max. Crystal Mine

`Brain.AutoMine.Colony.MaxCrystalMine` · Default: **0** · Number

Highest level up to which "Crystal Mine" is built on colonies. 0 = do not build.

#### 3.032 Max. Deuterium Synthesizer

`Brain.AutoMine.Colony.MaxDeuteriumSynthetizer` · Default: **0** · Number

Highest level up to which "Deuterium Synthesizer" is built on colonies. 0 = do not build.

#### 3.033 Max. Solar Plant

`Brain.AutoMine.Colony.MaxSolarPlant` · Default: **0** · Number

Highest level up to which "Solar Plant" is built on colonies. 0 = do not build.

#### 3.034 Max. Fusion Reactor

`Brain.AutoMine.Colony.MaxFusionReactor` · Default: **0** · Number

Highest level up to which "Fusion Reactor" is built on colonies. 0 = do not build.

#### 3.035 Max. Metal Storage

`Brain.AutoMine.Colony.MaxMetalStorage` · Default: **0** · Number

Highest level up to which "Metal Storage" is built on colonies. 0 = do not build.

#### 3.036 Max. Crystal Storage

`Brain.AutoMine.Colony.MaxCrystalStorage` · Default: **0** · Number

Highest level up to which "Crystal Storage" is built on colonies. 0 = do not build.

#### 3.037 Max. Deuterium Tank

`Brain.AutoMine.Colony.MaxDeuteriumTank` · Default: **0** · Number

Highest level up to which "Deuterium Tank" is built on colonies. 0 = do not build.

#### 3.038 Max. Robotics Factory

`Brain.AutoMine.Colony.MaxRoboticsFactory` · Default: **0** · Number

Highest level up to which "Robotics Factory" is built on colonies. 0 = do not build.

#### 3.039 Max. Shipyard

`Brain.AutoMine.Colony.MaxShipyard` · Default: **0** · Number

Highest level up to which "Shipyard" is built on colonies. 0 = do not build.

#### 3.040 Max. Research Lab

`Brain.AutoMine.Colony.MaxResearchLab` · Default: **0** · Number

Highest level up to which "Research Lab" is built on colonies. 0 = do not build.

#### 3.041 Max. Missile Silo

`Brain.AutoMine.Colony.MaxMissileSilo` · Default: **0** · Number

Highest level up to which "Missile Silo" is built on colonies. 0 = do not build.

#### 3.042 Max. Nanite Factory

`Brain.AutoMine.Colony.MaxNaniteFactory` · Default: **0** · Number

Highest level up to which "Nanite Factory" is built on colonies. 0 = do not build.

#### 3.043 Max. Terraformer

`Brain.AutoMine.Colony.MaxTerraformer` · Default: **0** · Number

Highest level up to which "Terraformer" is built on colonies. 0 = do not build.

#### 3.044 Max. Space Dock

`Brain.AutoMine.Colony.MaxSpaceDock` · Default: **0** · Number

Highest level up to which "Space Dock" is built on colonies. 0 = do not build.

#### 3.045 Max. Lunar Base

`Brain.AutoMine.Colony.MaxLunarBase` · Default: **0** · Number

Highest level up to which "Lunar Base" is built on colonies. 0 = do not build.

#### 3.046 Max. Lunar Shipyard

`Brain.AutoMine.Colony.MaxLunarShipyard` · Default: **0** · Number

Highest level up to which "Lunar Shipyard" is built on colonies. 0 = do not build.

#### 3.047 Max. Lunar Robotics Factory

`Brain.AutoMine.Colony.MaxLunarRoboticsFactory` · Default: **0** · Number

Highest level up to which "Lunar Robotics Factory" is built on colonies. 0 = do not build.

#### 3.048 Max. Sensor Phalanx

`Brain.AutoMine.Colony.MaxSensorPhalanx` · Default: **0** · Number

Highest level up to which "Sensor Phalanx" is built on colonies. 0 = do not build.

#### 3.049 Max. Jump Gate

`Brain.AutoMine.Colony.MaxJumpGate` · Default: **0** · Number

Highest level up to which "Jump Gate" is built on colonies. 0 = do not build.

#### 3.050 Max. Interstellar Anomaly Scanner

`Brain.AutoMine.Colony.MaxInterstellarAnomalyScanner` · Default: **0** · Number

Highest level up to which "Interstellar Anomaly Scanner" is built on colonies. 0 = do not build.

## Build options

#### 3.051 Random order

`Brain.AutoMine.RandomOrder` · Default: **no** · Switch

Handle the planets in random order.

#### 3.052 Optimize For Start

`Brain.AutoMine.OptimizeForStart` · Default: **yes** · Switch

Fixed start list on every new planet, in the order of the in-game directives (tiers 1 to 6): mines and solar plant up to metal 14 / crystal 12 / deuterium 10, storages, robotics factory 2, shipyard 4, research lab 6 and 2 solar satellites. A planet that does not have these values yet builds them first. Your max levels win (a step above a limit is skipped). Afterwards the previous start rule continues (mines to 15 / 12 / 12, storages by daily production).

#### 3.053 Prioritize Robots And Nanites

`Brain.AutoMine.PrioritizeRobotsAndNanites` · Default: **yes** · Switch

Build robotics and nanite factories early.

#### 3.054 Build Deposit If Full

`Brain.AutoMine.BuildDepositIfFull` · Default: **yes** · Switch

Build a storage when it is full.

#### 3.055 Build Solar Satellites

`Brain.AutoMine.BuildSolarSatellites` · Default: **yes** · Switch

Build solar satellites when energy is short.

#### 3.058 Build Crawlers

`Brain.AutoMine.BuildCrawlers` · Default: **no** · Switch

Build crawlers.

#### 3.059 Deposit hours

`Brain.AutoMine.DepositHours` · Default: **6** · Number

A storage should hold this many hours of production.

**Example:** 24

#### 3.061 Deut To Leave On Moons

`Brain.AutoMine.DeutToLeaveOnMoons` · Default: **2000000** · Number

Deuterium that stays on moons.

#### 3.063 Fixed Crawler Ziel

`Brain.AutoMine.FixedCrawlerTarget` · Default: **1000** · Number

Fixed number of crawlers to build per planet. 0 = the bot calculates it.

## AutoResearch   ● on

#### 3.067 AutoResearch active

`Brain.AutoResearch.Active` · Default: **no** · Switch · Switch

Researches technologies automatically.

#### 3.068 Fetch missing resources by transport

`Brain.AutoResearch.Transports.Active` · Default: **yes** · Switch · Allow this worker to move resources from other celestials when it lacks them

Allow Brain functions to move resources between your planets.

#### 3.084 Galaxy

`Brain.AutoResearch.Target.Galaxy` · Default: **1** · Number

Planet where research is started, usually the one with the best research lab.

#### 3.085 System

`Brain.AutoResearch.Target.System` · Default: **1** · Number

Planet where research is started, usually the one with the best research lab.

#### 3.086 Position

`Brain.AutoResearch.Target.Position` · Default: **1** · Number

Planet where research is started, usually the one with the best research lab.

#### 3.087 Type

`Brain.AutoResearch.Target.Type` · Default: **“Planet”** · Text

Planet where research is started, usually the one with the best research lab.

#### 3.088 Early-game order

`Brain.AutoResearch.OptimizeForStart` · Default: **yes** · Switch

Fixed start research list in the order of the in-game directives (Energy 1 and 3, Combustion 2 and 3, Espionage 2 and 4, Impulse 3, Combustion 6, Computer 1, Laser 3 and 6, Armour 2, Weapons 1, Shielding 1, Computer 2, Astrophysics 1). Everything beyond that (Astrophysics, Computer Technology and the rest) is done by the normal AutoResearch logic with your Max values and priorities. This unlocks expeditions early; the former “Force expedition start” switch has been removed. The research Max values do not apply to this list.

#### 3.093 PlasmaPriorityChecksPayback

`Brain.AutoResearch.PlasmaPriorityChecksPayback` · Default: **no** · Switch

`false` (default): `PrioritizePlasmaTechnology` is a hard priority - Plasma is researched first while it is below `MaxPlasmaTechnology` and unlocked. `true`: only when its payback is within the last mine payback and `Brain.AutoMine.MaxDaysOfInvestmentReturn`.

#### 3.096 Research even with a low lab

`Brain.AutoResearch.ForceResearchWhateverTheLabLevel` · Default: **no** · Switch

Research even if the research lab is still low.

#### 3.109 Run interval, min

`Brain.AutoResearch.CheckIntervalMin` · Default: **30** · Number

Shortest pause in minutes between two runs of this function.

#### 3.110 Run interval, max

`Brain.AutoResearch.CheckIntervalMax` · Default: **60** · Number · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Longest pause in minutes between two runs. The bot picks a random time between minimum and maximum so it does not act like a clock.

## Research caps (0 = do not research)

#### 3.069 Max. Energy Technology

`Brain.AutoResearch.MaxEnergyTechnology` · Default: **0** · Number

Highest level up to which "Energy Technology" is researched. 0 = do not research.

#### 3.070 Max. Laser Technology

`Brain.AutoResearch.MaxLaserTechnology` · Default: **0** · Number

Highest level up to which "Laser Technology" is researched. 0 = do not research.

#### 3.071 Max. Ion Technology

`Brain.AutoResearch.MaxIonTechnology` · Default: **0** · Number

Highest level up to which "Ion Technology" is researched. 0 = do not research.

#### 3.072 Max. Hyperspace Technology

`Brain.AutoResearch.MaxHyperspaceTechnology` · Default: **0** · Number

Highest level up to which "Hyperspace Technology" is researched. 0 = do not research.

#### 3.073 Max. Plasmatechnologie

`Brain.AutoResearch.MaxPlasmaTechnology` · Default: **0** · Number

Highest level up to which "Plasma Technology" is researched. 0 = do not research.

#### 3.074 MaxCombustionDrive

`Brain.AutoResearch.MaxCombustionDrive` · Default: **0** · Number

Highest level up to which "Combustion Drive" is researched. 0 = do not research.

#### 3.075 MaxImpulseDrive

`Brain.AutoResearch.MaxImpulseDrive` · Default: **0** · Number

Highest level up to which "Impulse Drive" is researched. 0 = do not research.

#### 3.076 Max. Hyperspace Drive

`Brain.AutoResearch.MaxHyperspaceDrive` · Default: **0** · Number

Highest level up to which "Hyperspace Drive" is researched. 0 = do not research.

#### 3.077 Max. Espionage Technology

`Brain.AutoResearch.MaxEspionageTechnology` · Default: **0** · Number

Highest level up to which "Espionage Technology" is researched. 0 = do not research.

#### 3.078 Max. Computer Technology

`Brain.AutoResearch.MaxComputerTechnology` · Default: **0** · Number

Highest level up to which "Computer Technology" is researched. 0 = do not research.

#### 3.079 Max. Astrophysics

`Brain.AutoResearch.MaxAstrophysics` · Default: **0** · Number

Highest level up to which "Astrophysics" is researched. 0 = do not research.

#### 3.080 Max. Intergalactic Research Network

`Brain.AutoResearch.MaxIntergalacticResearchNetwork` · Default: **0** · Number

Highest level up to which "Intergalactic Research Network" is researched. 0 = do not research.

#### 3.081 Max. Weapons Technology

`Brain.AutoResearch.MaxWeaponsTechnology` · Default: **0** · Number

Highest level up to which "Weapons Technology" is researched. 0 = do not research.

#### 3.082 Max. Shielding Technology

`Brain.AutoResearch.MaxShieldingTechnology` · Default: **0** · Number

Highest level up to which "Shielding Technology" is researched. 0 = do not research.

#### 3.083 MaxArmourTechnology

`Brain.AutoResearch.MaxArmourTechnology` · Default: **0** · Number

Highest level up to which "Armour Technology" is researched. 0 = do not research.

## Expedition slots (research)

#### 3.090 Make sure there are expedition slots

`Brain.AutoResearch.EnsureExpoSlots` · Default: **yes** · Switch · Researches Computer Technology / Astrophysics as needed

Research Computer Technology and Astrophysics as needed to get enough expedition slots.

## Priorities (researched first)

#### 3.091 Prioritize Astrophysik

`Brain.AutoResearch.PrioritizeAstrophysics` · Default: **yes** · Switch

Research "Astrophysics" with priority (before the normal order).

#### 3.092 Prioritize Plasmatechnologie

`Brain.AutoResearch.PrioritizePlasmaTechnology` · Default: **no** · Switch

Research "Plasma Technology" with priority (before the normal order).

#### 3.094 Prioritize Energietechnik

`Brain.AutoResearch.PrioritizeEnergyTechnology` · Default: **no** · Switch

Research "Energy Technology" with priority (before the normal order).

#### 3.095 PrioritizeIntergalacticResearchNetwork

`Brain.AutoResearch.PrioritizeIntergalacticResearchNetwork` · Default: **no** · Switch

Research "Intergalactic Research Network" with priority (before the normal order).

#### 3.097 Prioritize Computertechnik

`Brain.AutoResearch.PrioritizeComputerTechnology` · Default: **yes** · Switch

Research "Computer Technology" with priority (before the normal order).

#### 3.098 Prioritize Lasertechnik

`Brain.AutoResearch.PrioritizeLaserTechnology` · Default: **no** · Switch

Research "Laser Technology" with priority (before the normal order).

#### 3.099 Prioritize Ionentechnik

`Brain.AutoResearch.PrioritizeIonTechnology` · Default: **no** · Switch

Research "Ion Technology" with priority (before the normal order).

#### 3.100 Prioritize Hyperraumtechnik

`Brain.AutoResearch.PrioritizeHyperspaceTechnology` · Default: **no** · Switch

Research "Hyperspace Technology" with priority (before the normal order).

#### 3.101 PrioritizeCombustionDrive

`Brain.AutoResearch.PrioritizeCombustionDrive` · Default: **no** · Switch

Research "Combustion Drive" with priority (before the normal order).

#### 3.102 PrioritizeImpulseDrive

`Brain.AutoResearch.PrioritizeImpulseDrive` · Default: **no** · Switch

Research "Impulse Drive" with priority (before the normal order).

#### 3.103 Prioritize Hyperraumantrieb

`Brain.AutoResearch.PrioritizeHyperspaceDrive` · Default: **no** · Switch

Research "Hyperspace Drive" with priority (before the normal order).

#### 3.104 Prioritize Spionagetechnik

`Brain.AutoResearch.PrioritizeEspionageTechnology` · Default: **no** · Switch

Research "Espionage Technology" with priority (before the normal order).

#### 3.105 Prioritize Waffentechnik

`Brain.AutoResearch.PrioritizeWeaponsTechnology` · Default: **no** · Switch

Research "Weapons Technology" with priority (before the normal order).

#### 3.106 Prioritize Schildtechnik

`Brain.AutoResearch.PrioritizeShieldingTechnology` · Default: **no** · Switch

Research "Shielding Technology" with priority (before the normal order).

#### 3.107 PrioritizeArmourTechnology

`Brain.AutoResearch.PrioritizeArmourTechnology` · Default: **no** · Switch

Research "Armour Technology" with priority (before the normal order).

#### 3.108 PrioritizeGravitonTechnology

`Brain.AutoResearch.PrioritizeGravitonTechnology` · Default: **no** · Switch

_No description yet._

## LifeformAutoMine   ● on

#### 3.111 LifeformAutoMine active

`Brain.LifeformAutoMine.Active` · Default: **no** · Switch · Switch

Builds lifeform buildings according to the table in lifeform_targets.json.

#### 3.112 Fetch missing resources by transport

`Brain.LifeformAutoMine.Transports.Active` · Default: **yes** · Switch · Allow this worker to move resources from other celestials when it lacks them

Allow Brain functions to move resources between your planets.

#### 3.113 Start at crystal mine level

`Brain.LifeformAutoMine.StartFromCrystalMineLvl` · Default: **22** · Number · Lifeform buildings start once the crystal mine of a planet reaches this level

A planet starts with lifeform buildings once its crystal mine has this level.

**Example:** 20

#### 3.114 Target row

`Brain.LifeformAutoMine.TargetSlot` · Default: **18** · Number · Row 1-18 of lifeform_targets.json; 0 = fallback caps only

Row (1-18) of the target table that is built towards. 0 = only the fallback limits.

#### 3.115 Max. population building

`Brain.LifeformAutoMine.MaxBasePopulationBuilding` · Default: **0** · Number · Extra limit for small accounts; the lower of table and limit counts. 0 = no extra limit

Extra upper limit for the first population building. The lower value of table and limit counts. For small accounts.

#### 3.116 Max. food building

`Brain.LifeformAutoMine.MaxBaseFoodBuilding` · Default: **0** · Number

Extra upper limit for the first food building.

#### 3.117 Max. technology building

`Brain.LifeformAutoMine.MaxBaseTechBuilding` · Default: **0** · Number

Extra upper limit for the first technology building.

#### 3.121 Run interval, min

`Brain.LifeformAutoMine.CheckIntervalMin` · Default: **45** · Number

Shortest pause in minutes between two runs of this function.

#### 3.122 Run interval, max

`Brain.LifeformAutoMine.CheckIntervalMax` · Default: **90** · Number · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Longest pause in minutes between two runs. The bot picks a random time between minimum and maximum so it does not act like a clock.

## LifeformAutoResearch   ● on

#### 3.123 LifeformAutoResearch active

`Brain.LifeformAutoResearch.Active` · Default: **no** · Switch · Switch

Researches lifeform technologies.

#### 3.124 Fetch missing resources by transport

`Brain.LifeformAutoResearch.Transports.Active` · Default: **yes** · Switch · Allow this worker to move resources from other celestials when it lacks them

Allow Brain functions to move resources between your planets.

#### 3.126 PlanetOverrides

`Brain.LifeformAutoResearch.PlanetOverrides` · Default: **[]** · List · Array/complex - edit in the JSON tab

List of single planets with their own full set of research settings (`MaxResearchLevel`, `MaxTechs11` … `MaxTechs36`, `PriorityTechs`), matched by exact coordinate (`Galaxy`, `System`, `Position`, `Type`). A planet with an entry uses its own values (a missing field falls back to the global values above); a planet without an entry uses the global values. Set on the page Build&Research > LF research: the first change on a planet creates its own set (a copy of the global values), "Reset" removes it again. The template list is empty (`[]`).

#### 3.127 Highest level per tech

`Brain.LifeformAutoResearch.MaxResearchLevel` · Default: **0** · Number

Highest level researched for every lifeform tech.

#### 3.147 Run interval, min

`Brain.LifeformAutoResearch.CheckIntervalMin` · Default: **90** · Number

Shortest pause in minutes between two runs of this function.

#### 3.148 Run interval, max

`Brain.LifeformAutoResearch.CheckIntervalMax` · Default: **180** · Number · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Longest pause in minutes between two runs. The bot picks a random time between minimum and maximum so it does not act like a clock.

## Expedition moons (jump gate and supply)

#### 4.039 Supply expedition moons

`Brain.AutoRepatriate.ExpoSupply.Active` · Default: **no** · Switch · Repatriate: the shortfall is sent from the base in the next supply run

Supplies the expedition moons: if a moon lacks ships or deuterium for its planned expeditions plus the backup (Expeditions BackupExpeditions), the shortfall is noted and sent from the base (first Target) in the next repatriate cycle by deploy. Ships on expeditions and deliveries already on their way count as present. Off by default.

**Example:** Deuterium target per moon: MinDeuteriumOnMoon, or expeditions x FuelToCarry if that is 0.

#### 4.040 Supply run interval (minutes)

`Brain.AutoRepatriate.ExpoSupply.CheckIntervalMinutes` · Default: **30** · Number · Own interval for the supply, independent of the collecting interval; 0 = only together with the repatriate cycle

_No description yet._

#### 4.059 Expedition moons keep only what expeditions need

`Brain.AutoFleetJumpGate.ExpoOverride` · Default: **no** · Switch · Jump gate: the rest, also expedition finds, jumps out. Replaces the general minimum on those moons

On: on the expedition start moons only the ships for the planned expeditions plus the backup (Expeditions BackupExpeditions) stay. Everything else, expedition finds included, jumps out. This replaces the general minimum on those moons. Off by default.

