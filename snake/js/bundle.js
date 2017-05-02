/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Snake = __webpack_require__(4);
const Coord = __webpack_require__(2);
const Board = __webpack_require__(1);
const SnakeView = __webpack_require__(3);

$(() => {
  let snake = new Snake();
  let $el = $(".snake");
  let snakeview = new SnakeView(snake,$el);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Board {
  constructor(snake) {
    this.snake = snake;
    this.grid = [];
  }


}


/***/ }),
/* 2 */
/***/ (function(module, exports) {


class Coord {
  constructor() {

  }

  plus() {

  }

  equals() {

  }

  isOpposite() {

  }
}

module.exports = Coord;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class SnakeView {
  constructor(game,$el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.move();
  }

  setupBoard() {
    console.log("asdf");
    for (var i = 0; i < 20; i++) {
      let $ul = $("<ul></ul>");
      for (var j = 0; j < 20; j++) {
        $ul.append($("<li></li>"));
      }
      this.$el.append($ul);
    }
    $("ul:nth-child("+ this.game.segments[0][0] + ") li:nth-child(" + this.game.segments[0][1] + ")").addClass("green");

  }

  move() {
    $(document).on("keydown", event => {
      console.log(event.keyCode);
      switch (event.keyCode) {
        case 40:
          let pos = [this.game.segments[this.game.segments.length-1][0], this.game.segments[this.game.segments.length-1][1] + 1];
          $("ul:nth-child("+ pos[0] + ") li:nth-child(" + pos[1] + ")").addClass("green");
          this.game.segments.push(pos);
          let old_pos = this.game.segments.shift();
          $("ul:nth-child("+ old_pos[0] + ") li:nth-child(" + old_pos[1] + ")").removeClass("green");
          break;
        case 37:
          let leftpos = [this.game.segments[this.game.segments.length-1][0]-1, this.game.segments[this.game.segments.length-1][1] ];
          $("ul:nth-child("+ leftpos[0] + ") li:nth-child(" + leftpos[1] + ")").addClass("green");
          this.game.segments.push(leftpos);
          let left_old_pos = this.game.segments.shift();
          $("ul:nth-child("+ left_old_pos[0] + ") li:nth-child(" + left_old_pos[1] + ")").removeClass("green");
          break;
        case 39:
          let right = [this.game.segments[this.game.segments.length-1][0]+1, this.game.segments[this.game.segments.length-1][1] ];
          $("ul:nth-child("+ right[0] + ") li:nth-child(" + right[1] + ")").addClass("green");
          this.game.segments.push(right);
          let right_pos = this.game.segments.shift();
          $("ul:nth-child("+ right_pos[0] + ") li:nth-child(" + right_pos[1] + ")").removeClass("green");
          break;
        case 38:
          let up = [this.game.segments[this.game.segments.length-1][0], this.game.segments[this.game.segments.length-1][1]-1 ];
          $("ul:nth-child("+ up[0] + ") li:nth-child(" + up[1] + ")").addClass("green");
          this.game.segments.push(up);
          let up_pos = this.game.segments.shift();
          $("ul:nth-child("+ up_pos[0] + ") li:nth-child(" + up_pos[1] + ")").removeClass("green");
          break;

      }
    });
  }

}

module.exports = SnakeView;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);