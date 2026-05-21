// boards.js – Board-Profile und Pin-Konstanten

const BOARD_PROFILES = {
  maker_pi_rp2040: {
    name: 'Cytron MAKER-PI-RP2040',
    neopixel:  { pin: 'GP18', count: 13 },
    buzzer:    'GP22',
    buttons:   { B1: 'GP20', B2: 'GP21' },
    motors: {
      M1: { pinA: 'GP0', pinB: 'GP1' },
      M2: { pinA: 'GP2', pinB: 'GP3' }
    },
    servos:    { S1: 'GP12', S2: 'GP13', S3: 'GP14', S4: 'GP15' },
    externalPins: ['GP4','GP5','GP16','GP17','GP26','GP27','GP28'],
  }
};

const BOARD = BOARD_PROFILES.maker_pi_rp2040;
