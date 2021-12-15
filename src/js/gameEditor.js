import Board from './board.js';
import * as CONSTANTS from './constants.js';

export default class GameEditor {

  speedLevel = 1;
  gameSpeed = 1000 - (0.125 * (this.speedLevel - 1));
  gameBoard = new Board();

  constructor() {
    this.initKeyControl();
  }

  startGame() {
    this.gameBoard.drawBoard();
    setTimeout(this.gameSpeed, this.startGame);
  }

  initKeyControl() {
    document.onkeydown = e => this.checkKey(e);
  }

  checkKey(e) {
    console.log(e);
    switch (e.key) {
    case CONSTANTS.KEY_DOWN:
      // console.log(CONSTANTS.KEY_DOWN);
      break;
    case CONSTANTS.KEY_LEFT:
      if (e.shiftKey) return; //финкция поворота
      break;
    case CONSTANTS.KEY_UP:
      break;
    case CONSTANTS.KEY_RIGHT:
      if (e.shiftKey) return; //финкция поворота
      break;
    }
  }
}

