---
id: event_flame
blockCategory: Sensoren
subCategory: Ereignisse
label: "🔥 Wenn Flamme erkannt"
colour: "#0D47A1"
tooltip: "Führt Code aus, wenn der Flammensensor eine Flamme erkennt (KY-026)"
blockType: event_simple
inputs:
  - label: "🔥 Wenn Flamme erkannt  Pin:"
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
    - key: "init_flame_${PIN}"
      val: "_flame_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_flame_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  code: "if not _flame_${PIN}.value:\n${DO}"
hardware:
  kyNumber: "KY-026"
  commonName: "Flammensensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Ereignis: Wenn Flamme erkannt
