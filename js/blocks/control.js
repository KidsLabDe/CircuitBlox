// blocks/control.js – Steuerungs-Blöcke

Blockly.Blocks['control_forever'] = {
  init: function() {
    this.appendStatementInput('DO')
        .appendField('🔁 Für immer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#546E7A');
    this.setTooltip('Dieser Code wird immer wieder wiederholt');
  }
};

Blockly.Blocks['control_wait'] = {
  init: function() {
    this.appendValueInput('SECONDS')
        .setCheck('Number')
        .appendField('⏱️ Warte');
    this.appendDummyInput()
        .appendField('Sekunden');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#546E7A');
    this.setTooltip('Wartet die angegebene Anzahl Sekunden');
  }
};

Blockly.Blocks['control_print'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .appendField('📺 Ausgabe:');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#546E7A');
    this.setTooltip('Gibt einen Wert im Seriellen Monitor aus');
  }
};
