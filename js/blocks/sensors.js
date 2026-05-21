// blocks/sensors.js – Sensor-Blöcke (Wert-Blöcke + Ereignis-Blöcke)

const EXT_PINS = BOARD.externalPins.map(p => [p, p]);
const OP_OPTS  = [['<', '<'], ['>', '>'], ['=', '==']];

// ── Wert-Blöcke (geben Messwert zurück) ──────────────────────────────────────

Blockly.Blocks['sensor_dht_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌡️ Temperatur (°C)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Temperatur in Grad Celsius vom DHT22 Sensor');
  }
};

Blockly.Blocks['sensor_dht_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('💧 Luftfeuchte (%)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Luftfeuchtigkeit in % vom DHT22 Sensor');
  }
};

Blockly.Blocks['sensor_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('📡 Abstand (cm)  Trig:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'TRIG')
        .appendField('  Echo:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'ECHO');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Misst den Abstand in cm mit dem HC-SR04 Ultraschall-Sensor');
  }
};

Blockly.Blocks['sensor_ldr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('☀️ Helligkeit (0–100%)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Helligkeit in Prozent (0 = dunkel, 100 = hell)');
  }
};

Blockly.Blocks['sensor_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔘 Taster')
        .appendField(new Blockly.FieldDropdown([
          ['B1 (GP20)', 'B1'],
          ['B2 (GP21)', 'B2']
        ]), 'BTN')
        .appendField('gedrückt?');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Taster gedrückt wird');
  }
};

// ── Ereignis-Blöcke (Wenn ... dann – gehen in FÜR IMMER) ─────────────────────

Blockly.Blocks['event_temperature'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField('🌡️ Wenn Temperatur  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField(new Blockly.FieldDropdown(OP_OPTS), 'OP');
    this.appendStatementInput('DO')
        .appendField('dann');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn die Temperatur einen Wert überschreitet/unterschreitet');
  }
};

Blockly.Blocks['event_ultrasonic'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField('📡 Wenn Abstand  Trig:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'TRIG')
        .appendField('Echo:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'ECHO')
        .appendField(new Blockly.FieldDropdown(OP_OPTS), 'OP')
        .appendField('cm');
    this.appendStatementInput('DO')
        .appendField('dann');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn der Abstand einen Wert überschreitet/unterschreitet');
  }
};

Blockly.Blocks['event_ldr'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField('☀️ Wenn Helligkeit  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField(new Blockly.FieldDropdown(OP_OPTS), 'OP')
        .appendField('%');
    this.appendStatementInput('DO')
        .appendField('dann');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn die Helligkeit einen Wert überschreitet/unterschreitet');
  }
};

Blockly.Blocks['event_button'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('🔘 Wenn Taster')
        .appendField(new Blockly.FieldDropdown([
          ['B1 (GP20)', 'B1'],
          ['B2 (GP21)', 'B2']
        ]), 'BTN')
        .appendField(new Blockly.FieldDropdown([
          ['gedrückt',    'pressed'],
          ['losgelassen', 'released']
        ]), 'STATE')
        .appendField('→ dann');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn der Taster gedrückt oder losgelassen wird');
  }
};
