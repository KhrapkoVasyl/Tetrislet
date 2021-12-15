import * as CONSTANTS from './constants.js';

export default class Board {

  #state = [];
  boardElement = document.querySelector('.main');




  constructor() {
    this.fillBoard();
    this.drawBoard();
  }

  fillBoard() {
    for (let i = 0; i < 20; i++) {
      const nullArr = new Array(10);
      nullArr.fill(0);
      this.#state.push(nullArr);
    }
  }

  refill(num) { //for tests
    for (let i = 0; i < this.#state.length; i++) {
      for (let j = 0; j < this.#state[i].length; j++) {
        this.#state[i][j] = num;
      }
    }
  }


  drawBoard() {
    let mainInnerHTML = '';
    for (const row of this.#state) {
      for (const el of row) {
        mainInnerHTML += this.generateCellElement(el);
      }
    }
    this.boardElement.innerHTML = mainInnerHTML;
  }

  generateCellElement(cell) {
    switch (cell) {
    case CONSTANTS.EMPTY_CELL_ID: return CONSTANTS.EMPTY_CELL_CODE;
    case CONSTANTS.GREY_CELL_ID: return CONSTANTS.GREY_CELL_CODE;
    case CONSTANTS.GREEN_CELL_ID: return CONSTANTS.GREEN_CELL_CODE;
    case CONSTANTS.RED_CELL_ID: return CONSTANTS.RED_CELL_CODE;
    case CONSTANTS.VIOLET_CELL_ID: return CONSTANTS.VIOLET_CELL_CODE;
    case CONSTANTS.BLUE_CELL_ID: return CONSTANTS.BLUE_CELL_CODE;
    case CONSTANTS.YELLOW_CELL_ID: return CONSTANTS.YELLOW_CELL_CODE;
    }
  }

  showState() {
    let stateMatrix = '';
    for (const subArr of this.#state) {
      for (const el of subArr) {
        stateMatrix += (el + ' ');
      }
      stateMatrix += '\n';
    }
    console.log(stateMatrix);
  }
}

