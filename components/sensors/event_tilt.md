---
id: event_tilt
blockCategory: Sensoren
subCategory: Ereignisse
label: "📐 Wenn geneigt"
colour: "#0D47A1"
tooltip: "Führt Code aus, wenn der Neigungssensor geneigt ist"
blockType: event_simple
inputs:
  - label: "📐 Wenn geneigt  Pin:"
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
    - key: "init_tilt_${PIN}"
      val: "_tilt_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_tilt_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  code: "if not _tilt_${PIN}.value:\n${DO}"
hardware:
  kyNumber: "KY-017"
  commonName: "Neigungssensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Ereignis: Wenn geneigt
