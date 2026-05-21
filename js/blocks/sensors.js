// blocks/sensors.js – Sensor-Blöcke (DHT22, HC-SR04, Taster)

const EXT_PINS = BOARD.externalPins.map(p => [p, p]);
const TRIG_ECHO_PAIRS = EXT_PINS;

// DHT22 – Temperatur
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

// DHT22 – Luftfeuchtigkeit
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

// HC-SR04 – Ultraschall
Blockly.Blocks['sensor_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('📡 Abstand (cm)  Trig:')
        .appendField(new Blockly.FieldDropdown(TRIG_ECHO_PAIRS), 'TRIG')
        .appendField('  Echo:')
        .appendField(new Blockly.FieldDropdown(TRIG_ECHO_PAIRS), 'ECHO');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Misst den Abstand in cm mit dem HC-SR04 Ultraschall-Sensor');
  }
};

// Taster / Button
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
