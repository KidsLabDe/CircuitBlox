---
id: sensor_joystick_x
blockCategory: Sensoren
subCategory: Joystick & Encoder
label: "🕹️ Joystick X-Achse (0–100%)"
colour: "#1565C0"
tooltip: "Liest die X-Achse des Joysticks (0–100 %, analoger Eingang, KY-023)"
blockType: value
output: Number
inputs:
  - label: "🕹️ Joystick X-Achse (0–100%)  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import analogio"
  defs:
    - key: "init_joy_x_${PIN}"
      val: "_joy_x_${PIN} = analogio.AnalogIn(board.${PIN})"
  expression: "round(_joy_x_${PIN}.value / 65535 * 100)"
  order: FUNCTION_CALL
hardware:
  kyNumber: "KY-023"
  commonName: "Joystick"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Joystick X-Achse (KY-023)

Liest die horizontale Achse des Joysticks als Prozentwert.
