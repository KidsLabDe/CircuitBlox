// toolbox.js – Blockly Toolbox-Definition (JSON-Format)

const TOOLBOX = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '🔁 Steuerung',
      colour: '#546E7A',
      contents: [
        { kind: 'block', type: 'control_forever' },
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
        { kind: 'block', type: 'sensor_dht_temperature' },
        { kind: 'block', type: 'sensor_dht_humidity' },
        { kind: 'block', type: 'sensor_ultrasonic' },
        { kind: 'block', type: 'sensor_button' },
      ]
    },
    {
      kind: 'category',
      name: '🟠 Aktoren',
      colour: '#E65100',
      contents: [
        { kind: 'block', type: 'actuator_led' },
        { kind: 'block', type: 'actuator_led_blink',
          inputs: {
            TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
            PAUSE: { shadow: { type: 'math_number', fields: { NUM: 0.5 } } }
          }
        },
        { kind: 'sep' },
        { kind: 'block', type: 'actuator_servo',
          inputs: { ANGLE: { shadow: { type: 'math_number', fields: { NUM: 90 } } } } },
        { kind: 'sep' },
        { kind: 'block', type: 'actuator_buzzer',
          inputs: {
            FREQ:     { shadow: { type: 'math_number', fields: { NUM: 440 } } },
            DURATION: { shadow: { type: 'math_number', fields: { NUM: 0.5 } } }
          }
        },
        { kind: 'block', type: 'actuator_buzzer_off' },
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
    {
      kind: 'sep'
    },
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
            LOW:   { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            HIGH:  { shadow: { type: 'math_number', fields: { NUM: 100 } } }
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
