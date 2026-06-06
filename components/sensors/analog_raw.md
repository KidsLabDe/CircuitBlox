---
id: sensor_analog_raw
blockCategory: Sensoren
subCategory: Analog
label: "📊 Analogwert (0–100%)"
colour: "#1565C0"
tooltip: "Liest einen analogen Sensor aus (0–100 %). Für Mikrofon-Pegel, Helligkeit, Herzschlag u.v.m."
blockType: value
output: Number
inputs:
  - label: "📊 Analogwert (0–100%)  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import analogio"
  defs:
    - key: "init_analog_${PIN}"
      val: "_analog_${PIN} = analogio.AnalogIn(board.${PIN})"
  expression: "round(_analog_${PIN}.value / 65535 * 100)"
  order: FUNCTION_CALL
hardware:
  commonName: "Universeller Analogeingang"
  verbrauch3j: 0
  kitStandard: true
legacyGenerator: false
---

# Universeller Analog-Sensor

Liest jeden analogen Sensor als Prozentwert (0–100 %). Geeignet für Mikrofon, Helligkeit, Magnetfeld u.v.m.
