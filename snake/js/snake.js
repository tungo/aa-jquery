class Snake {
  constructor() {
    this.direction = 'N';
    this.segments = [[10,10]];
  }

  move() {

  }

  turn(dir) {
    this.direction = dir;
  }
}

module.exports = Snake;
