class Desk {
  constructor(length, width, height, isWhiteboard) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.isWhiteboard = isWhiteboard;
    this.content = '';
  }
  write(inputString) {
    this.content = this.content.concat(inputString);
  }
  wipe() {
    if (this.isWhiteboard === true) {
      this.content = '';
    } else {
      console.log('not a whiteboard');
    }
  }

}

module.exports = Desk
