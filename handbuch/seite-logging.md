Seiten: [Übersicht](README.md) · [Start](seite-start.md) · [Ogame](seite-ogame.md) · [Logistic & Expedition](seite-logistik.md) · [Fleet & Farm](seite-farm.md) · [Rewards and boosters](seite-belohnungen.md) · [Build & Research](seite-bauforschung.md) · [Security & Sleep](seite-sicherheit.md) · **Logging** · [Leiste und Bedienung](seite-bedienung.md)

Felder: [Allgemein](felder-allgemein.md) · [Logistic & Expedition](felder-logistik.md) · [Fleet & Farm](felder-farm.md) · [Rewards and boosters](felder-belohnungen.md) · [Build & Research (Brain)](felder-bauforschung.md) · [Security & Sleep](felder-sicherheit.md)

---

# Logging

_Menüpunkt: Logging (Protokoll-Symbol rechts oben in der Leiste)_

Zeigt das Protokoll des Bots live: neue Zeilen erscheinen automatisch, du kannst nach Instanz, Absender, Stufe, Datum und Text filtern und Zeilen kopieren. Die Seite ändert nichts am Bot. Du erreichst sie über das Log-Symbol rechts oben in der Leiste.

## Log-Ansicht

Die Filterleiste hat ein Suchfeld (Suchen...), ein Datumsfeld, die Auswahl Alle Instanzen (nur wenn Instanzen vorhanden sind; jede Instanz hat ihr eigenes Log), die Absenderauswahl (Alle, die einzelnen Worker wie Defender, Brain, AutoMine, Expeditions, AutoFarm usw. sowie Entwickler (Debug-Log)) und die Stufe (Trace, Debug, Information, Warnung, Fehler). Darunter stehen die Zeilen; mit Mehr Logs laden holst du ältere Zeilen nach. Die Anzeige hält die Live-Verbindung, holt nach einem Reconnect verpasste Zeilen aus der Logdatei nach und markiert laut Code tatsächlich ausgeführte Aktionen (z. B. gesendete Flotte, abgebrochen, zurückgerufen) anhand von Schlüsselwörtern.

1. Im Feld Suchen... einen Text eingeben; nach einer kurzen Tipppause wird gefiltert.
2. Absender, Stufe und gegebenenfalls Instanz wählen, um die Anzeige einzuschränken.
3. Mit dem Datumsfeld einen anderen Tag öffnen.
4. Entwickler (Debug-Log) wählen, um das Developer-Log des Tages (devlogs/B4dLion-debug-<Datum>.log) zu sehen.
5. Mehr Logs laden klicken, um weitere ältere Einträge anzuzeigen.
6. Daten verbergen ausblenden lässt Spielername, Universum, Koordinaten und davorstehende Himmelskörper-Namen verschwinden (wirkt auch beim Kopieren).

Felder: [Allgemein](felder-allgemein.md)

## Kopieren

Kopiert Logzeilen im Format Zeit, Absender, Stufe, Nachricht in die Zwischenablage. Es gelten die aktuellen Filter (Absender, Stufe, Suche). Maximal werden 20000 Zeilen kopiert. Wenn die Zwischenablage gesperrt ist, erscheint ein Textfeld zum Markieren.

1. Im Auswahlfeld wählen: Sichtbare Zeilen, Letzte 1 Std., 3, 6, 12 oder 24 Std.
2. Kopieren klicken; daneben erscheint ein Statushinweis.

## Hinweise

- Die Seite läuft nur, solange der Browser-Tab geöffnet ist; ein Tab im Hintergrund wird gedrosselt, verpasste Zeilen werden beim Zurückkehren aus der Logdatei nachgeladen. Die Logdatei auf dem Server ist davon nicht betroffen.
- in öffentlichen Builds ist es immer aus. Die Log-Schalter (ReduceLogs, CollectLogs, ExtraDebugLog) stehen unter Security&Sleep im Reiter General im Kasten Logs.
- Die Datumsvorgabe ist der heutige Tag.

