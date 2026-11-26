Pages: [Overview](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Bar and controls](seite-bedienung.md)

Fields: [General](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · **Rewards and boosters** · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md)

---

# Fields: Rewards and boosters

Rewards and AutoTrader (uses up a resource merchant that does not buy metal).

8 fields, as the B4dLion interface shows them (number = field number before the field name).

![Rewards and boosters](img/bild-Rewards.png)

_Interface with template values, no real data._

## Rewards

#### 2.051 Active

`Rewards.Active` · Default: **yes** · Switch

Switches the rewards worker (universe rewards event) on or off. The settings on the Rewards and boosters page are kept.

#### 2.052 CheckIntervalMin

`Rewards.CheckIntervalMin` · Default: **55** · Number

Shortest pause in minutes between two runs of this function.

#### 2.053 CheckIntervalMax

`Rewards.CheckIntervalMax` · Default: **65** · Number

Longest pause in minutes between two runs. The bot picks a random time between minimum and maximum so it does not act like a clock.

## AutoTrader

#### 2.057 Active

`AutoTrader.Active` · Default: **no** · Switch

Uses up a resource merchant that does not buy metal: trades a small amount so the merchant is used. With a metal merchant (or none) present nothing happens.

#### 2.058 CheckIntervalMin

`AutoTrader.CheckIntervalMin` · Default: **115** · Number

Minutes between two checks. The bot picks a random time between minimum and maximum (default about two hours).

#### 2.059 CheckIntervalMax

`AutoTrader.CheckIntervalMax` · Default: **125** · Number

Minutes between two checks. The bot picks a random time between minimum and maximum (default about two hours).

#### 2.061 AmountCrystal

`AutoTrader.AmountCrystal` · Default: **1** · Number

Crystal you receive per trade with a deuterium merchant (0 = no trade). Metal is never bought.

#### 2.062 AmountDeuterium

`AutoTrader.AmountDeuterium` · Default: **1** · Number

Deuterium you receive per trade with a crystal merchant (0 = no trade). Metal is never bought.

