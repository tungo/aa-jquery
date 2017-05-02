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
