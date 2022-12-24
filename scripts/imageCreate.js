export default class ImageCreate {
  constructor(image) {
    this.loaded = false;
    this.image = new Image();
    this.image.addEventListener('load', () => this.loaded = true);
    this.image.src = image;
  }
}
