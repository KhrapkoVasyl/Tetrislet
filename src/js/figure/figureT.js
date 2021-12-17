import Figure from './figure.js';
import * as CONSTANTS from './../constants.js';

export default class FigureT extends Figure {
  color = CONSTANTS.PINK_CELL_ID;
  #START_X1 = 5;
  #START_Y1 = 0;
  #START_X2 = 5;
  #START_Y2 = 1;
  #START_X3 = 4;
  #START_Y3 = 1;
  #START_X4 = 4;
  #START_Y4 = 2;

  constructor() {
    super();
    this.setCoordinates(
      this.#START_X1,
      this.#START_Y1,
      this.#START_X2,
      this.#START_Y2,
      this.#START_X3,
      this.#START_Y3,
      this.#START_X4,
      this.#START_Y4
    );
  }
}
