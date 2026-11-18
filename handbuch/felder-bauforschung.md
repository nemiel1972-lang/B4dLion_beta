Seiten: [Übersicht](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auktionen](seite-auktionen.md) · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · **Build & Research (Brain)** · [Security & Sleep](felder-sicherheit.md) · [Auktionen](felder-auktionen.md) · [Experimental](felder-experimental.md)

---

# Felder: Build & Research (Brain)

Bau, Forschung, Lebensform, Schiffe, Verteidigung, Transporte, Ledger, Booster und Angebote.

126 Felder, so wie die B4dLion-Oberfläche sie zeigt (Nummer = Feldnummer vor dem Feldnamen).

![Build & Research (Brain)](img/bild-Brain.png)

_Oberfläche mit Vorlagen-Werten, ohne echte Daten._

## More settings (2)

#### 3.002 BuildOrder

`Brain.BuildOrder` · Standard: **„CheapestGlobal“** · Text

_Noch keine Beschreibung._

#### 4.030 Aktiv

`Brain.DeutHold.Active` · Standard: **nein** · Schalter

Fester Deuterium-Bestand je Himmelskörper: Die unten eingetragene Menge bleibt von jedem Flug unangetastet (Ladung und Flugsprit); nur Fleetsave und Schlaf-Fleetsave dürfen sie mitnehmen. Ladung, Sprit, Reserven und die Expeditions-Versorgung werden oben drauf gerechnet. Bauten sind nicht betroffen.

#### 4.031 Amount

`Brain.DeutHold.Amount` · Standard: **10000000** · Zahl

Deuterium, das auf jedem Himmelskörper der Liste unten bleibt (Standard 10.000.000). Nur Fleetsave und Schlaf-Fleetsave dürfen es mitnehmen.

#### 4.032 Himmelskörper

`Brain.DeutHold.Celestials` · Standard: **[]** · Liste · Array/komplex – im JSON-Tab bearbeiten

Die Himmelskörper (meist Monde), die die Menge oben halten. Mit dem Koordinatenfeld hinzufügen. Ein einzelner Eintrag kann in der Config-Datei auch eine eigene Amount tragen.

## AutoMine   ● on

#### 3.003 AutoMine aktiv

`Brain.AutoMine.Active` · Standard: **nein** · Schalter · Schalter

Baut Minen, Lager, Energie und Anlagen auf allen deinen Planeten.

#### 3.004 Fehlende Rohstoffe per Transport holen

`Brain.AutoMine.Transports.Active` · Standard: **nein** · Schalter · Diesem Worker erlauben, fehlende Rohstoffe per Transport von anderen Himmelskörpern zu holen

Brain-Funktionen erlauben, Rohstoffe zwischen deinen Planeten zu bewegen.

#### 3.005 Galaxie

`Brain.AutoMine.HomeWorld.Galaxy` · Standard: **1** · Zahl

Dein Hauptplanet. Er nutzt die Stufenlimits des obersten Blocks, alle anderen Planeten nutzen den Colony-Block.

#### 3.006 System

`Brain.AutoMine.HomeWorld.System` · Standard: **1** · Zahl

Dein Hauptplanet. Er nutzt die Stufenlimits des obersten Blocks, alle anderen Planeten nutzen den Colony-Block.

#### 3.007 Position

`Brain.AutoMine.HomeWorld.Position` · Standard: **1** · Zahl

Dein Hauptplanet. Er nutzt die Stufenlimits des obersten Blocks, alle anderen Planeten nutzen den Colony-Block.

#### 3.008 Typ

`Brain.AutoMine.HomeWorld.Type` · Standard: **„Planet“** · Text

Dein Hauptplanet. Er nutzt die Stufenlimits des obersten Blocks, alle anderen Planeten nutzen den Colony-Block.

#### 3.065 Laufintervall, min

`Brain.AutoMine.CheckIntervalMin` · Standard: **40** · Zahl

Kürzeste Pause in Minuten zwischen zwei Durchläufen dieser Funktion.

#### 3.066 Laufintervall, max

`Brain.AutoMine.CheckIntervalMax` · Standard: **70** · Zahl · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Längste Pause in Minuten zwischen zwei Durchläufen. Der Bot wählt eine zufällige Zeit zwischen Minimum und Maximum, damit er nicht wie eine Uhr arbeitet.

## Limits für den Hauptplaneten

#### 3.009 Max. Metallmine

`Brain.AutoMine.MaxMetalMine` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Metallmine“ gebaut wird. 0 = nicht bauen.

#### 3.010 Max. Kristallmine

`Brain.AutoMine.MaxCrystalMine` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Kristallmine“ gebaut wird. 0 = nicht bauen.

#### 3.011 Max. Deuterium-Synthetisierer

`Brain.AutoMine.MaxDeuteriumSynthetizer` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Deuterium-Synthetisierer“ gebaut wird. 0 = nicht bauen.

#### 3.012 Max. Solarkraftwerk

`Brain.AutoMine.MaxSolarPlant` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Solarkraftwerk“ gebaut wird. 0 = nicht bauen.

#### 3.013 Max. Fusionskraftwerk

`Brain.AutoMine.MaxFusionReactor` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Fusionskraftwerk“ gebaut wird. 0 = nicht bauen.

#### 3.014 Max. Metallspeicher

`Brain.AutoMine.MaxMetalStorage` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Metallspeicher“ gebaut wird. 0 = nicht bauen.

#### 3.015 Max. Kristallspeicher

`Brain.AutoMine.MaxCrystalStorage` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Kristallspeicher“ gebaut wird. 0 = nicht bauen.

#### 3.016 Max. Deuterium-Tank

`Brain.AutoMine.MaxDeuteriumTank` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Deuteriumtank“ gebaut wird. 0 = nicht bauen.

#### 3.017 Max. Roboterfabrik

`Brain.AutoMine.MaxRoboticsFactory` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Roboterfabrik“ gebaut wird. 0 = nicht bauen.

#### 3.018 Max. Raumschiffwerft

`Brain.AutoMine.MaxShipyard` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Raumschiffwerft“ gebaut wird. 0 = nicht bauen.

#### 3.019 Max. Forschungslabor

`Brain.AutoMine.MaxResearchLab` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Forschungslabor“ gebaut wird. 0 = nicht bauen.

#### 3.020 Max. Raketensilo

`Brain.AutoMine.MaxMissileSilo` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Raketensilo“ gebaut wird. 0 = nicht bauen.

#### 3.021 Max. Nanitenfabrik

`Brain.AutoMine.MaxNaniteFactory` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Nanitenfabrik“ gebaut wird. 0 = nicht bauen.

#### 3.022 Max. Terraformer

`Brain.AutoMine.MaxTerraformer` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Terraformer“ gebaut wird. 0 = nicht bauen.

#### 3.023 Max. Raumschiffdock

`Brain.AutoMine.MaxSpaceDock` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Raumdock“ gebaut wird. 0 = nicht bauen.

#### 3.024 Max. Mondbasis

`Brain.AutoMine.MaxLunarBase` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Mondbasis“ gebaut wird. 0 = nicht bauen.

#### 3.025 Max. Mond-Raumschiffwerft

`Brain.AutoMine.MaxLunarShipyard` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Mond-Raumschiffwerft“ gebaut wird. 0 = nicht bauen.

#### 3.026 Max. Mond-Roboterfabrik

`Brain.AutoMine.MaxLunarRoboticsFactory` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Mond-Roboterfabrik“ gebaut wird. 0 = nicht bauen.

#### 3.027 Max. Sensorphalanx

`Brain.AutoMine.MaxSensorPhalanx` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Sensorphalanx“ gebaut wird. 0 = nicht bauen.

#### 3.028 Max. Sprungtor

`Brain.AutoMine.MaxJumpGate` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Sprungtor“ gebaut wird. 0 = nicht bauen.

#### 3.029 Max. Interstellar Anomaly Scanner

`Brain.AutoMine.MaxInterstellarAnomalyScanner` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Interstellarer Anomalie-Scanner“ gebaut wird. 0 = nicht bauen.

#### 3.060 Max. Tage Of Investment Return

`Brain.AutoMine.MaxDaysOfInvestmentReturn` · Standard: **9999** · Zahl

Bauten überspringen, die länger als diese Tage brauchen, um sich zu amortisieren. 9999 = kein Limit.

## Limits für alle anderen Planeten (Colony)

#### 3.030 Max. Metallmine

`Brain.AutoMine.Colony.MaxMetalMine` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Metallmine“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.031 Max. Kristallmine

`Brain.AutoMine.Colony.MaxCrystalMine` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Kristallmine“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.032 Max. Deuterium-Synthetisierer

`Brain.AutoMine.Colony.MaxDeuteriumSynthetizer` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Deuterium-Synthetisierer“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.033 Max. Solarkraftwerk

`Brain.AutoMine.Colony.MaxSolarPlant` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Solarkraftwerk“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.034 Max. Fusionskraftwerk

`Brain.AutoMine.Colony.MaxFusionReactor` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Fusionskraftwerk“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.035 Max. Metallspeicher

`Brain.AutoMine.Colony.MaxMetalStorage` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Metallspeicher“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.036 Max. Kristallspeicher

`Brain.AutoMine.Colony.MaxCrystalStorage` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Kristallspeicher“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.037 Max. Deuterium-Tank

`Brain.AutoMine.Colony.MaxDeuteriumTank` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Deuteriumtank“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.038 Max. Roboterfabrik

`Brain.AutoMine.Colony.MaxRoboticsFactory` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Roboterfabrik“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.039 Max. Raumschiffwerft

`Brain.AutoMine.Colony.MaxShipyard` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Raumschiffwerft“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.040 Max. Forschungslabor

`Brain.AutoMine.Colony.MaxResearchLab` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Forschungslabor“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.041 Max. Raketensilo

`Brain.AutoMine.Colony.MaxMissileSilo` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Raketensilo“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.042 Max. Nanitenfabrik

`Brain.AutoMine.Colony.MaxNaniteFactory` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Nanitenfabrik“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.043 Max. Terraformer

`Brain.AutoMine.Colony.MaxTerraformer` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Terraformer“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.044 Max. Raumschiffdock

`Brain.AutoMine.Colony.MaxSpaceDock` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Raumdock“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.045 Max. Mondbasis

`Brain.AutoMine.Colony.MaxLunarBase` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Mondbasis“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.046 Max. Mond-Raumschiffwerft

`Brain.AutoMine.Colony.MaxLunarShipyard` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Mond-Raumschiffwerft“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.047 Max. Mond-Roboterfabrik

`Brain.AutoMine.Colony.MaxLunarRoboticsFactory` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Mond-Roboterfabrik“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.048 Max. Sensorphalanx

`Brain.AutoMine.Colony.MaxSensorPhalanx` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Sensorphalanx“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.049 Max. Sprungtor

`Brain.AutoMine.Colony.MaxJumpGate` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Sprungtor“ auf Kolonien gebaut wird. 0 = nicht bauen.

#### 3.050 Max. Interstellar Anomaly Scanner

`Brain.AutoMine.Colony.MaxInterstellarAnomalyScanner` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Interstellarer Anomalie-Scanner“ auf Kolonien gebaut wird. 0 = nicht bauen.

## Bau-Optionen

#### 3.051 Zufällige Reihenfolge

`Brain.AutoMine.RandomOrder` · Standard: **nein** · Schalter

Die Planeten in zufälliger Reihenfolge bearbeiten.

#### 3.052 Optimize For Start

`Brain.AutoMine.OptimizeForStart` · Standard: **ja** · Schalter

Die Bauordnung für den Spielstart nutzen: erst die Minen auf 15 / 12 / 12, dann die Lager auf Stufe 10, ab den höheren Startminen nach jeder Mine ein Lager, dazu das Solarkraftwerk bis Stufe 10 (eine Stufe je 3 Minenstufen) (Roboterfabrik und Raumschiffwerft wie bisher). Ein Planet gilt als neu, solange eine Mine unter ihrem Startziel liegt oder ein Lager fehlt. Deine Max-Stufen gelten weiter.

#### 3.053 Prioritize Robots And Nanites

`Brain.AutoMine.PrioritizeRobotsAndNanites` · Standard: **ja** · Schalter

Roboterfabrik und Nanitenfabrik früh bauen.

#### 3.054 Build Deposit If Full

`Brain.AutoMine.BuildDepositIfFull` · Standard: **ja** · Schalter

Ein Lager bauen, wenn es voll ist.

#### 3.055 Build Solar Satellites

`Brain.AutoMine.BuildSolarSatellites` · Standard: **ja** · Schalter

Solarsatelliten bauen, wenn Energie fehlt.

#### 3.058 Build Crawlers

`Brain.AutoMine.BuildCrawlers` · Standard: **nein** · Schalter

Crawler bauen.

#### 3.059 Deposit Stunden

`Brain.AutoMine.DepositHours` · Standard: **6** · Zahl

Ein Lager soll so viele Stunden Produktion fassen.

**Beispiel:** 24

#### 3.061 Deut To Leave On Moons

`Brain.AutoMine.DeutToLeaveOnMoons` · Standard: **2000000** · Zahl

Deuterium, das auf Monden bleibt.

#### 3.063 Fixed Crawler Ziel

`Brain.AutoMine.FixedCrawlerTarget` · Standard: **1000** · Zahl

Feste Crawler-Zahl pro Planet. 0 = der Bot rechnet selbst.

## AutoResearch   ● on

#### 3.067 AutoResearch aktiv

`Brain.AutoResearch.Active` · Standard: **nein** · Schalter · Schalter

Erforscht Technologien automatisch.

#### 3.068 Fehlende Rohstoffe per Transport holen

`Brain.AutoResearch.Transports.Active` · Standard: **ja** · Schalter · Diesem Worker erlauben, fehlende Rohstoffe per Transport von anderen Himmelskörpern zu holen

Brain-Funktionen erlauben, Rohstoffe zwischen deinen Planeten zu bewegen.

#### 3.084 Galaxie

`Brain.AutoResearch.Target.Galaxy` · Standard: **1** · Zahl

Planet, auf dem die Forschung gestartet wird, meist der mit dem besten Forschungslabor.

#### 3.085 System

`Brain.AutoResearch.Target.System` · Standard: **1** · Zahl

Planet, auf dem die Forschung gestartet wird, meist der mit dem besten Forschungslabor.

#### 3.086 Position

`Brain.AutoResearch.Target.Position` · Standard: **1** · Zahl

Planet, auf dem die Forschung gestartet wird, meist der mit dem besten Forschungslabor.

#### 3.087 Typ

`Brain.AutoResearch.Target.Type` · Standard: **„Planet“** · Text

Planet, auf dem die Forschung gestartet wird, meist der mit dem besten Forschungslabor.

#### 3.088 Reihenfolge für den Spielstart

`Brain.AutoResearch.OptimizeForStart` · Standard: **ja** · Schalter

Die Forschungsreihenfolge für den Spielstart nutzen.

#### 3.089 ForceExpeditionStart

`Brain.AutoResearch.ForceExpeditionStart` · Standard: **nein** · Schalter

Research Astrophysics 1 (with Espionage 4, Impulse Drive 3) and Combustion Drive 6 first, so expeditions and small/large cargo ships are unlocked early. Takes precedence over the priorities and ignores the max levels. Default off.

_Beschreibung noch englisch._

#### 3.093 PlasmaPriorityChecksPayback

`Brain.AutoResearch.PlasmaPriorityChecksPayback` · Standard: **nein** · Schalter

`false` (default): `PrioritizePlasmaTechnology` is a hard priority - Plasma is researched first while it is below `MaxPlasmaTechnology` and unlocked. `true`: only when its payback is within the last mine payback and `Brain.AutoMine.MaxDaysOfInvestmentReturn`.

_Beschreibung noch englisch._

#### 3.096 Auch mit niedrigem Labor forschen

`Brain.AutoResearch.ForceResearchWhateverTheLabLevel` · Standard: **nein** · Schalter

Auch forschen, wenn das Forschungslabor noch niedrig ist.

#### 3.109 Laufintervall, min

`Brain.AutoResearch.CheckIntervalMin` · Standard: **30** · Zahl

Kürzeste Pause in Minuten zwischen zwei Durchläufen dieser Funktion.

#### 3.110 Laufintervall, max

`Brain.AutoResearch.CheckIntervalMax` · Standard: **60** · Zahl · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Längste Pause in Minuten zwischen zwei Durchläufen. Der Bot wählt eine zufällige Zeit zwischen Minimum und Maximum, damit er nicht wie eine Uhr arbeitet.

## Forschungslimits (0 = nicht erforschen)

#### 3.069 Max. Energietechnik

`Brain.AutoResearch.MaxEnergyTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Energietechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.070 Max. Lasertechnik

`Brain.AutoResearch.MaxLaserTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Lasertechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.071 Max. Ionentechnik

`Brain.AutoResearch.MaxIonTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Ionentechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.072 Max. Hyperraumtechnik

`Brain.AutoResearch.MaxHyperspaceTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Hyperraumtechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.073 Max. Plasmatechnologie

`Brain.AutoResearch.MaxPlasmaTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Plasmatechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.074 Max. Verbrennungstriebwerk

`Brain.AutoResearch.MaxCombustionDrive` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Verbrennungsantrieb“ erforscht wird. 0 = nicht erforschen.

#### 3.075 Max. Impulstriebwerk

`Brain.AutoResearch.MaxImpulseDrive` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Impulsantrieb“ erforscht wird. 0 = nicht erforschen.

#### 3.076 Max. Hyperraumantrieb

`Brain.AutoResearch.MaxHyperspaceDrive` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Hyperraumantrieb“ erforscht wird. 0 = nicht erforschen.

#### 3.077 Max. Spionagetechnik

`Brain.AutoResearch.MaxEspionageTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Spionagetechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.078 Max. Computertechnik

`Brain.AutoResearch.MaxComputerTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Computertechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.079 Max. Astrophysik

`Brain.AutoResearch.MaxAstrophysics` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Astrophysik“ erforscht wird. 0 = nicht erforschen.

#### 3.080 Max. Intergalaktisches Forschungsnetzwerk

`Brain.AutoResearch.MaxIntergalacticResearchNetwork` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Intergalaktisches Forschungsnetzwerk“ erforscht wird. 0 = nicht erforschen.

#### 3.081 Max. Waffentechnik

`Brain.AutoResearch.MaxWeaponsTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Waffentechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.082 Max. Schildtechnik

`Brain.AutoResearch.MaxShieldingTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Schildtechnik“ erforscht wird. 0 = nicht erforschen.

#### 3.083 Max. Raumschiffpanzerung

`Brain.AutoResearch.MaxArmourTechnology` · Standard: **0** · Zahl

Höchste Stufe, bis zu der „Panzerung“ erforscht wird. 0 = nicht erforschen.

## Expeditions-Slots (Forschung)

#### 3.090 Für freie Expeditionsslots sorgen

`Brain.AutoResearch.EnsureExpoSlots` · Standard: **ja** · Schalter · Erforscht Computertechnik / Astrophysik nach Bedarf

Computertechnik und Astrophysik nach Bedarf erforschen, um genug Expeditionsslots zu haben.

## Prioritäten (zuerst erforscht)

#### 3.091 Prioritize Astrophysik

`Brain.AutoResearch.PrioritizeAstrophysics` · Standard: **ja** · Schalter

„Astrophysik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.092 Prioritize Plasmatechnologie

`Brain.AutoResearch.PrioritizePlasmaTechnology` · Standard: **nein** · Schalter

„Plasmatechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.094 Prioritize Energietechnik

`Brain.AutoResearch.PrioritizeEnergyTechnology` · Standard: **nein** · Schalter

„Energietechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.095 Prioritize Intergalaktisches Forschungsnetzwerk

`Brain.AutoResearch.PrioritizeIntergalacticResearchNetwork` · Standard: **nein** · Schalter

„Intergalaktisches Forschungsnetzwerk“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.097 Prioritize Computertechnik

`Brain.AutoResearch.PrioritizeComputerTechnology` · Standard: **ja** · Schalter

„Computertechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.098 Prioritize Lasertechnik

`Brain.AutoResearch.PrioritizeLaserTechnology` · Standard: **nein** · Schalter

„Lasertechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.099 Prioritize Ionentechnik

`Brain.AutoResearch.PrioritizeIonTechnology` · Standard: **nein** · Schalter

„Ionentechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.100 Prioritize Hyperraumtechnik

`Brain.AutoResearch.PrioritizeHyperspaceTechnology` · Standard: **nein** · Schalter

„Hyperraumtechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.101 Prioritize Verbrennungstriebwerk

`Brain.AutoResearch.PrioritizeCombustionDrive` · Standard: **nein** · Schalter

„Verbrennungsantrieb“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.102 Prioritize Impulstriebwerk

`Brain.AutoResearch.PrioritizeImpulseDrive` · Standard: **nein** · Schalter

„Impulsantrieb“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.103 Prioritize Hyperraumantrieb

`Brain.AutoResearch.PrioritizeHyperspaceDrive` · Standard: **nein** · Schalter

„Hyperraumantrieb“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.104 Prioritize Spionagetechnik

`Brain.AutoResearch.PrioritizeEspionageTechnology` · Standard: **nein** · Schalter

„Spionagetechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.105 Prioritize Waffentechnik

`Brain.AutoResearch.PrioritizeWeaponsTechnology` · Standard: **nein** · Schalter

„Waffentechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.106 Prioritize Schildtechnik

`Brain.AutoResearch.PrioritizeShieldingTechnology` · Standard: **nein** · Schalter

„Schildtechnik“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.107 Prioritize Raumschiffpanzerung

`Brain.AutoResearch.PrioritizeArmourTechnology` · Standard: **nein** · Schalter

„Panzerung“ bevorzugt erforschen (vor der normalen Reihenfolge).

#### 3.108 Prioritize Gravitonforschung

`Brain.AutoResearch.PrioritizeGravitonTechnology` · Standard: **nein** · Schalter

_Noch keine Beschreibung._

## LifeformAutoMine   ● on

#### 3.111 LifeformAutoMine active

`Brain.LifeformAutoMine.Active` · Standard: **nein** · Schalter · Schalter

Baut Lebensform-Gebäude nach der Tabelle in lifeform_targets.json.

#### 3.112 Fehlende Rohstoffe per Transport holen

`Brain.LifeformAutoMine.Transports.Active` · Standard: **ja** · Schalter · Diesem Worker erlauben, fehlende Rohstoffe per Transport von anderen Himmelskörpern zu holen

Brain-Funktionen erlauben, Rohstoffe zwischen deinen Planeten zu bewegen.

#### 3.113 Ab Kristallminenstufe

`Brain.LifeformAutoMine.StartFromCrystalMineLvl` · Standard: **22** · Zahl · Lebensform-Gebäude starten, sobald die Kristallmine eines Planeten diese Stufe erreicht

Ein Planet beginnt mit Lebensform-Gebäuden, sobald seine Kristallmine diese Stufe hat.

**Beispiel:** 20

#### 3.114 Zielzeile

`Brain.LifeformAutoMine.TargetSlot` · Standard: **18** · Zahl · Zeile 1-18 der lifeform_targets.json; 0 = nur Fallback-Grenzen

Zeile (1-18) der Zieltabelle, auf die hingebaut wird. 0 = nur die Ersatzlimits.

#### 3.115 Max. Bevölkerungsgebäude

`Brain.LifeformAutoMine.MaxBasePopulationBuilding` · Standard: **0** · Zahl · Zusatzlimit für kleine Konten; der niedrigere Wert aus Tabelle und Limit zählt. 0 = kein Zusatzlimit

Zusätzliche Obergrenze für das erste Bevölkerungsgebäude. Der kleinere Wert aus Tabelle und Limit zählt. Für kleine Konten.

#### 3.116 Max. Nahrungsgebäude

`Brain.LifeformAutoMine.MaxBaseFoodBuilding` · Standard: **0** · Zahl

Zusätzliche Obergrenze für das erste Nahrungsgebäude.

#### 3.117 Max. Technologiegebäude

`Brain.LifeformAutoMine.MaxBaseTechBuilding` · Standard: **0** · Zahl

Zusätzliche Obergrenze für das erste Technologiegebäude.

#### 3.121 Laufintervall, min

`Brain.LifeformAutoMine.CheckIntervalMin` · Standard: **45** · Zahl

Kürzeste Pause in Minuten zwischen zwei Durchläufen dieser Funktion.

#### 3.122 Laufintervall, max

`Brain.LifeformAutoMine.CheckIntervalMax` · Standard: **90** · Zahl · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Längste Pause in Minuten zwischen zwei Durchläufen. Der Bot wählt eine zufällige Zeit zwischen Minimum und Maximum, damit er nicht wie eine Uhr arbeitet.

## LifeformAutoResearch   ● on

#### 3.123 LifeformAutoResearch active

`Brain.LifeformAutoResearch.Active` · Standard: **nein** · Schalter · Schalter

Erforscht Lebensform-Technologien.

#### 3.124 Fehlende Rohstoffe per Transport holen

`Brain.LifeformAutoResearch.Transports.Active` · Standard: **ja** · Schalter · Diesem Worker erlauben, fehlende Rohstoffe per Transport von anderen Himmelskörpern zu holen

Brain-Funktionen erlauben, Rohstoffe zwischen deinen Planeten zu bewegen.

#### 3.126 PlanetOverrides

`Brain.LifeformAutoResearch.PlanetOverrides` · Standard: **[]** · Liste · Array/komplex – im JSON-Tab bearbeiten

List of single planets with their own full set of research settings (`MaxResearchLevel`, `MaxTechs11` … `MaxTechs36`, `PriorityTechs`), matched by exact coordinate (`Galaxy`, `System`, `Position`, `Type`). A planet with an entry uses its own values (a missing field falls back to the global values above); a planet without an entry uses the global values. Set on the page Build&Research > LF research: the first change on a planet creates its own set (a copy of the global values), "Reset" removes it again. The template list is empty (`[]`).

_Beschreibung noch englisch._

#### 3.127 Höchste Stufe pro Tech

`Brain.LifeformAutoResearch.MaxResearchLevel` · Standard: **0** · Zahl

Höchste Stufe, die für jede Lebensform-Tech erforscht wird.

#### 3.147 Laufintervall, min

`Brain.LifeformAutoResearch.CheckIntervalMin` · Standard: **90** · Zahl

Kürzeste Pause in Minuten zwischen zwei Durchläufen dieser Funktion.

#### 3.148 Laufintervall, max

`Brain.LifeformAutoResearch.CheckIntervalMax` · Standard: **180** · Zahl · Es wird eine Zufallszeit zwischen Min. und Max. genutzt

Längste Pause in Minuten zwischen zwei Durchläufen. Der Bot wählt eine zufällige Zeit zwischen Minimum und Maximum, damit er nicht wie eine Uhr arbeitet.

## Expeditions-Monde (Sprungtor und Versorgung)new

#### 4.039 Expeditions-Monde versorgen

`Brain.AutoRepatriate.ExpoSupply.Active` · Standard: **nein** · Schalter · Repatriate: Der Fehlbetrag wird im nächsten Versorgungslauf von der Basis geschickt

Versorgt die Expeditions-Monde: Fehlen auf einem Mond Schiffe oder Deuterium für seine geplanten Expeditionen plus das Backup (Expeditions BackupExpeditions), wird die Fehlmenge gemerkt und im nächsten Repatriate-Zyklus per Stationieren von der Basis (erstes Target) geschickt. Schiffe in Expeditionen und schon unterwegs befindliche Lieferungen zählen als vorhanden. Standardmäßig aus.

**Beispiel:** Deuterium-Ziel je Mond: MinDeuteriumOnMoon, bei 0 gilt Expeditionen x FuelToCarry.

#### 4.040 Supply run interval (minutes)

`Brain.AutoRepatriate.ExpoSupply.CheckIntervalMinutes` · Standard: **30** · Zahl · Own interval for the supply, independent of the collecting interval; 0 = only together with the repatriate cycle

_Noch keine Beschreibung._

#### 4.059 Expeditions-Monde behalten nur, was Expeditionen brauchen

`Brain.AutoFleetJumpGate.ExpoOverride` · Standard: **nein** · Schalter · Sprungtor: der Rest, auch Expeditions-Funde, springt weg. Ersetzt dort das allgemeine Minimum

An: Auf den Expeditions-Startmonden bleiben nur die Schiffe für die geplanten Expeditionen plus das Backup (Expeditions BackupExpeditions). Alles andere, auch Expeditionsfunde, springt heraus. Das ersetzt dort die allgemeine Mindestmenge. Standardmäßig aus.

