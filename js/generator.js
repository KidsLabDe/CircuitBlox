// generator.js – CircuitPython Code-Generator

Blockly.Python.INDENT = '    ';

// Modul-globale Sammel-Variablen (reset vor jeder Generierung)
let _defs     = Object.create(null);  // imports + initialisierungen
let _setupCode = '';                  // Code aus dem SETUP-Block

Blockly.Python.workspaceToCode = function(workspace) {
  _defs      = Object.create(null);
  _setupCode = '';

  // init für Blockly-interne Variablen (nameDB_ etc.)
  try { Blockly.Python.init(workspace); } catch(_) {}

  // Nur SETUP + FÜR IMMER verarbeiten – schwebende Blöcke werden ignoriert
  const setupBlock   = workspace.getBlocksByType('control_setup',   false)[0];
  const foreverBlock = workspace.getBlocksByType('control_forever',  false)[0];

  let loopCode = '';
  if (setupBlock)   Blockly.Python['control_setup'].call(Blockly.Python, setupBlock);
  if (foreverBlock) loopCode = Blockly.Python['control_forever'].call(Blockly.Python, foreverBlock) || '';

  return Blockly.Python.finish(loopCode);
};

// Hilfsfunktion: Hex → CircuitPython RGB-Tuple
function hexToRgbTuple(hex) {
  return `(${parseInt(hex.slice(1,3),16)}, ${parseInt(hex.slice(3,5),16)}, ${parseInt(hex.slice(5,7),16)})`;
}

// finish(): erzeugt den finalen formatierten Code
Blockly.Python.finish = function(loopCode) {
  const imports = [];
  const inits   = [];
  for (const key of Object.keys(_defs).sort()) {
    const val = _defs[key];
    if (val.startsWith('import ') || val.startsWith('from ')) imports.push(val);
    else inits.push(val);
  }

  let result = '# === CircuitBlox – Generierter Code ===\n';
  if (imports.length)        result += imports.join('\n') + '\n';
  if (inits.length)          result += '\n# --- Initialisierungen ---\n' + inits.join('\n') + '\n';
  if (_setupCode.trim())     result += '\n# --- Setup (einmalig) ---\n' + _setupCode;
  if (loopCode.trim())       result += '\n# --- Hauptprogramm ---\nwhile True:\n' + loopCode;
  return result;
};

// ── Pflicht-Startblöcke ───────────────────────────────────────────────────────

Blockly.Python['control_setup'] = function(block) {
  // Code landet in _setupCode, nicht im Loop
  _setupCode = Blockly.Python.statementToCode(block, 'DO');
  return '';
};

Blockly.Python['control_forever'] = function(block) {
  // Gibt nur den Loop-Body zurück – finish() packt ihn in while True:
  _defs['import_time'] = 'import time';
  return Blockly.Python.statementToCode(block, 'DO') || '    pass\n';
};

// ── Steuerung ────────────────────────────────────────────────────────────────

Blockly.Python['control_wait'] = function(block) {
  _defs['import_time'] = 'import time';
  const secs = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_NONE) || '1';
  return `time.sleep(${secs})\n`;
};

Blockly.Python['control_print'] = function(block) {
  const val = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || '""';
  return `print(${val})\n`;
};

// ── Sensor-Wert-Blöcke ────────────────────────────────────────────────────────

Blockly.Python['sensor_dht_temperature'] = function(block) {
  const pin = block.getFieldValue('PIN');
  _defs['import_board']     = 'import board';
  _defs['import_dht']       = 'import adafruit_dht';
  _defs[`init_dht_${pin}`]  = `_dht_${pin} = adafruit_dht.DHT22(board.${pin})`;
  return [`_dht_${pin}.temperature`, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['sensor_dht_humidity'] = function(block) {
  const pin = block.getFieldValue('PIN');
  _defs['import_board']     = 'import board';
  _defs['import_dht']       = 'import adafruit_dht';
  _defs[`init_dht_${pin}`]  = `_dht_${pin} = adafruit_dht.DHT22(board.${pin})`;
  return [`_dht_${pin}.humidity`, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['sensor_ultrasonic'] = function(block) {
  const trig = block.getFieldValue('TRIG');
  const echo = block.getFieldValue('ECHO');
  _defs['import_board']   = 'import board';
  _defs['import_hcsr04']  = 'import adafruit_hcsr04';
  _defs['init_sonar']     =
    `_sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.${trig}, echo_pin=board.${echo})`;
  return ['_sonar.distance', Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['sensor_ldr'] = function(block) {
  const pin = block.getFieldValue('PIN');
  _defs['import_board']    = 'import board';
  _defs['import_analogio'] = 'import analogio';
  _defs[`init_ldr_${pin}`] = `_ldr_${pin} = analogio.AnalogIn(board.${pin})`;
  // Normiert auf 0–100 %
  return [`round(_ldr_${pin}.value / 65535 * 100)`, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sensor_button'] = function(block) {
  const btn = block.getFieldValue('BTN');
  const pin = BOARD.buttons[btn];
  _defs['import_board']     = 'import board';
  _defs['import_digitalio'] = 'import digitalio';
  _defs[`init_btn_${btn}`]  =
    `_btn_${btn} = digitalio.DigitalInOut(board.${pin})\n` +
    `_btn_${btn}.switch_to_input(pull=digitalio.Pull.UP)`;
  return [`(not _btn_${btn}.value)`, Blockly.Python.ORDER_NONE];
};

// ── Ereignis-Blöcke ───────────────────────────────────────────────────────────

Blockly.Python['event_temperature'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const op  = block.getFieldValue('OP');
  const val = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || '25';
  const body = Blockly.Python.statementToCode(block, 'DO') || '    pass\n';
  _defs['import_board']     = 'import board';
  _defs['import_dht']       = 'import adafruit_dht';
  _defs[`init_dht_${pin}`]  = `_dht_${pin} = adafruit_dht.DHT22(board.${pin})`;
  return `if _dht_${pin}.temperature ${op} ${val}:\n${body}`;
};

Blockly.Python['event_ultrasonic'] = function(block) {
  const trig = block.getFieldValue('TRIG');
  const echo = block.getFieldValue('ECHO');
  const op   = block.getFieldValue('OP');
  const val  = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || '20';
  const body = Blockly.Python.statementToCode(block, 'DO') || '    pass\n';
  _defs['import_board']  = 'import board';
  _defs['import_hcsr04'] = 'import adafruit_hcsr04';
  _defs['init_sonar']    =
    `_sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.${trig}, echo_pin=board.${echo})`;
  return `if _sonar.distance ${op} ${val}:\n${body}`;
};

Blockly.Python['event_ldr'] = function(block) {
  const pin  = block.getFieldValue('PIN');
  const op   = block.getFieldValue('OP');
  const val  = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || '50';
  const body = Blockly.Python.statementToCode(block, 'DO') || '    pass\n';
  _defs['import_board']    = 'import board';
  _defs['import_analogio'] = 'import analogio';
  _defs[`init_ldr_${pin}`] = `_ldr_${pin} = analogio.AnalogIn(board.${pin})`;
  return `if round(_ldr_${pin}.value / 65535 * 100) ${op} ${val}:\n${body}`;
};

Blockly.Python['event_button'] = function(block) {
  const btn   = block.getFieldValue('BTN');
  const state = block.getFieldValue('STATE');
  const pin   = BOARD.buttons[btn];
  const body  = Blockly.Python.statementToCode(block, 'DO') || '    pass\n';
  _defs['import_board']     = 'import board';
  _defs['import_digitalio'] = 'import digitalio';
  _defs[`init_btn_${btn}`]  =
    `_btn_${btn} = digitalio.DigitalInOut(board.${pin})\n` +
    `_btn_${btn}.switch_to_input(pull=digitalio.Pull.UP)`;
  const condition = state === 'pressed'
    ? `not _btn_${btn}.value`
    : `_btn_${btn}.value`;
  return `if ${condition}:\n${body}`;
};

// ── Aktoren: LED ─────────────────────────────────────────────────────────────

Blockly.Python['actuator_led'] = function(block) {
  const pin   = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  _defs['import_board']     = 'import board';
  _defs['import_digitalio'] = 'import digitalio';
  _defs[`init_led_${pin}`]  =
    `_led_${pin} = digitalio.DigitalInOut(board.${pin})\n` +
    `_led_${pin}.direction = digitalio.Direction.OUTPUT`;
  return `_led_${pin}.value = ${state}\n`;
};

Blockly.Python['actuator_led_blink'] = function(block) {
  const pin   = block.getFieldValue('PIN');
  const times = Blockly.Python.valueToCode(block, 'TIMES', Blockly.Python.ORDER_NONE) || '3';
  const pause = Blockly.Python.valueToCode(block, 'PAUSE', Blockly.Python.ORDER_NONE) || '0.5';
  _defs['import_board']     = 'import board';
  _defs['import_time']      = 'import time';
  _defs['import_digitalio'] = 'import digitalio';
  _defs[`init_led_${pin}`]  =
    `_led_${pin} = digitalio.DigitalInOut(board.${pin})\n` +
    `_led_${pin}.direction = digitalio.Direction.OUTPUT`;
  return (
    `for _i in range(${times}):\n` +
    `    _led_${pin}.value = True\n` +
    `    time.sleep(${pause})\n` +
    `    _led_${pin}.value = False\n` +
    `    time.sleep(${pause})\n`
  );
};

// ── Aktoren: Servo ────────────────────────────────────────────────────────────

Blockly.Python['actuator_servo'] = function(block) {
  const s     = block.getFieldValue('SERVO');
  const pinMap = { S1: BOARD.servos.S1, S2: BOARD.servos.S2,
                   S3: BOARD.servos.S3, S4: BOARD.servos.S4 };
  const pin   = pinMap[s];
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_NONE) || '90';
  _defs['import_board']  = 'import board';
  _defs['import_pwmio']  = 'import pwmio';
  _defs['from_servo']    = 'from adafruit_motor import servo as _servo_mod';
  _defs[`init_srv_${s}`] =
    `_pwm_${s} = pwmio.PWMOut(board.${pin}, duty_cycle=2 ** 15, frequency=50)\n` +
    `_servo_${s} = _servo_mod.Servo(_pwm_${s})`;
  return `_servo_${s}.angle = ${angle}\n`;
};

// ── Aktoren: Buzzer ───────────────────────────────────────────────────────────

Blockly.Python['actuator_buzzer'] = function(block) {
  const pin  = BOARD.buzzer;
  const freq = Blockly.Python.valueToCode(block, 'FREQ',     Blockly.Python.ORDER_NONE) || '440';
  const dur  = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_NONE) || '0.5';
  _defs['import_board']  = 'import board';
  _defs['import_time']   = 'import time';
  _defs['import_pwmio']  = 'import pwmio';
  _defs['init_buzzer']   =
    `_buzz = pwmio.PWMOut(board.${pin}, variable_frequency=True)\n_buzz.duty_cycle = 0`;
  return `_buzz.frequency = ${freq}\n_buzz.duty_cycle = 32768\ntime.sleep(${dur})\n_buzz.duty_cycle = 0\n`;
};

Blockly.Python['actuator_buzzer_off'] = function(_block) {
  _defs['import_board']  = 'import board';
  _defs['import_pwmio']  = 'import pwmio';
  _defs['init_buzzer']   =
    `_buzz = pwmio.PWMOut(board.${BOARD.buzzer}, variable_frequency=True)\n_buzz.duty_cycle = 0`;
  return `_buzz.duty_cycle = 0\n`;
};

// ── Aktoren: Motor ────────────────────────────────────────────────────────────

function _motorDefs(motorKey) {
  const pins = BOARD.motors[motorKey];
  _defs['import_board']         = 'import board';
  _defs['import_pwmio']         = 'import pwmio';
  _defs['from_motor']           = 'from adafruit_motor import motor as _motor_mod';
  _defs[`init_mot_${motorKey}`] =
    `_m${motorKey}a = pwmio.PWMOut(board.${pins.pinA}, frequency=50)\n` +
    `_m${motorKey}b = pwmio.PWMOut(board.${pins.pinB}, frequency=50)\n` +
    `_motor_${motorKey} = _motor_mod.DCMotor(_m${motorKey}a, _m${motorKey}b)`;
}

Blockly.Python['actuator_motor_forward'] = function(block) {
  const m     = block.getFieldValue('MOTOR');
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_NONE) || '75';
  _motorDefs(m);
  return `_motor_${m}.throttle = ${speed} / 100\n`;
};

Blockly.Python['actuator_motor_backward'] = function(block) {
  const m     = block.getFieldValue('MOTOR');
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_NONE) || '75';
  _motorDefs(m);
  return `_motor_${m}.throttle = -(${speed} / 100)\n`;
};

Blockly.Python['actuator_motor_stop'] = function(block) {
  const m = block.getFieldValue('MOTOR');
  _motorDefs(m);
  return `_motor_${m}.throttle = 0\n`;
};

// ── NeoPixel ──────────────────────────────────────────────────────────────────

function _neopixelDefs() {
  _defs['import_board']    = 'import board';
  _defs['import_neopixel'] = 'import neopixel';
  _defs['init_pixels']     =
    `_pixels = neopixel.NeoPixel(board.${BOARD.neopixel.pin}, ${BOARD.neopixel.count}, brightness=0.3, auto_write=False)`;
}

Blockly.Python['neopixel_set'] = function(block) {
  _neopixelDefs();
  return `_pixels[${parseInt(block.getFieldValue('INDEX'),10) - 1}] = ${hexToRgbTuple(block.getFieldValue('COLOR'))}\n_pixels.show()\n`;
};

Blockly.Python['neopixel_fill'] = function(block) {
  _neopixelDefs();
  return `_pixels.fill(${hexToRgbTuple(block.getFieldValue('COLOR'))})\n_pixels.show()\n`;
};

Blockly.Python['neopixel_off'] = function(_block) {
  _neopixelDefs();
  return `_pixels.fill((0, 0, 0))\n_pixels.show()\n`;
};
