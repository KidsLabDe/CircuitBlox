---
id: actuator_active_buzzer
blockCategory: Aktoren
subCategory: Ton
label: "🔔 Aktiver Summer"
colour: "#E65100"
tooltip: "Schaltet einen aktiven Summer (Piezo mit fester Frequenz) ein oder aus (KY-012)"
blockType: statement
inputs:
  - label: "🔔 Aktiver Summer  Pin:"
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
    - key: "init_abuzz_${PIN}"
      val: "_abuzz_${PIN} = digitalio.DigitalInOut(board.${PIN})\n_abuzz_${PIN}.direction = digitalio.Direction.OUTPUT"
  code: "_abuzz_${PIN}.value = ${STATE}\n"
hardware:
  kyNumber: "KY-012"
  commonName: "Aktiver Summer / Buzzer"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# Aktiver Summer (KY-012)

Aktiver Summer mit eingebauter Tonfrequenz – nur Ein/Aus, kein Ton wählbar.
