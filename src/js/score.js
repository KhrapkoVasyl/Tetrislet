class Score {
  static #instance;
  #score = 0;
  // scoreBoard = document.querySelector();

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new Score();
    }

    return this.#instance;
  }

  addPoints(points) {
    this.#score += points;
    // scoreBoard.setValue(points);
  }

  nullify() {
    this.#score = 0;
    // scoreBoard.setValue(points);
  }
}
