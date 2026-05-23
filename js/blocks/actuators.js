// blocks/actuators.js – Aktor-Blöcke (LED, Servo, NeoPixel, Buzzer, Motor)

const EXT_PIN_OPTS = BOARD.externalPins.map(p => [p, p]);

// ── LED ─────────────────────────────────────────────────────────────────────

Blockly.Blocks['actuator_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('💡 LED  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN')
        .appendField(new Blockly.FieldDropdown([
          ['einschalten', 'True'],
          ['ausschalten', 'False']
        ]), 'STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Schaltet eine LED ein oder aus');
  }
};

Blockly.Blocks['actuator_led_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('💡 LED  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN');
    this.appendValueInput('TIMES')
        .setCheck('Number')
        .appendField('blinken');
    this.appendValueInput('PAUSE')
        .setCheck('Number')
        .appendField('mal, Pause');
    this.appendDummyInput()
        .appendField('Sek');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Lässt eine LED mehrmals blinken');
  }
};

// ── Servo ────────────────────────────────────────────────────────────────────

Blockly.Blocks['actuator_servo'] = {
  init: function() {
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('⚙️ Servo')
        .appendField(new Blockly.FieldDropdown([
          ['S1 (GP12)', 'S1'],
          ['S2 (GP13)', 'S2'],
          ['S3 (GP14)', 'S3'],
          ['S4 (GP15)', 'S4']
        ]), 'SERVO')
        .appendField('auf');
    this.appendDummyInput()
        .appendField('Grad  (0–180)');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Dreht einen Servo-Motor auf einen bestimmten Winkel (0 bis 180 Grad)');
  }
};

// ── Buzzer ───────────────────────────────────────────────────────────────────

Blockly.Blocks['actuator_buzzer'] = {
  init: function() {
    this.appendValueInput('FREQ')
        .setCheck('Number')
        .appendField('🔔 Buzzer  Ton:');
    this.appendValueInput('DURATION')
        .setCheck('Number')
        .appendField('Hz  für');
    this.appendDummyInput()
        .appendField('Sekunden');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Spielt einen Ton mit der angegebenen Frequenz (z.B. 440 = Kammerton A)');
  }
};

Blockly.Blocks['actuator_buzzer_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔔 Buzzer  aus');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Schaltet den Buzzer aus');
  }
};

// ── Motor ────────────────────────────────────────────────────────────────────

const MOTOR_OPTS = [['M1', 'M1'], ['M2', 'M2']];

Blockly.Blocks['actuator_motor_forward'] = {
  init: function() {
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField('🚗 Motor')
        .appendField(new Blockly.FieldDropdown(MOTOR_OPTS), 'MOTOR')
        .appendField('vorwärts');
    this.appendDummyInput()
        .appendField('% Geschwindigkeit');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#6A1B9A');
    this.setTooltip('Fährt einen DC-Motor vorwärts (0–100 % Geschwindigkeit)');
  }
};

Blockly.Blocks['actuator_motor_backward'] = {
  init: function() {
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField('🚗 Motor')
        .appendField(new Blockly.FieldDropdown(MOTOR_OPTS), 'MOTOR')
        .appendField('rückwärts');
    this.appendDummyInput()
        .appendField('% Geschwindigkeit');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#6A1B9A');
    this.setTooltip('Fährt einen DC-Motor rückwärts (0–100 % Geschwindigkeit)');
  }
};

Blockly.Blocks['actuator_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🛑 Motor')
        .appendField(new Blockly.FieldDropdown(MOTOR_OPTS), 'MOTOR')
        .appendField('stopp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#6A1B9A');
    this.setTooltip('Stoppt einen DC-Motor');
  }
};

// ── NeoPixel ─────────────────────────────────────────────────────────────────

Blockly.Blocks['neopixel_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌈 NeoPixel  LED Nr.')
        .appendField(new Blockly.FieldNumber(1, 1, 13, 1), 'INDEX')
        .appendField('Farbe:')
        .appendField(new Blockly.FieldColour('#ff0000'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#006064');
    this.setTooltip('Setzt eine einzelne NeoPixel-LED auf eine bestimmte Farbe (1–13)');
  }
};

Blockly.Blocks['neopixel_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌈 NeoPixel  alle  Farbe:')
        .appendField(new Blockly.FieldColour('#ff0000'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#006064');
    this.setTooltip('Setzt alle NeoPixel-LEDs auf die gleiche Farbe');
  }
};

Blockly.Blocks['neopixel_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌈 NeoPixel  alle aus');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#006064');
    this.setTooltip('Schaltet alle NeoPixel-LEDs aus');
  }
};

// ── RGB-LED (KY-009, KY-016) ──────────────────────────────────────────────────

const RGB_COLOR_OPTS = [
  ['🔴 Rot',    'red'],
  ['🟢 Grün',   'green'],
  ['🔵 Blau',   'blue'],
  ['🟡 Gelb',   'yellow'],
  ['🩵 Türkis', 'cyan'],
  ['🟣 Pink',   'pink'],
  ['⬜ Weiß',   'white'],
  ['⬛ Aus',    'off'],
];

Blockly.Blocks['actuator_rgb_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🌈 RGB-LED  R-Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN_R')
        .appendField('G-Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN_G')
        .appendField('B-Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN_B')
        .appendField('Farbe:')
        .appendField(new Blockly.FieldDropdown(RGB_COLOR_OPTS), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Setzt eine RGB-LED auf eine Farbe über drei digitale Ausgänge (KY-009, KY-016)');
  }
};

// ── 2-Farben-LED (KY-011, KY-029) ────────────────────────────────────────────

const TWOCOLOR_OPTS = [
  ['🔴 Rot',  'red'],
  ['🟢 Grün', 'green'],
  ['🟡 Gelb', 'yellow'],
  ['⬛ Aus',  'off'],
];

Blockly.Blocks['actuator_2color_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('💡 2-Farben-LED  R-Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN_R')
        .appendField('G-Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN_G')
        .appendField('Farbe:')
        .appendField(new Blockly.FieldDropdown(TWOCOLOR_OPTS), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Setzt eine 2-Farben-LED auf Rot, Grün, Gelb oder Aus (KY-011, KY-029)');
  }
};

// ── Relais (KY-019) ───────────────────────────────────────────────────────────

Blockly.Blocks['actuator_relay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('⚡ Relais  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN')
        .appendField(new Blockly.FieldDropdown([
          ['einschalten', 'True'],
          ['ausschalten', 'False']
        ]), 'STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Schaltet ein Relais ein oder aus (KY-019)');
  }
};

// ── Aktiver Summer (KY-012) ───────────────────────────────────────────────────

Blockly.Blocks['actuator_active_buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('🔔 Aktiver Summer  Pin:')
        .appendField(new Blockly.FieldDropdown(EXT_PIN_OPTS), 'PIN')
        .appendField(new Blockly.FieldDropdown([
          ['einschalten', 'True'],
          ['ausschalten', 'False']
        ]), 'STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E65100');
    this.setTooltip('Schaltet einen aktiven Summer (Piezo mit fester Frequenz) ein oder aus (KY-012)');
  }
};
