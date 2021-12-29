import Board from './board.js';
import Score from './score.js';
import * as CONSTANTS from './config.js';
import FigureI from './figure/figureI.js';
import FigureJ from './figure/figureJ.js';
import FigureL from './figure/figureL.js';
import FigureS from './figure/figureS.js';
import FigureT from './figure/figureT.js';
import FigureZ from './figure/figureZ.js';
import FigureO from './figure/figureO.js';

export default class GameEditor {
  static #gameInstance;
  #speedLevel = 1;
  #gameSpeed = 1000 - 125 * (this.#speedLevel - 1);
  #gameBoard = Board.getInstance();
  #score = Score.getInstance();
  #currentFigure;
  #restartButton = document.querySelector('.restart-button');
  #gameOver = document.querySelector('.game-over');

  constructor() {
    this.initKeyControl();
    this.startGame();
    this.initButtonRestart();
  }

  static getInstance() {
    if (!this.#gameInstance) {
      this.#gameInstance = new GameEditor();
    }

    return this.#gameInstance;
  }

  startGame() {
    if (!this.#currentFigure) {
      this.selectRandomFigure();
      this.#gameBoard.displayFigure(this.#currentFigure);
      this.#gameBoard.drawBoard();
      this.#score.addPoints(10);
      this.checkSpeed();
    }
    this.#gameBoard.clearFigure(this.#currentFigure);
    const isActive = this.#currentFigure.moveDown(this.#gameBoard.state);
    if (!isActive) {
      this.#gameBoard.displayFigure(this.#currentFigure);
      const [minX, minY] = this.#currentFigure.searchMin();
      if (minY === 0) {
        this.endGame();
        return;
      }
      this.deleteLine();
      this.selectRandomFigure();
      this.#score.addPoints(10);
      this.checkSpeed();
    }
    this.#gameBoard.displayFigure(this.#currentFigure);

    setTimeout(this.startGame.bind(this), this.#gameSpeed);
  }

  initButtonRestart() {
    this.#restartButton.addEventListener('click', this.restartGame.bind(this));
  }

  initKeyControl() {
    document.onkeydown = e => this.checkKey(e);
  }

  restartGame() {
    this.#gameOver.classList.add('hidden');
    this.#gameBoard.fillBoard();
    this.#score.nullify();
    this.#speedLevel = 1;
    this.#gameSpeed = 1000 - 125 * (this.#speedLevel - 1);
    this.#gameBoard.drawBoard();
    this.startGame();
  }

  endGame() {
    this.#gameOver.classList.remove('hidden');
    this.#currentFigure = null;
  }

  checkSpeed() {
    if (this.#speedLevel >= 8) return;
    if (
      this.#score.getScore() >
      (1000 * this.#speedLevel) / (9 - this.#speedLevel)
    ) {
      this.#speedLevel++;
      this.#gameSpeed = 1000 - 125 * (this.#speedLevel - 1);
    }
  }

  checkKey(e) {
    console.log(e.key);
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
      case CONSTANTS.KEY_SHIFT:
        this.#gameBoard.displayFigure(this.#currentFigure, 0);
        this.#currentFigure.roll(this.#gameBoard.state);
        this.#gameBoard.displayFigure(this.#currentFigure);
    }
  }

  deleteLine() {
    let isFilled = true;
    let filledRows = 0;
    for (let i = 0; i < this.#gameBoard.state.length; i++) {
      for (let j = 0; j < this.#gameBoard.state[i].length; j++) {
        if (this.#gameBoard.state[i][j] === 0) {
          isFilled = false;
          break;
        }
      }
      if (isFilled) {
        filledRows++;
        this.#gameBoard.state.splice(i, 1);
        this.#gameBoard.state.unshift(new Array(10).fill(0));
      }
      isFilled = true;
    }
    this.#score.addOnRawsFilled(filledRows);
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
