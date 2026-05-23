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

// ── Digital-Sensoren (KY-Sensor-Set) ─────────────────────────────────────────

Blockly.Blocks['sensor_obstacle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🚧 Hindernis erkannt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Hindernis-Sensor ein Objekt erkennt (KY-032)');
  }
};

Blockly.Blocks['sensor_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('⊡ Linie erkannt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Linien-Sensor eine dunkle Linie erkennt (KY-033)');
  }
};

Blockly.Blocks['sensor_tilt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('📐 Geneigt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Neigungssensor geneigt ist (KY-017, KY-020)');
  }
};

Blockly.Blocks['sensor_magnetic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🧲 Magnetfeld erkannt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn ein Magnetfeld erkannt wird (KY-003, KY-021, KY-025)');
  }
};

Blockly.Blocks['sensor_flame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔥 Flamme erkannt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Flammensensor eine Flamme erkennt (KY-026)');
  }
};

Blockly.Blocks['sensor_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔊 Geräusch erkannt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Mikrofon-Sensor ein Geräusch über dem Schwellwert erkennt (KY-037, KY-038)');
  }
};

Blockly.Blocks['sensor_touch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('👆 Berührt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Berührungssensor berührt wird (KY-036)');
  }
};

Blockly.Blocks['sensor_vibration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('💥 Erschütterung erkannt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn der Vibrations- oder Klopfsensor ausgelöst wird (KY-002, KY-031)');
  }
};

// ── Analog-Sensoren ───────────────────────────────────────────────────────────

Blockly.Blocks['sensor_analog_raw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('📊 Analogwert (0–100%)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest einen analogen Sensor aus (0–100 %). Für Mikrofon-Pegel, Magnet-Stärke, Helligkeit, Herzschlag-Signal u.v.m. (KY-018, KY-024, KY-035, KY-037, KY-038, KY-039)');
  }
};

Blockly.Blocks['sensor_ntc_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌡️ NTC Temperatur (°C)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Temperatur in °C vom NTC-Thermistor (10 kΩ NTC + 10 kΩ Vorwiderstand, KY-013)');
  }
};

Blockly.Blocks['sensor_lux'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔆 Helligkeit (Lux)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Beleuchtungsstärke in Lux vom Phototransistor (KY-054)');
  }
};

// ── Joystick (KY-023) ─────────────────────────────────────────────────────────

Blockly.Blocks['sensor_joystick_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🕹️ Joystick X-Achse (0–100%)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die X-Achse des Joysticks (0–100 %, analoger Eingang, KY-023)');
  }
};

Blockly.Blocks['sensor_joystick_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🕹️ Joystick Y-Achse (0–100%)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Y-Achse des Joysticks (0–100 %, analoger Eingang, KY-023)');
  }
};

Blockly.Blocks['sensor_joystick_btn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🕹️ Joystick Taste gedrückt?  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#1565C0');
    this.setTooltip('Gibt Wahr zurück, wenn die Joystick-Taste gedrückt wird (KY-023)');
  }
};

// ── DHT11 (KY-015) ────────────────────────────────────────────────────────────

Blockly.Blocks['sensor_dht11_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌡️ DHT11 Temperatur (°C)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Temperatur in Grad Celsius vom DHT11 Sensor (KY-015)');
  }
};

Blockly.Blocks['sensor_dht11_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('💧 DHT11 Luftfeuchte (%)  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Luftfeuchtigkeit in % vom DHT11 Sensor (KY-015)');
  }
};

// ── BMP280 I2C (KY-052) ───────────────────────────────────────────────────────

Blockly.Blocks['sensor_bmp280_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌡️ BMP280 Temperatur (°C)  SDA:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'SDA')
        .appendField('SCL:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'SCL');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Temperatur in °C vom BMP280 über I2C. Benötigt Library: adafruit_bmp280 (KY-052)');
  }
};

Blockly.Blocks['sensor_bmp280_pressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔵 BMP280 Luftdruck (hPa)  SDA:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'SDA')
        .appendField('SCL:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'SCL');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest den Luftdruck in hPa vom BMP280 über I2C. Benötigt Library: adafruit_bmp280 (KY-052)');
  }
};

// ── Drehgeber (KY-040) ────────────────────────────────────────────────────────

Blockly.Blocks['sensor_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔄 Drehgeber Position  CLK:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN_A')
        .appendField('DT:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN_B');
    this.setOutput(true, 'Number');
    this.setColour('#1565C0');
    this.setTooltip('Liest die Position des Drehgebers (positiv = rechts, negativ = links, KY-040)');
  }
};

// ── Neue Ereignis-Blöcke ──────────────────────────────────────────────────────

Blockly.Blocks['event_obstacle'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('🚧 Wenn Hindernis erkannt  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField('→ dann');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn der Hindernis-Sensor ein Objekt erkennt (KY-032)');
  }
};

Blockly.Blocks['event_flame'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('🔥 Wenn Flamme erkannt  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField('→ dann');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn der Flammensensor eine Flamme erkennt (KY-026)');
  }
};

Blockly.Blocks['event_sound'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('🔊 Wenn Geräusch erkannt  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField('→ dann');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn der Mikrofon-Sensor ein Geräusch über dem Schwellwert erkennt (KY-037, KY-038)');
  }
};

Blockly.Blocks['event_tilt'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('📐 Wenn geneigt  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField('→ dann');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn der Neigungssensor geneigt ist (KY-017, KY-020)');
  }
};

Blockly.Blocks['event_magnetic'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('🧲 Wenn Magnetfeld erkannt  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField('→ dann');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn ein Magnetfeld erkannt wird (KY-003, KY-021, KY-025)');
  }
};

Blockly.Blocks['event_line'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('⊡ Wenn Linie erkannt  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PINS), 'PIN')
        .appendField('→ dann');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#0D47A1');
    this.setTooltip('Führt Code aus, wenn der Linien-Sensor eine dunkle Linie erkennt (KY-033)');
  }
};
