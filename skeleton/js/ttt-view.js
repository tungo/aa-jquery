class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    $('ul li').on('click', (event) => {
      const cell = event.target;
      let idx;

      $("ul li").each ( (i, ele) => {
        if (cell === ele) {
          idx = i;
        }
      });

      let col = Math.floor(idx / 3);
      let row = idx % 3;

      try {
        this.game.playMove([row, col]);
      } catch (e) {
          return alert(e.msg);
        }
      this.makeMove(cell, event);
    });
  }

  makeMove($square, event) {
    $($square).html(this.game.currentPlayer);
    $($square).addClass('white');
    $($square).addClass(this.game.currentPlayer);

    if (this.game.isOver()) {
      if (this.game.winner()) {
        $('body').append($("<div>You win, " + this.game.currentPlayer + "</div>"));
        $('ul li').addClass('loser');
        $('.'+this.game.currentPlayer).addClass('winner');
      } else {
        $('body').append($("<div>Game is a draw</div>"));
        $('ul li').addClass('loser');
      }
      $('ul li').off('click');
      $('ul li').removeClass('player');

    }
  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    for (var i = 0; i < 9; i++) {
      $ul.append($("<li class='player'></li>"));
    }
    this.$el.append($ul);
  }

}

module.exports = View;
