export default class Board {

  state = [];

  constructor() {
    this.fillBoard();
  }

  fillBoard() {
    for (let i = 0; i < 20; i++) {
      const nullArr = new Array(10);
      nullArr.fill(0);
      this.state.push(nullArr);
    }
  }

  showState() {
    let stateMatrix = '';
    for (const subArr of this.state) {
      for (const el of subArr) {
        stateMatrix += (el + ' ');
      }
      stateMatrix += '\n';
    }
    console.log(stateMatrix);
  }
}
