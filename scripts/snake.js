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
    this.changeDirection();
  }

  pressToStart(canvas, context) {
    if (this.speedX === 0 && this.speedY === 0 && !this.isDead) {
      const text = 'Press WASD to start';
      context.font = `bold 30px ${'Courier New'}`;
      context.fillStyle = '#ff0000';
      context.fillText(text,
        (canvas.element.width - context.measureText(text).width) / 2,
        canvas.element.height / 2);
    }
  }

  setStartSettings(commonFood, superFood, score) {
    this.isDead = false;
    this.snake = [{ x: this.x, y: this.y }];
    score.resetScore();
    commonFood.randomCoords();
    superFood.randomSuperCoords();
  }

  deleteSnake() {
    this.isDead = true;
    this.x = 7 * this.config.blockSize;
    this.y = 9 * this.config.blockSize;
    this.speedX = 0;
    this.speedY = 0;
    this.snake = [];
  }

  collision(canvas, commonFood, superFood, score) {
    if (this.x < 0 || this.x >= canvas.element.width || this.y < 0 || this.y >= canvas.element.height) {
      this.deleteSnake();
      setTimeout(() => {
        this.setStartSettings(commonFood, superFood, score);
      }, 3000);
    }
    for (let i = 1; i < this.snake.length; i++) {
      if (this.x === this.snake[i].x && this.y === this.snake[i].y) {
        this.deleteSnake();
        setTimeout(() => {
          this.setStartSettings(commonFood, superFood, score);
        }, 3000);
      }
    }
  }

  checkFood(commonFood, superFood, score) {
    if (this.x === commonFood.x && this.y === commonFood.y) {
      this.snake.push({ x: commonFood.x, y: commonFood.y });
      score.increaseScore();
      commonFood.randomCoords();
    } else if (this.x === superFood.x && this.y === superFood.y) {
      for (let i = 0; i < 3; i++) {
        this.snake.push({ x: superFood.x + i * this.config.blockSize, y: superFood.y * this.config.blockSize });
      }
      for (let i = 0; i < 5; i++) score.increaseScore();
      superFood.x = -1;
      superFood.y = -1;
      superFood.isSuper = false;
    }
  }

  changePosition() {
    this.x += this.speedX * this.config.blockSize;
    this.y += this.speedY * this.config.blockSize;
    for (let i = this.snake.length - 1; i > 0; i--) {
      this.snake[i] = this.snake[i - 1];
    }
    if (this.snake.length) {
      this.snake[0] = { x: this.x, y: this.y };
    }
  }

  changeDirection() {
    document.addEventListener('keydown',  (e) => {
      if (e.code === 'KeyW' && this.speedY !== 1) {
        this.speedY = -1;
        this.speedX = 0;
      } else if (e.code === 'KeyA' && this.speedX !== 1) {
        this.speedX = -1;
        this.speedY = 0;
      } else if (e.code === 'KeyS' && this.speedY !== -1) {
        this.speedY = 1;
        this.speedX = 0;
      } else if (e.code === 'KeyD' && this.speedX !== -1) {
        this.speedX = 1;
        this.speedY = 0;
      }
    });
  }
}
