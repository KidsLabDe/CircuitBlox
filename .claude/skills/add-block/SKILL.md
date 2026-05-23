---
name: add-block
description: Fügt einen neuen Blockly-Block zu CircuitBlox hinzu (Block-Definition + Generator + Toolbox-Eintrag). Nutze diesen Skill wenn der Nutzer einen neuen Sensor oder Aktor als Block implementieren möchte.
---

Wenn der Nutzer einen neuen Blockly-Block für CircuitBlox implementieren möchte, geh exakt diese drei Schritte durch. Überspringe keinen.

## Schritt 1: Block-Definition (`js/blocks/sensors.js` oder `js/blocks/actuators.js`)

Lese zuerst die relevante Datei, um das bestehende Pattern zu verstehen (EXT_PINS, Farben, Struktur).

Füge am Ende der richtigen Datei hinzu:

```js
Blockly.Blocks['<block_id>'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('<EMOJI> <Beschreibung>  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');  // oder 'Boolean' oder null für Statement-Blöcke
    this.setColour('<FARBE>');       // #1565C0 Sensor-Wert, #0D47A1 Sensor-Ereignis, #E65100 Aktor
    this.setTooltip('<Beschreibung für Kinder, auf Deutsch, mit KY-Nummer>');
  }
};
```

**Regeln:**
- Für Statement-Blöcke (Aktoren, Ereignisse): `setPreviousStatement(true, null)` + `setNextStatement(true, null)` statt `setOutput`.
- Für Ereignis-Blöcke: `appendStatementInput('DO')` mit `appendField('→ dann')`.
- Labels: Emoji + Deutsch + minimale Konfiguration.
- Nutze `EXT_PIN_OPTS` in `actuators.js`, `EXT_PINS` in `sensors.js`.

## Schritt 2: Generator (`js/generator.js`)

Lese `generator.js` kurz (letzte 50 Zeilen), um das Muster zu sehen. Füge den Generator am Ende der Datei hinzu.

**Hilfsfunktionen nutzen (nicht duplizieren):**
- `_digitalInDef(pin, varPrefix, pull)` – für digitale Eingänge
- `_digitalOutDef(pin, varPrefix)` – für digitale Ausgänge

**Wert-Block (gibt Ausdruck zurück):**
```js
Blockly.Python['<block_id>'] = function(block) {
  const pin = block.getFieldValue('PIN');
  _defs['import_board']     = 'import board';
  _defs['import_digitalio'] = 'import digitalio';  // oder analogio, etc.
  _defs[`init_<prefix>_${pin}`] = `<init-code>`;
  return [`<ausdruck>`, Blockly.Python.ORDER_NONE];
};
```

**Statement-Block (gibt Code-String zurück):**
```js
Blockly.Python['<block_id>'] = function(block) {
  const pin   = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  _digitalOutDef(pin, '<prefix>');
  return `_<prefix>_${pin}.value = ${state}\n`;
};
```

**Wichtig:**
- `_defs`-Keys müssen eindeutig sein: `'import_board'`, `'import_analogio'`, `'init_<prefix>_<pin>'`.
- Gleicher Key = automatisch dedupliziert (kein doppelter Import).
- Wenn ein Init-Eintrag auf einen anderen referenziert (z.B. BMP280 auf I2C), beide in EINEM `_defs`-Eintrag zusammenfassen – die Keys werden alphabetisch sortiert und Reihenfolge könnte sonst falsch sein.

## Schritt 3: Toolbox-Eintrag (`js/toolbox.js`)

Lese `toolbox.js`, finde die passende Kategorie (`🔵 Sensoren` oder `🟠 Aktoren`) und das richtige Label-Segment, und füge den Eintrag ein:

```js
{ kind: 'block', type: '<block_id>' }
```

Für Blöcke mit numerischen Inputs: Shadow-Block mitgeben:
```js
{ kind: 'block', type: '<block_id>',
  inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 25 } } } } }
```

## Abschluss-Check

Nachdem alle drei Schritte erledigt sind:

1. Prüfe, ob `node --check js/blocks/sensors.js` (oder actuators.js) und `node --check js/generator.js` fehlerfrei sind.
2. Erinnere den Nutzer: Im Chrome/Edge `index.html` öffnen → Toolbox prüfen → Block in den Workspace ziehen → Code-Vorschau prüfen → auf dem MAKER-PI-RP2040 testen.
3. Falls die neue Library `adafruit_bmp280` oder eine andere *nicht* im Standard-Bundle ist: explizit darauf hinweisen, dass sie auf `CIRCUITPY/lib/` kopiert werden muss.
