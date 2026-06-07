---
id: sensor_encoder
blockCategory: Sensoren
subCategory: Joystick & Encoder
label: "🔄 Drehgeber Position"
colour: "#1565C0"
tooltip: "Liest die Position des Drehgebers (positiv = rechts, negativ = links, KY-040)"
blockType: value
output: Number
inputs:
  - label: "🔄 Drehgeber Position  CLK:"
    name: PIN_A
    fieldType: pin_dropdown
    pinSource: externalPins
  - label: "DT:"
    name: PIN_B
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import rotaryio"
  defs:
    - key: "init_enc_${PIN_A}_${PIN_B}"
      val: "_enc_${PIN_A}_${PIN_B} = rotaryio.IncrementalEncoder(board.${PIN_A}, board.${PIN_B})"
  expression: "_enc_${PIN_A}_${PIN_B}.position"
  order: MEMBER
hardware:
  kyNumber: "KY-040"
  commonName: "Rotary Encoder / Drehgeber"
  verbrauch3j: 0
  kitStandard: true
legacyGenerator: false
---

# Drehgeber / Rotary Encoder (KY-040)

Zählt Drehbewegungen (unbegrenzt). Positiver Wert = Rechtsdrehung, negativer Wert = Linksdrehung.
