---
id: sensor_ntc_temp
blockCategory: Sensoren
subCategory: Analog
label: "🌡️ NTC Temperatur (°C)"
colour: "#1565C0"
tooltip: "Liest die Temperatur in °C vom NTC-Thermistor (10 kΩ NTC + 10 kΩ Vorwiderstand, KY-013)"
blockType: value
output: Number
inputs:
  - label: "🌡️ NTC Temperatur (°C)  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
hardware:
  kyNumber: "KY-013"
  commonName: "NTC Thermistor"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: true
---

# NTC Temperatursensor (KY-013)

Analoger Temperatursensor mit NTC-Widerstand. Benötigt eine Steinhart-Hart-Gleichung für die Umrechnung.

**Hinweis:** Dieser Block verwendet eine komplexe Hilfsfunktion und wird direkt in `generator.js` verarbeitet.
