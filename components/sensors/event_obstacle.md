---
id: event_obstacle
blockCategory: Sensoren
subCategory: Ereignisse
label: "🚧 Wenn Hindernis erkannt"
colour: "#0D47A1"
tooltip: "Führt Code aus, wenn der Hindernis-Sensor ein Objekt erkennt (KY-032)"
blockType: event_simple
inputs:
  - label: "🚧 Wenn Hindernis erkannt  Pin:"
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
    - key: "init_obstacle_${PIN}"
      val: "_obstacle_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_obstacle_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  code: "if not _obstacle_${PIN}.value:\n${DO}"
hardware:
  kyNumber: "KY-032"
  commonName: "IR-Hindernissensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Ereignis: Wenn Hindernis erkannt

Führt Code aus, sobald der Sensor ein Hindernis erkennt.
