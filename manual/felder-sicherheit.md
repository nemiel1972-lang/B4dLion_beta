Pages: [Overview](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · [Logging](seite-logging.md) · [Auctions](seite-auktionen.md) · [Bar and controls](seite-bedienung.md)

Fields: [General](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · **Security & Sleep** · [Auctions](felder-auktionen.md) · [Experimental](felder-experimental.md)

---

# Fields: Security & Sleep

Defender, sleep mode, GhostSleep and debris protection.

31 fields, as the B4dLion interface shows them (number = field number before the field name).

![Security & Sleep](img/bild-Defender.png)

_Interface with template values, no real data._

## General

#### 8.001 Defender active

`Defender.Active` · Default: **no** · Switch · Master switch

Watches for incoming attacks and reacts.

#### 8.002 Ignore spy probes

`Defender.IgnoreProbes` · Default: **yes** · Switch

Do not react to espionage probes.

#### 8.003 React to missile attacks

`Defender.DefendFromMissiles` · Default: **yes** · Switch

React to missile attacks as well.

#### 8.009 Generate activity for defender calls

`Defender.RandomActivity` · Default: **no** · Switch · On: each defender check opens the defences page of a random celestial. Off: no activity call and no celestial switch. Either way it only creates normal-looking activity (the check itself is already a page visit) and does not change how attacks are handled.

On = every attack check opens the defence page of a random celestial. Off = no activity call, so the active celestial is never switched. Only makes the bot activity look normal.

#### 8.010 Use the celestial I am playing on

`Defender.CurrentlyActiveCelestialActivity` · Default: **yes** · Switch · While you play in the browser, the activity call uses your current celestial instead of another one, so it does not switch your planet. Needs a browser page opened in the last 10 minutes

While you play in the browser (port 8080), the Defender activity call uses the celestial of your browser session instead of another one, so it does not take your current planet away while you send fleets or build. Needs a browser page opened in the last 10 minutes; otherwise the RandomActivity rule applies (off = no activity call, no switch).

## Weak attacks

#### 8.004 Ignore weak attackers

`Defender.IgnoreWeakAttack` · Default: **no** · Switch

Ignore attackers that are much weaker than you.

#### 8.005 Weak attack ratio

`Defender.WeakAttackRatio` · Default: **3** · Number · Attacker points below your fleet points / ratio

An attacker is weak if his fleet points are less than yours divided by this number.

**Example:** 10 = ignore attackers with less than a tenth of your fleet points.

#### 8.006 Ignore if nothing worth saving

`Defender.IgnoreAttackIfIHave.Active` · Default: **no** · Switch

Ignore an attack on a celestial where there is nothing worth saving.

#### 8.007 Min resources to save

`Defender.IgnoreAttackIfIHave.MinResourcesToSave` · Default: **2000000** · Number

The attack is ignored if the celestial holds fewer resources than this ...

#### 8.008 Min fleet points to save

`Defender.IgnoreAttackIfIHave.MinFleetToSave` · Default: **20000000** · Number

... and fewer fleet points than this.

## Fleetsave (Autofleet)

#### 8.011 Fleetsave the attacked celestial

`Defender.Autofleet.Active` · Default: **yes** · Switch

Automatically fleetsave the attacked celestial.

#### 8.012 Safety margin

`Defender.Autofleet.SafetyMarginSeconds` · Default: **120** · Number · Fleet must be gone this long before impact

The fleet must be gone this many seconds before the attack lands.

**Example:** 120

#### 8.013 Telegram message on fleetsave

`Defender.Autofleet.TelegramMessenger.Active` · Default: **no** · Switch

Send a Telegram message whenever a fleetsave happens.

## Alerts

#### 8.014 Discord alert

`Defender.Discord.Active` · Default: **yes** · Switch · Webhook URL is not shown here (credentials)

Send attack alerts to a Discord webhook.

#### 8.015 Discord webhook

`Defender.Discord.WebhookUrl` · Default: **“https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN”** · Text · Set it on the Messenger page

Discord webhook address. Treat it like a password.

#### 8.027 Telegram alert

`Defender.TelegramMessenger.Active` · Default: **yes** · Switch

Send attack alerts by Telegram.

#### 8.028 Alarm level in the alert

`Defender.Alarm.Active` · Default: **yes** · Switch

Mark the alert with a high alarm level so it stands out.

#### 8.029 Alarm sound (WAV file)

`Defender.Alarm.SoundFile` · Default: **(empty)** · Text · Full path to a WAV file played on an attack; empty = beep

Full path to a WAV file that is played on an attack (the PC running the bot). Empty, missing or unplayable: the old beep.

## Whitelist

#### 8.016 Player IDs

`Defender.WhiteList` · Default: **[0]** · List · Comma separated

Player IDs that are never treated as attackers, for example friends or alliance mates.

## Reaction to the attacker

#### 8.017 Spy the attacker

`Defender.SpyAttacker.Active` · Default: **no** · Switch

Spy the attacker with probes when an attack comes in.

#### 8.018 Probes

`Defender.SpyAttacker.Probes` · Default: **20** · Number

Number of probes sent to spy the attacker.

#### 8.019 Warn about a possible raid

`Defender.RaidWarning.Active` · Default: **no** · Switch · Telegram warning when one player spies several times in a short time

Warn (Telegram, Discord, log) when the same player spies on you several times in a short time. That usually means an attack is being planned.

#### 8.020 More than ... spy missions

`Defender.RaidWarning.Missions` · Default: **2** · Number

Warn when the player sends more than this many spy missions.

#### 8.021 Within

`Defender.RaidWarning.WindowMinutes` · Default: **30** · Number

Time window in minutes. At most one warning per player and window.

#### 8.022 Spy back when spied on

`Defender.BackfireSpy.Active` · Default: **no** · Switch · Sends your own probes to the player who spied on you

When another player spies on you, send your own probes to the same player.

#### 8.023 Probes

`Defender.BackfireSpy.Probes` · Default: **5** · Number

Number of probes sent back.

#### 8.024 At most every

`Defender.BackfireSpy.EveryHours` · Default: **6** · Number · Per player

At most once per player in this many hours.

#### 8.025 Message the attacker

`Defender.MessageAttacker.Active` · Default: **no** · Switch · One of the messages is sent

Send the attacker a message.

#### 8.026 Messages

`Defender.MessageAttacker.Messages` · Default: **["hey", "hello", "i'm online'"]** · List · One per line

Possible messages, one per line. The bot sends one of them.

## Timing

#### 8.030 Check interval, min

`Defender.CheckIntervalMin` · Default: **10** · Number

Shortest pause in minutes between two runs of this function.

#### 8.031 Check interval, max

`Defender.CheckIntervalMax` · Default: **20** · Number

Longest pause in minutes between two runs. The bot picks a random time between minimum and maximum so it does not act like a clock.

