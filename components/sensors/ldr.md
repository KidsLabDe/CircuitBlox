---
id: sensor_ldr
blockCategory: Sensoren
subCategory: Abstand & Licht
label: "☀️ Helligkeit (0–100%)"
colour: "#1565C0"
tooltip: "Liest die Helligkeit in Prozent (0 = dunkel, 100 = hell)"
blockType: value
output: Number
inputs:
  - label: "☀️ Helligkeit (0–100%)  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import analogio"
  defs:
    - key: "init_ldr_${PIN}"
      val: "_ldr_${PIN} = analogio.AnalogIn(board.${PIN})"
  expression: "round(_ldr_${PIN}.value / 65535 * 100)"
  order: FUNCTION_CALL
hardware:
  kyNumber: "KY-018"
  commonName: "LDR / Fotowiderstand"
  verbrauch3j: 9
  kitStandard: true
legacyGenerator: false
---

# Lichtsensor (LDR / KY-018)

Misst die Umgebungshelligkeit als Prozentwert. 0 % = sehr dunkel, 100 % = sehr hell.
