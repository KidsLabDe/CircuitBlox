---
id: sensor_dht_temperature
blockCategory: Sensoren
subCategory: Temperatur & Feuchte
label: "🌡️ Temperatur (°C)"
colour: "#1565C0"
tooltip: "Liest die Temperatur in Grad Celsius vom DHT22 Sensor"
blockType: value
output: Number
inputs:
  - label: "🌡️ Temperatur (°C)  Pin:"
    name: PIN
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import adafruit_dht"
  defs:
    - key: "init_dht_${PIN}"
      val: "_dht_${PIN} = adafruit_dht.DHT22(board.${PIN})"
  expression: "_dht_${PIN}.temperature"
  order: MEMBER
hardware:
  kyNumber: ""
  commonName: "DHT22"
  verbrauch3j: 5
  kitStandard: true
legacyGenerator: false
---

# DHT22 Temperatursensor

Misst die Umgebungstemperatur in Grad Celsius. Geeignet für Klimastationen und Gewächshausprojekte.
