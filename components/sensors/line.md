---
id: sensor_line
blockCategory: Sensoren
subCategory: Digital-Sensoren
label: "⊡ Linie erkannt?"
colour: "#1565C0"
tooltip: "Gibt Wahr zurück, wenn der Linien-Sensor eine dunkle Linie erkennt (KY-033)"
blockType: value
output: Boolean
inputs:
  - label: "⊡ Linie erkannt?  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_line_${PIN}"
      val: "_line_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_line_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  expression: "_line_${PIN}.value"
  order: MEMBER
hardware:
  kyNumber: "KY-033"
  commonName: "Linienverfolgungssensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Linienverfolgungssensor (KY-033)

Erkennt eine dunkle Linie auf hellem Untergrund. Wird in Linienverfolgungsrobotern eingesetzt.
