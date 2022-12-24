import Config from './config.js';
import Image from './imageCreate.js';

class Food {
  constructor(canvas) {
    this.config = new Config();
    this.x;
    this.y;
    this.canvas = canvas;
  }

  getRandomFood(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class CommonFood extends Food {
  constructor(canvas) {
    super(canvas);
    this.foodImg1 = new Image('img/apple.png');
    this.foodImg2 = new Image('img/carrot.png');
    this.foodImg3 = new Image('img/hamburger.png');
    this.foodImg4 = new Image('img/strawberry.png');
    this.foodImg5 = new Image('img/watermelon.png');
    this.food;
    this.randomCoords();

  }

  draw(context) {
    if (this.food === 1) context.drawImage(this.foodImg1.image, this.x, this.y);
    else if (this.food === 2) context.drawImage(this.foodImg2.image, this.x, this.y);
    else if (this.food === 3) context.drawImage(this.foodImg3.image, this.x, this.y);
    else if (this.food === 4) context.drawImage(this.foodImg4.image, this.x, this.y);
    else if (this.food === 5) context.drawImage(this.foodImg5.image, this.x, this.y);
  }

  randomCoords() {
    this.food = this.getRandomFood(1, 5);
    this.x = this.getRandomFood(0, this.config.cols - 1) * this.config.blockSize;
    this.y = this.getRandomFood(0, this.config.rows - 1) * this.config.blockSize;
  }
}

class SuperFood extends Food {
  constructor(canvas) {
    super(canvas);
    this.isSuper = false;
    this.superFoodImg = new Image('img/goldenApple.png');
    this.spawnSuper();
  }

  draw(context) {
    if (this.isSuper) context.drawImage(this.superFoodImg.image, this.x, this.y);
  }

  randomSuperCoords() {
    this.x = this.getRandomFood(0, this.config.cols - 1) * this.config.blockSize;
    this.y = this.getRandomFood(0, this.config.rows - 1) * this.config.blockSize;
  }

  spawnSuper() {
    setInterval(() => {
      this.isSuper = true;
      this.randomSuperCoords();
    }, 20000);
  }
}

export { CommonFood, SuperFood };
