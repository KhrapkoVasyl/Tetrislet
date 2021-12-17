export default class Figure {
  coords = [];
  inactiveColor = 1;

  constructor() {}

  // setter(type, elementNumber, value) {
  //   const element = elementNumber - 1;
  //   const index = type === 'x' ? 0 : 1;
  //   this.figureCoords[element][index] = value;
  // }
  setCoordinates(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.coords.push([x1, y1], [x2, y2], [x3, y3], [x4, y4]);
  }

  moveDown(board) {
    const y = 1;
    if (!this.canMoveDown(board)) return false;
    for (const coord of this.coords) {
      coord[y] += 1;
    }
    return true;
  }

  canMoveDown(board) {
    for (const coords of this.coords) {
      const x = coords[0];
      const y = coords[1];
      if (y + 1 >= board.length || board[y + 1][x] !== 0) return false;
    }
    return true;
  }

  moveRight(board) {
    const x = 0;
    if (!this.canMoveRight(board)) return;
    for (const coord of this.coords) {
      coord[x] += 1;
    }
  }

  canMoveRight(board) {
    for (const coord of this.coords) {
      const x = coord[0];
      const y = coord[1];
      if (x + 1 >= board[x].length || board[y][x + 1] !== 0) return false;
    }
    return true;
  }

  moveLeft(board) {
    if (!this.canMoveLeft(board)) return;
    for (const coord of this.coords) {
      coord[0] -= 1;
    }
  }

  canMoveLeft(board) {
    for (const coords of this.coords) {
      const x = coords[0];
      const y = coords[1];
      if (x - 1 < 0 || board[y][x - 1] !== 0) return false;
    }
    return true;
  }

  // поворот вправо,
  // поворот влево,
}
