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
  }
}
