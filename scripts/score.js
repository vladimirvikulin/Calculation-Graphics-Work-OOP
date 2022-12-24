export default class Score {
  constructor(scoreBlock, score = 0) {
    this.scoreBlock = document.querySelector(scoreBlock);
    this.score = score;
    this.draw();
  }

  increaseScore() {
    this.score++;
    this.draw();
  }

  resetScore() {
    this.score = 0;
    this.draw();
  }

  draw() {
    this.scoreBlock.innerHTML = this.score;
  }
}
