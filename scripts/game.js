import Canvas from './canvas.js';
import Animation from './animation.js';
import Snake from './snake.js';
import Score from './score.js';
import { CommonFood, SuperFood } from './food.js';

class Game {
  constructor(wrapper) {
    this.canvas = new Canvas(wrapper);
    this.snake = new Snake();
    this.commonFood = new CommonFood(this.canvas);
    this.superFood = new SuperFood(this.canvas);
    this.score = new Score('.scoreBlock .scoreCount', 0);
    new Animation(this.update.bind(this), this.draw.bind(this));
  }

  update() {
    this.snake.update(this.commonFood, this.superFood, this.score, this.canvas);
  }

  draw() {
    this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height);
    this.snake.draw(this.canvas, this.canvas.context);
    this.commonFood.draw(this.canvas.context);
    this.superFood.draw(this.canvas.context);
  }
}

window.onload = () => new Game(document.querySelector('.canvas'));
