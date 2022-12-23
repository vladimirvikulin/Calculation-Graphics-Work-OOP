import Config from './config.js';
import Image from './imageCreate.js';


export default class Food {
  constructor(canvas) {
    this.config = new Config();
    this.x;
    this.y;
    this.superX;
    this.superY;
    this.canvas = canvas;
    this.food;
    this.isSuper = false;
    this.foodImg1 = new Image('img/apple.png');
    this.foodImg2 = new Image('img/carrot.png');
    this.foodImg3 = new Image('img/hamburger.png');
    this.foodImg4 = new Image('img/strawberry.png');
    this.foodImg5 = new Image('img/watermelon.png');
    this.superFoodImg = new Image('img/goldenApple.png');
    this.randomCoords();
    this.spawnSuper();
  }

  draw(context) {
    if (this.food === 1) context.drawImage(this.foodImg1.image, this.x, this.y);
    else if (this.food === 2) context.drawImage(this.foodImg2.image, this.x, this.y);
    else if (this.food === 3) context.drawImage(this.foodImg3.image, this.x, this.y);
    else if (this.food === 4) context.drawImage(this.foodImg4.image, this.x, this.y);
    else if (this.food === 5) context.drawImage(this.foodImg5.image, this.x, this.y);
    if (this.isSuper) context.drawImage(this.superFoodImg.image, this.superX, this.superY);
  }

  randomCoords() {
    this.food = Food.getRandomFood(1, 5);
    this.x = Food.getRandomFood(0, this.config.cols - 1) * this.config.blockSize;
    this.y = Food.getRandomFood(0, this.config.rows - 1) * this.config.blockSize;
  }

  randomSuperCoords() {
    this.superX = Food.getRandomFood(0, this.config.cols - 1) * this.config.blockSize;
    this.superY = Food.getRandomFood(0, this.config.rows - 1) * this.config.blockSize;
  }

  spawnSuper() {
    setInterval(() => {
      this.isSuper = true;
      this.randomSuperCoords();
    }, 20000);
  }

  static getRandomFood(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
