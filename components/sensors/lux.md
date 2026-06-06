---
id: sensor_lux
blockCategory: Sensoren
subCategory: Abstand & Licht
label: "🔆 Helligkeit (Lux)"
colour: "#1565C0"
tooltip: "Liest die Beleuchtungsstärke in Lux vom Phototransistor (KY-054)"
blockType: value
output: Number
inputs:
  - label: "🔆 Helligkeit (Lux)  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
hardware:
  kyNumber: "KY-054"
  commonName: "Phototransistor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: true
---

# Helligkeitssensor in Lux (KY-054)

Misst die Beleuchtungsstärke in Lux. Verwendet eine logarithmische Umrechnung.

**Hinweis:** Dieser Block verwendet eine komplexe Hilfsfunktion und wird direkt in `generator.js` verarbeitet.
