import Figure from './figure.js';
import * as CONSTANTS from './../constants.js';

export default class FigureL extends Figure {
  color = CONSTANTS.VIOLET_CELL_ID;
  #START_X1 = 4;
  #START_Y1 = 1;
  #START_X2 = 4;
  #START_Y2 = 0;
  #START_X3 = 5;
  #START_Y3 = 0;
  #START_X4 = 6;
  #START_Y4 = 0;

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
