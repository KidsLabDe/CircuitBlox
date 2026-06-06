---
id: sensor_tilt
blockCategory: Sensoren
subCategory: Digital-Sensoren
label: "📐 Geneigt?"
colour: "#1565C0"
tooltip: "Gibt Wahr zurück, wenn der Neigungssensor geneigt ist (KY-017, KY-020)"
blockType: value
output: Boolean
inputs:
  - label: "📐 Geneigt?  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_tilt_${PIN}"
      val: "_tilt_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_tilt_${PIN}.switch_to_input(pull=digitalio.Pull.DOWN)"
  expression: "(not _tilt_${PIN}.value)"
  order: NONE
hardware:
  kyNumber: "KY-017"
  commonName: "Neigungssensor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Neigungssensor (KY-017 / KY-020)

Erkennt Neigung oder Erschütterungen mittels einer Kugel im Gehäuse.
