Pages: [Overview](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · **Logging** · [Auctions](seite-auktionen.md) · [Bar and controls](seite-bedienung.md)

Fields: [General](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md) · [Auctions](felder-auktionen.md)

---

# Logging

_Menu item: Logging (log icon at the top right of the bar)_

Shows the bot's log live: new lines appear automatically, you can filter by instance, sender, level, date and text and copy lines. The page changes nothing about the bot. You reach it with the log icon at the top right of the bar.

## Log view

The filter bar has a search field (Search...), a date field, the selection All instances (only if instances exist; each instance has its own log), the sender selection (All, the individual workers such as Defender, Brain, AutoMine, Expeditions, AutoFarm etc. and Developer (debug log)) and the level (Trace, Debug, Information, Warning, Error). Below are the lines; Load more logs fetches older lines. The view keeps the live connection, fetches lines missed during a reconnect from the log file and, according to the code, marks actually executed actions (e.g. fleet sent, aborted, recalled) by keywords.

1. Enter text in the Search... field; after a short typing pause the view is filtered.
2. Choose sender, level and, if needed, instance to narrow the view.
3. Use the date field to open another day.
4. Choose Developer (debug log) to see the day's developer log (devlogs/B4dLion-debug-<date>.log).
5. Click Load more logs to show further older entries.
6. Hide data makes player name, universe, coordinates and preceding celestial body names disappear (also when copying).

Fields: [General](felder-allgemein.md)

## Copy

Copies log lines in the format time, sender, level, message to the clipboard. The current filters (sender, level, search) apply. At most 20000 lines are copied. If the clipboard is blocked, a text field appears for selecting.

1. Choose in the selection field: Visible lines, Last 1 h, 3, 6, 12 or 24 h.
2. Click Copy; a status note appears next to it.

## Notes

- The page only runs while the browser tab is open; a tab in the background is throttled, and missed lines are reloaded from the log file when you return. The log file on the server is not affected.
- in public builds it is always off. The log switches (ReduceLogs, CollectLogs, ExtraDebugLog) are under Security&Sleep in the General tab in the Logs box.
- The default date is today.

