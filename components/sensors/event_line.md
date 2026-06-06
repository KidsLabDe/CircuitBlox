---
id: event_line
blockCategory: Sensoren
subCategory: Ereignisse
label: "⊡ Wenn Linie erkannt"
colour: "#0D47A1"
tooltip: "Führt Code aus, wenn der Linien-Sensor eine dunkle Linie erkennt"
blockType: event_simple
inputs:
  - label: "⊡ Wenn Linie erkannt  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
statementInput:
  name: DO
  label: "→ dann"
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_line_${PIN}"
      val: "_line_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_line_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  code: "if _line_${PIN}.value:\n${DO}"
hardware:
  kyNumber: "KY-033"
  commonName: "Liniensensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Ereignis: Wenn Linie erkannt
