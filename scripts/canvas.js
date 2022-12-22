import Config from './config.js';

export default class Canvas {
  constructor(wrapper) {
    this.config = new Config();
    this.element = document.createElement('canvas');
    this.context = this.element.getContext('2d');
    this.element.width = this.config.cols * this.config.blockSize;
    this.element.height = this.config.rows * this.config.blockSize;
    wrapper.appendChild(this.element);
  }
}
