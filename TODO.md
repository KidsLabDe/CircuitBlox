# CircuitBlox – TODO & Ideen

## Phase 2 – Serial-Verbindung (nächster Schritt)
- [ ] Web Serial API vollständig verdrahten (serial.js ist vorbereitet)
- [ ] "▶ Ausführen" Button: Code per Raw REPL auf Board laden und starten
- [ ] "⏹ Stopp" Button: Ctrl+C über Serial
- [ ] Serieller Monitor: Live-Output von `print()` anzeigen
- [ ] Eingabefeld im Serial Monitor: manuelle REPL-Befehle senden

## Phase 2.5 – Code persistent speichern
- [ ] **"💾 Als code.py speichern"** via File System Access API
  - Browser öffnet Dateipicker → User wählt CIRCUITPY-Laufwerk
  - `code.py` wird direkt auf das Laufwerk geschrieben
  - CircuitPython erkennt Änderung und startet automatisch neu
  - Kein `boot.py`-Setup nötig, kein Serial erforderlich
  - Gleiche Browser-Voraussetzung: Chrome/Edge
  - Referenz: so macht es auch code.circuitpython.org

## Phase 3 – Projekte & Usability
- [ ] Projekte speichern/laden (localStorage + Blockly XML Export/Import)
- [ ] "Neues Projekt" Button (leert Workspace, behält Startblöcke)
- [ ] Board-Profil-Auswahl (MAKER-PI-RP2040 vs. Generisch mit freien Pins)

## Phase 4 – Mehr Blöcke
- [ ] OLED Display SSD1306 (Text anzeigen, Pixel setzen)
- [ ] I2C Temperatursensor (z.B. BMP280)
- [ ] Einzelne NeoPixel-Farben via RGB-Schieberegler
- [ ] Töne nach Notenname (C4, D4, ... statt Hz-Eingabe)
- [ ] Lernmodus: Schritt-für-Schritt Anleitungen zu Beispielprojekten

## Offen / Ideen
- [ ] GitHub Pages: README mit Screenshot und Kurzanleitung ergänzen
- [ ] Mobile-freundliches Layout (Tablets im Unterricht)
- [ ] Mehrsprachigkeit (EN) für internationale Nutzung
