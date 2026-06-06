---
id: sensor_joystick_y
blockCategory: Sensoren
subCategory: Joystick & Encoder
label: "🕹️ Joystick Y-Achse (0–100%)"
colour: "#1565C0"
tooltip: "Liest die Y-Achse des Joysticks (0–100 %, analoger Eingang, KY-023)"
blockType: value
output: Number
inputs:
  - label: "🕹️ Joystick Y-Achse (0–100%)  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import analogio"
  defs:
    - key: "init_joy_y_${PIN}"
      val: "_joy_y_${PIN} = analogio.AnalogIn(board.${PIN})"
  expression: "round(_joy_y_${PIN}.value / 65535 * 100)"
  order: FUNCTION_CALL
hardware:
  kyNumber: "KY-023"
  commonName: "Joystick"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Joystick Y-Achse (KY-023)

Liest die vertikale Achse des Joysticks als Prozentwert.
