export default class Figure {
  figureCoords = [];
  inactiveColor = 1;

  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.figureCoords.push([x1, y1], [x2, y2], [x3, y3], [x4, y4]);
  }

  // setter(type, elementNumber, value) {
  //   const element = elementNumber - 1;
  //   const index = type === 'x' ? 0 : 1;
  //   this.figureCoords[element][index] = value;
  // }

  moveDown() {
    if (!this.canMoveDown) return;
    for (const coord of this.figureCoords) {
      coord[1] += 1;
    }
  }

  canMoveDown() {
    return true;
  }

  moveRight() {
    if (!this.canMoveRight) return;
    for (const coord of this.figureCoords) {
      coord[0] += 1;
    }
  }

  canMoveRight() {
    return true;
  }

  moveLeft() {
    if (!this.canMoveLeft) return;
    for (const coord of this.figureCoords) {
      coord[0] -= 1;
    }
  }

  canMoveLeft() {
    return true;
  }

  // поворот вправо,
  // поворот влево,
}
