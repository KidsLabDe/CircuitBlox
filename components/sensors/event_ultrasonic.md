---
id: event_ultrasonic
blockCategory: Sensoren
subCategory: Ereignisse
label: "📡 Wenn Abstand"
colour: "#0D47A1"
tooltip: "Führt Code aus, wenn der Abstand einen Wert überschreitet/unterschreitet"
blockType: event
inline: true
inputs:
  - label: "📡 Wenn Abstand  Trig:"
    name: TRIG
    fieldType: pin_dropdown
    pinSource: externalPins
  - label: "Echo:"
    name: ECHO
    fieldType: pin_dropdown
    pinSource: externalPins
  - name: OP
    fieldType: op_dropdown
  - label: "cm"
    fieldType: fixed_label
valueInputs:
  - name: VALUE
    check: Number
    defaultValue: 20
statementInput:
  name: DO
  label: "dann"
generator:
  imports:
    - "import board"
    - "import adafruit_hcsr04"
  defs:
    - key: "init_sonar"
      val: "_sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.${TRIG}, echo_pin=board.${ECHO})"
  code: "if _sonar.distance ${OP} ${VALUE}:\n${DO}"
hardware:
  commonName: "HC-SR04"
  verbrauch3j: 13
  kitStandard: true
legacyGenerator: false
---

# Ereignis: Wenn Abstand (HC-SR04)

Führt Aktionen aus, wenn der gemessene Abstand einen Schwellwert über- oder unterschreitet.
