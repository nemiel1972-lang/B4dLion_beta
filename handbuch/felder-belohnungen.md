Seiten: [Übersicht](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auktionen](seite-auktionen.md) · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · **Rewards and boosters** · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auktionen](felder-auktionen.md)

---

# Felder: Rewards and boosters

Belohnungen und AutoTrader (verbraucht einen Rohstoffhändler, der nicht Metall kauft).

8 Felder, so wie die B4dLion-Oberfläche sie zeigt (Nummer = Feldnummer vor dem Feldnamen).

![Rewards and boosters](img/bild-Rewards.png)

_Oberfläche mit Vorlagen-Werten, ohne echte Daten._

## Belohnungen

#### 2.051 Aktiv

`Rewards.Active` · Standard: **ja** · Schalter

Hauptschalter dieser Funktion. Aus = der Bot macht hier nichts.

#### 2.052 CheckIntervalMin

`Rewards.CheckIntervalMin` · Standard: **55** · Zahl

Kürzeste Pause in Minuten zwischen zwei Durchläufen dieser Funktion.

#### 2.053 CheckIntervalMax

`Rewards.CheckIntervalMax` · Standard: **65** · Zahl

Längste Pause in Minuten zwischen zwei Durchläufen. Der Bot wählt eine zufällige Zeit zwischen Minimum und Maximum, damit er nicht wie eine Uhr arbeitet.

## AutoTrader

#### 2.057 Aktiv

`AutoTrader.Active` · Standard: **nein** · Schalter

Verbraucht einen Rohstoffhändler, der nicht Metall kauft: tauscht eine kleine Menge, damit der Händler benutzt ist. Bei einem Metallhändler (oder ohne Händler) passiert nichts.

#### 2.058 CheckIntervalMin

`AutoTrader.CheckIntervalMin` · Standard: **115** · Zahl

Minuten zwischen zwei Prüfungen. Der Bot wählt eine Zufallszeit zwischen Minimum und Maximum (Standard etwa zwei Stunden).

#### 2.059 CheckIntervalMax

`AutoTrader.CheckIntervalMax` · Standard: **125** · Zahl

Minuten zwischen zwei Prüfungen. Der Bot wählt eine Zufallszeit zwischen Minimum und Maximum (Standard etwa zwei Stunden).

#### 2.061 AmountCrystal

`AutoTrader.AmountCrystal` · Standard: **1** · Zahl

Kristall, den du pro Tausch bei einem Deuteriumhändler bekommst (0 = kein Tausch). Metall wird nie gekauft.

#### 2.062 AmountDeuterium

`AutoTrader.AmountDeuterium` · Standard: **1** · Zahl

Deuterium, das du pro Tausch bei einem Kristallhändler bekommst (0 = kein Tausch). Metall wird nie gekauft.

