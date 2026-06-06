---
id: sensor_obstacle
blockCategory: Sensoren
subCategory: Digital-Sensoren
label: "🚧 Hindernis erkannt?"
colour: "#1565C0"
tooltip: "Gibt Wahr zurück, wenn der Hindernis-Sensor ein Objekt erkennt (KY-032)"
blockType: value
output: Boolean
inputs:
  - label: "🚧 Hindernis erkannt?  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_obstacle_${PIN}"
      val: "_obstacle_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_obstacle_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  expression: "(not _obstacle_${PIN}.value)"
  order: NONE
hardware:
  kyNumber: "KY-032"
  commonName: "IR-Hindernissensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Hindernis-Sensor (KY-032)

Erkennt Hindernisse per Infrarot. Gibt `Wahr` zurück, wenn ein Objekt in ca. 2–30 cm Abstand erkannt wird.
