---
id: sensor_dht_humidity
blockCategory: Sensoren
subCategory: Temperatur & Feuchte
label: "💧 Luftfeuchte (%)"
colour: "#1565C0"
tooltip: "Liest die Luftfeuchtigkeit in % vom DHT22 Sensor"
blockType: value
output: Number
inputs:
  - label: "💧 Luftfeuchte (%)  Pin:"
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
  expression: "_dht_${PIN}.humidity"
  order: MEMBER
hardware:
  commonName: "DHT22"
  verbrauch3j: 5
  kitStandard: true
legacyGenerator: false
---

# DHT22 Luftfeuchtesensor

Misst die relative Luftfeuchtigkeit in Prozent.
