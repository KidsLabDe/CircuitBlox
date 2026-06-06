---
id: sensor_ultrasonic
blockCategory: Sensoren
subCategory: Abstand & Licht
label: "📡 Abstand (cm)"
colour: "#1565C0"
tooltip: "Misst den Abstand in cm mit dem HC-SR04 Ultraschall-Sensor"
blockType: value
output: Number
inputs:
  - label: "📡 Abstand (cm)  Trig:"
    name: TRIG
    fieldType: pin_dropdown
    pinSource: externalPins
  - label: "  Echo:"
    name: ECHO
    fieldType: pin_dropdown
    pinSource: externalPins
generator:
  imports:
    - "import board"
    - "import adafruit_hcsr04"
  defs:
    - key: "init_sonar"
      val: "_sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.${TRIG}, echo_pin=board.${ECHO})"
  expression: "_sonar.distance"
  order: MEMBER
hardware:
  commonName: "HC-SR04"
  verbrauch3j: 13
  kitStandard: true
legacyGenerator: false
---

# Ultraschall-Abstandssensor HC-SR04

Misst Abstände von ca. 2 cm bis 400 cm. Wird oft in Roboter-Hinderniserkennung und Parkassistenten eingesetzt.
