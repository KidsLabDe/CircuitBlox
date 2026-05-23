// toolbox.js – Blockly Toolbox-Definition
// SETUP und FÜR IMMER sind NICHT hier – sie sind fest im Workspace verankert.

const TOOLBOX = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '🔁 Steuerung',
      colour: '#546E7A',
      contents: [
        { kind: 'block', type: 'control_wait',
          inputs: { SECONDS: { shadow: { type: 'math_number', fields: { NUM: 1 } } } } },
        { kind: 'block', type: 'control_print' },
        { kind: 'sep' },
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_repeat_ext',
          inputs: { TIMES: { shadow: { type: 'math_number', fields: { NUM: 10 } } } } },
        { kind: 'block', type: 'controls_whileUntil' },
      ]
    },
    {
      kind: 'category',
      name: '🔵 Sensoren',
      colour: '#1565C0',
      contents: [
        // ── Bestehende Sensoren ──
        { kind: 'label', text: '── Temperatur & Feuchte ──' },
        { kind: 'block', type: 'sensor_dht_temperature' },
        { kind: 'block', type: 'sensor_dht_humidity' },
        { kind: 'block', type: 'sensor_dht11_temperature' },
        { kind: 'block', type: 'sensor_dht11_humidity' },
        { kind: 'label', text: '── Druck & I2C ──' },
        { kind: 'block', type: 'sensor_bmp280_temp' },
        { kind: 'block', type: 'sensor_bmp280_pressure' },
        { kind: 'label', text: '── Abstand & Licht ──' },
        { kind: 'block', type: 'sensor_ultrasonic' },
        { kind: 'block', type: 'sensor_ldr' },
        { kind: 'block', type: 'sensor_lux' },
        { kind: 'label', text: '── Analog (universell) ──' },
        { kind: 'block', type: 'sensor_analog_raw' },
        { kind: 'block', type: 'sensor_ntc_temp' },
        { kind: 'label', text: '── Digital-Sensoren ──' },
        { kind: 'block', type: 'sensor_button' },
        { kind: 'block', type: 'sensor_obstacle' },
        { kind: 'block', type: 'sensor_line' },
        { kind: 'block', type: 'sensor_tilt' },
        { kind: 'block', type: 'sensor_magnetic' },
        { kind: 'block', type: 'sensor_flame' },
        { kind: 'block', type: 'sensor_sound' },
        { kind: 'block', type: 'sensor_touch' },
        { kind: 'block', type: 'sensor_vibration' },
        { kind: 'label', text: '── Joystick & Encoder ──' },
        { kind: 'block', type: 'sensor_joystick_x' },
        { kind: 'block', type: 'sensor_joystick_y' },
        { kind: 'block', type: 'sensor_joystick_btn' },
        { kind: 'block', type: 'sensor_encoder' },
        // ── Ereignis-Blöcke ──
        { kind: 'label', text: '── Ereignisse ──' },
        { kind: 'block', type: 'event_temperature',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 25 } } } } },
        { kind: 'block', type: 'event_ultrasonic',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 20 } } } } },
        { kind: 'block', type: 'event_ldr',
          inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 50 } } } } },
        { kind: 'block', type: 'event_button' },
        { kind: 'block', type: 'event_obstacle' },
        { kind: 'block', type: 'event_flame' },
        { kind: 'block', type: 'event_sound' },
        { kind: 'block', type: 'event_tilt' },
        { kind: 'block', type: 'event_magnetic' },
        { kind: 'block', type: 'event_line' },
      ]
    },
    {
      kind: 'category',
      name: '🟠 Aktoren',
      colour: '#E65100',
      contents: [
        { kind: 'label', text: '── LED ──' },
        { kind: 'block', type: 'actuator_led' },
        { kind: 'block', type: 'actuator_led_blink',
          inputs: {
            TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
            PAUSE: { shadow: { type: 'math_number', fields: { NUM: 0.5 } } }
          }
        },
        { kind: 'block', type: 'actuator_rgb_led' },
        { kind: 'block', type: 'actuator_2color_led' },
        { kind: 'label', text: '── Servo & Motor ──' },
        { kind: 'block', type: 'actuator_servo',
          inputs: { ANGLE: { shadow: { type: 'math_number', fields: { NUM: 90 } } } } },
        { kind: 'label', text: '── Ton ──' },
        { kind: 'block', type: 'actuator_buzzer',
          inputs: {
            FREQ:     { shadow: { type: 'math_number', fields: { NUM: 440 } } },
            DURATION: { shadow: { type: 'math_number', fields: { NUM: 0.5 } } }
          }
        },
        { kind: 'block', type: 'actuator_buzzer_off' },
        { kind: 'block', type: 'actuator_active_buzzer' },
        { kind: 'label', text: '── Weitere ──' },
        { kind: 'block', type: 'actuator_relay' },
      ]
    },
    {
      kind: 'category',
      name: '🟣 Motor',
      colour: '#6A1B9A',
      contents: [
        { kind: 'block', type: 'actuator_motor_forward',
          inputs: { SPEED: { shadow: { type: 'math_number', fields: { NUM: 75 } } } } },
        { kind: 'block', type: 'actuator_motor_backward',
          inputs: { SPEED: { shadow: { type: 'math_number', fields: { NUM: 75 } } } } },
        { kind: 'block', type: 'actuator_motor_stop' },
      ]
    },
    {
      kind: 'category',
      name: '🌈 NeoPixel',
      colour: '#006064',
      contents: [
        { kind: 'block', type: 'neopixel_set' },
        { kind: 'block', type: 'neopixel_fill' },
        { kind: 'block', type: 'neopixel_off' },
      ]
    },
    { kind: 'sep' },
    {
      kind: 'category',
      name: '📐 Mathematik',
      colour: '#1565C0',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_constrain',
          inputs: {
            LOW:  { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            HIGH: { shadow: { type: 'math_number', fields: { NUM: 100 } } }
          }
        },
        { kind: 'block', type: 'math_random_int',
          inputs: {
            FROM: { shadow: { type: 'math_number', fields: { NUM: 1 } } },
            TO:   { shadow: { type: 'math_number', fields: { NUM: 10 } } }
          }
        },
      ]
    },
    {
      kind: 'category',
      name: '🔤 Text',
      colour: '#00695C',
      contents: [
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_join' },
        { kind: 'block', type: 'text_length' },
      ]
    },
    {
      kind: 'category',
      name: '⚡ Logik',
      colour: '#4E342E',
      contents: [
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_boolean' },
      ]
    },
    {
      kind: 'category',
      name: '📦 Variablen',
      colour: '#880E4F',
      custom: 'VARIABLE',
    },
  ]
};
