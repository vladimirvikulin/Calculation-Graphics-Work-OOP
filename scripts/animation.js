import Config from './config.js';

export default class Animation {
  constructor(update, draw) {
    this.config = new Config();
    this.update = update;
    this.draw = draw;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.update();
      this.draw();
    }, this.config.gameSpeed);
  }
}
