import Board from './board.js';
import * as CONSTANTS from './constants.js';
import FigureI from './figure/figureI.js';
import FigureJ from './figure/figureJ.js';
import FigureL from './figure/figureL.js';
import FigureS from './figure/figureS.js';
import FigureT from './figure/figureT.js';
import FigureZ from './figure/figureZ.js';
import FigureO from './figure/figureO.js';

export default class GameEditor {
  #speedLevel = 1;
  gameSpeed = 1000 - 0.125 * (this.#speedLevel - 1);
  #gameBoard = new Board();
  #currentFigure;

  constructor() {
    this.initKeyControl();
    this.startGame();
  }

  startGame() {
    if (!this.#currentFigure) {
      this.selectRandomFigure();
      this.#gameBoard.displayFigure(this.#currentFigure);
    }
    this.#gameBoard.clearFigure(this.#currentFigure);
    const isActive = this.#currentFigure.moveDown(this.#gameBoard.state);
    if (!isActive) {
      this.#gameBoard.displayFigure(this.#currentFigure);
      this.deleteLine();
      this.selectRandomFigure();
      this.#gameBoard.displayFigure(this.#currentFigure);
    } else {
      this.#gameBoard.displayFigure(this.#currentFigure);
    }
    setTimeout(this.startGame.bind(this), this.gameSpeed);
  }

  initKeyControl() {
    document.onkeydown = e => this.checkKey(e);
  }

  checkKey(e) {
    console.log(e);
    switch (e.key) {
      case CONSTANTS.KEY_DOWN:
        this.#gameBoard.displayFigure(this.#currentFigure, 0);
        this.#currentFigure.moveDown(this.#gameBoard.state);
        this.#gameBoard.displayFigure(this.#currentFigure);
        break;
      case CONSTANTS.KEY_LEFT:
        this.#gameBoard.displayFigure(this.#currentFigure, 0);
        this.#currentFigure.moveLeft(this.#gameBoard.state);
        this.#gameBoard.displayFigure(this.#currentFigure);

        break;
      case CONSTANTS.KEY_RIGHT:
        this.#gameBoard.displayFigure(this.#currentFigure, 0);
        this.#currentFigure.moveRight(this.#gameBoard.state);
        this.#gameBoard.displayFigure(this.#currentFigure);
        break;
      case CONSTANTS.KEY_SPACE:
        this.#gameBoard.displayFigure(this.#currentFigure, 0);
        this.#currentFigure.roll(this.#gameBoard.state);
        this.#gameBoard.displayFigure(this.#currentFigure);
    }
  }

  deleteLine() {
    let isFilled = true;
    console.log('hello');
    for (let i = 0; i < this.#gameBoard.state.length; i++) {
      console.log('inside');
      for (let j = 0; j < this.#gameBoard.state[i].length; j++) {
        if (this.#gameBoard.state[i][j] === 0) {
          isFilled = false;
          break;
        }
      }
      if (isFilled) {
        this.#gameBoard.state.splice(i, 1);
        this.#gameBoard.state.unshift(new Array(10).fill(0));
      }
      isFilled = true;
    }
    console.log('goodbye');
  }

  selectRandomFigure() {
    const randomFigure = Math.floor(Math.random() * CONSTANTS.FIGURES_QUANTITY);
    switch (randomFigure) {
      case 0:
        this.#currentFigure = new FigureI();
        break;
      case 1:
        this.#currentFigure = new FigureJ();
        break;
      case 2:
        this.#currentFigure = new FigureL();
        break;
      case 3:
        this.#currentFigure = new FigureS();
        break;
      case 4:
        this.#currentFigure = new FigureT();
        break;
      case 5:
        this.#currentFigure = new FigureZ();
        break;
      case 6:
        this.#currentFigure = new FigureO();
        break;
      default:
        return;
    }
  }
}
