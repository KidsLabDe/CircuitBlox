---
id: sensor_vibration
blockCategory: Sensoren
subCategory: Digital-Sensoren
label: "💥 Erschütterung erkannt?"
colour: "#1565C0"
tooltip: "Gibt Wahr zurück, wenn der Vibrations- oder Klopfsensor ausgelöst wird (KY-002, KY-031)"
blockType: value
output: Boolean
inputs:
  - label: "💥 Erschütterung erkannt?  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_vib_${PIN}"
      val: "_vib_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_vib_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  expression: "(not _vib_${PIN}.value)"
  order: NONE
hardware:
  kyNumber: "KY-002"
  commonName: "Vibrationssensor / Klopfsensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Vibrationssensor (KY-002 / KY-031)

Erkennt Erschütterungen, Stöße oder Klopfen.
