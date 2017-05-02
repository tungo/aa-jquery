const Snake = require('./snake.js');
const Coord = require('./coord.js');
const Board = require('./board.js');
const SnakeView = require('./snake-view.js');

$(() => {
  let snake = new Snake();
  let $el = $(".snake");
  let snakeview = new SnakeView(snake,$el);
});
