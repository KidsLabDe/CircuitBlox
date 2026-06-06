---
id: sensor_magnetic
blockCategory: Sensoren
subCategory: Digital-Sensoren
label: "🧲 Magnetfeld erkannt?"
colour: "#1565C0"
tooltip: "Gibt Wahr zurück, wenn ein Magnetfeld erkannt wird (KY-003, KY-021, KY-025)"
blockType: value
output: Boolean
inputs:
  - label: "🧲 Magnetfeld erkannt?  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_mag_${PIN}"
      val: "_mag_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_mag_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  expression: "(not _mag_${PIN}.value)"
  order: NONE
hardware:
  kyNumber: "KY-003"
  commonName: "Hall-Sensor / Reedkontakt"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Magnetfeldsensor (KY-003 / KY-021 / KY-025)

Erkennt Magnetfelder (z.B. von Magneten oder Motoren). Ideal für Türschalter oder Drehzahlmessung.
