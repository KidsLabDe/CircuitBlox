---
id: event_magnetic
blockCategory: Sensoren
subCategory: Ereignisse
label: "🧲 Wenn Magnetfeld erkannt"
colour: "#0D47A1"
tooltip: "Führt Code aus, wenn ein Magnetfeld erkannt wird"
blockType: event_simple
inputs:
  - label: "🧲 Wenn Magnetfeld erkannt  Pin:"
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
    - key: "init_mag_${PIN}"
      val: "_mag_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_mag_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  code: "if not _mag_${PIN}.value:\n${DO}"
hardware:
  kyNumber: "KY-003"
  commonName: "Hall-Sensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Ereignis: Wenn Magnetfeld erkannt
