---
id: sensor_joystick_btn
blockCategory: Sensoren
subCategory: Joystick & Encoder
label: "🕹️ Joystick Taste gedrückt?"
colour: "#1565C0"
tooltip: "Gibt Wahr zurück, wenn die Joystick-Taste gedrückt wird (KY-023)"
blockType: value
output: Boolean
inputs:
  - label: "🕹️ Joystick Taste gedrückt?  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_joy_btn_${PIN}"
      val: "_joy_btn_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_joy_btn_${PIN}.switch_to_input(pull=digitalio.Pull.UP)"
  expression: "(not _joy_btn_${PIN}.value)"
  order: NONE
hardware:
  kyNumber: "KY-023"
  commonName: "Joystick-Taste"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Joystick-Taste (KY-023)

Erkennt den Druck auf den Joystick-Knopf (integrierter Taster).
