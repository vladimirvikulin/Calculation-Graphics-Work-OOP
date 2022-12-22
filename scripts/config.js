export default class Config {
  constructor() {
    this.rows = 17;
    this.cols = 13;
    this.gameSpeed = 100;
    this.blockSize = 32;
  }
  increaseSpeed() {
    if (this.gameSpeed > 50) this.gameSpeed -= 5;
  }
}
