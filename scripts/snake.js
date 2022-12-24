import Config from './config.js';
import Image from './imageCreate.js';

export default class Snake {
  constructor() {
    this.config = new Config();
    this.x = 7 * this.config.blockSize;
    this.y = 9 * this.config.blockSize;
    this.speedX = 0;
    this.speedY = 0;
    this.isDead = false;
    this.snake = [{ x: this.x, y: this.y }];
    this.headUpImg = new Image('img/snakeUp.png');
    this.headDownImg = new Image('img/snakeDown.png');
    this.headLeftImg = new Image('img/snakeLeft.png');
    this.headRightImg = new Image('img/snakeRight.png');
    this.bodyHorImg = new Image('img/snakeBodyHorizontal.png');
    this.bodyVerImg = new Image('img/snakeBodyVertical.png');
  }
}
