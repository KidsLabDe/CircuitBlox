---
id: sensor_bmp280_temp
blockCategory: Sensoren
subCategory: Druck & I2C
label: "🌡️ BMP280 Temperatur (°C)"
colour: "#1565C0"
tooltip: "Liest die Temperatur in °C vom BMP280 über I2C. Benötigt Library: adafruit_bmp280 (KY-052)"
blockType: value
output: Number
inputs:
  - label: "🌡️ BMP280 Temperatur (°C)  SDA:"
    name: SDA
    fieldType: pin_dropdown
    pinSource: externalPins
  - label: "SCL:"
    name: SCL
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import busio"
    - "import adafruit_bmp280"
  defs:
    - key: "init_bmp280"
      val: "_i2c_bmp = busio.I2C(board.${SCL}, board.${SDA})\n_bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(_i2c_bmp)"
  expression: "round(_bmp280.temperature, 1)"
  order: FUNCTION_CALL
hardware:
  kyNumber: "KY-052"
  commonName: "BMP280"
  verbrauch3j: 0
  kitStandard: false
legacyGenerator: false
---

# BMP280 Temperatursensor (I2C)

Hochgenauer Temperatur- und Luftdrucksensor über I2C. Benötigt die Bibliothek `adafruit_bmp280` auf CIRCUITPY/lib/.
