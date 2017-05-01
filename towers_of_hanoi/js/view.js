class HanoiView {
  constructor(game,$el) {
    this.game = game;
    this.$el = $el;
    this.firstTower = false;
    this.setupBoard();
    this.clickTower();
  }

  setupBoard() {
    // for (let i = 0; i < 3; i++) {
    //   this.$el.append($("<ul class='tower' id='t" + i + "'></ul>"));
    // }
    // for (var i = 0; i < 3; i++) {
    //   $(".tower").first().append($("<li class='disk' id='d" + i + "'></li>"));
    // }
    this.render();
  }

  render () {
    this.$el.html("");

    for (var i = 0; i < this.game.towers.length; i++) {
      this.$el.append($("<ul class='tower' id='t" + i + "' data-id='" + i + "'></ul>"));
      let count = 0;
      for (var j = 0; j < this.game.towers[i].length; j++) {
        $(".tower#t"+i).prepend($("<li class='disk' id='d" + this.game.towers[i][j] + "'></li>"));
        count += 1;
      }
      for (var k = 0; k < 3-count; k++) {
        $(".tower#t"+i).prepend($("<li class='empty'></li>"));
      }
    }
  }

  clickTower() {
    $('.hanoi').on('click', 'ul', (event) => {
      const $tower = $(event.currentTarget);

      if (this.firstTower !== false) {
        if (this.game.isValidMove(this.firstTower, $tower.data('id'))) {
          this.game.move(this.firstTower, $tower.data('id'));
        } else {
          alert("Invalid move");
        }
        this.firstTower = false;
      } else {
        this.firstTower = $tower.data('id');
      }
      this.render();
      if (this.firstTower !== false) {
        console.log($("#t" + this.firstTower));
        $("#t" + this.firstTower).addClass("red");
      }
      if (this.game.isWon()) {
        $(".disk").addClass("green");
        $('.hanoi').off('click');
        alert("You have won the game!");
      }
    });
  }

}

module.exports = HanoiView;
