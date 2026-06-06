---
id: sensor_flame
blockCategory: Sensoren
subCategory: Digital-Sensoren
label: "🔥 Flamme erkannt?"
colour: "#1565C0"
tooltip: "Gibt Wahr zurück, wenn der Flammensensor eine Flamme erkennt (KY-026)"
blockType: value
output: Boolean
inputs:
  - label: "🔥 Flamme erkannt?  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_flame_${PIN}"
      val: "_flame_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_flame_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  expression: "(not _flame_${PIN}.value)"
  order: NONE
hardware:
  kyNumber: "KY-026"
  commonName: "Flammensensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Flammensensor (KY-026)

Erkennt Flammen oder starkes Infrarotlicht. Für Sicherheits- oder Feuerwehrroboter-Projekte.
