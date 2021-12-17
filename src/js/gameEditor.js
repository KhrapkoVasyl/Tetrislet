import Board from './board.js';
import * as CONSTANTS from './constants.js';
import Figure from './figure/figure.js';

export default class GameEditor {
  #speedLevel = 1;
  #gameSpeed = 1000 - 0.125 * (this.speedLevel - 1);
  #gameBoard = new Board();
  #currentFigure;

  constructor() {
    this.initKeyControl();
  }

  startGame() {
    // this.#currentFigure.moveDonw();
    this.gameBoard.drawBoard();
    setTimeout(this.gameSpeed, this.startGame);
  }

  // удалить ряд фигур

  initKeyControl() {
    document.onkeydown = e => this.checkKey(e);
  }

  checkKey(e) {
    console.log(e);
    switch (e.key) {
      case CONSTANTS.KEY_DOWN:
        // падение вниз
        break;
      case CONSTANTS.KEY_LEFT:
        if (e.shiftKey) return; //финкция поворота
        //движение влево
        break;
      case CONSTANTS.KEY_UP:
        //хз зачем кнопка вверх
        break;
      case CONSTANTS.KEY_RIGHT:
        if (e.shiftKey) return; //финкция поворота
        //движение вправо
        break;
    }
  }

  selectRandomFigure() {
    const randomFigure = Math.floor(Math.random() * CONSTANTS.FIGURES_QUANTITY);

    switch (randomFigure) {
      case 0:
        this.#currentFigure = new Figure();
        break;
      case 1:
        this.#currentFigure = new Figure();
        break;
      case 2:
        this.#currentFigure = new Figure();
        break;
      case 3:
        this.#currentFigure = new Figure();
        break;
      case 4:
        this.#currentFigure = new Figure();
        break;
      case 5:
        this.#currentFigure = new Figure();
        break;
      default:
        return;
    }
  }
}
