---
id: actuator_relay
blockCategory: Aktoren
subCategory: Weitere
label: "⚡ Relais"
colour: "#E65100"
tooltip: "Schaltet ein Relais ein oder aus (KY-019)"
blockType: statement
inputs:
  - label: "⚡ Relais  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
  - name: STATE
    fieldType: on_off_dropdown
generator:
  imports:
    - "import board"
    - "import digitalio"
  defs:
    - key: "init_relay_${PIN}"
      val: "_relay_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_relay_${PIN}.direction = digitalio.Direction.OUTPUT"
  code: "_relay_${PIN}.value = ${STATE}\n"
hardware:
  kyNumber: "KY-019"
  commonName: "Relais-Modul"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Relais-Block (KY-019)

Schaltet ein Relais, das z.B. 230V-Geräte oder 12V-Verbraucher steuern kann.
