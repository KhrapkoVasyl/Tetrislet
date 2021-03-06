export default class Score {
  static #instance;
  #score = 0;
  scoreBoard = document.querySelector('.score-value');

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new Score();
    }

    return this.#instance;
  }

  getScore() {
    return this.#score;
  }

  addPoints(points) {
    this.#score += points;
    this.scoreBoard.textContent = this.#score;
  }

  nullify() {
    this.#score = 0;
    this.scoreBoard.textContent = this.#score;
  }

  addOnRawsFilled(quantity) {
    switch (quantity) {
      case 1:
        this.addPoints(100);
        return;
      case 2:
        this.addPoints(300);
        return;
      case 3:
        this.addPoints(700);
        return;
      case 4:
        this.addPoints(1000);
        return;
    }
  }
}
