import Figure from './figure.js';
import * as CONSTANTS from './../constants.js';

export default class FigureI extends Figure {
  color = CONSTANTS.YELLOW_CELL_ID;

  constructor() {
    super();
  }
}
