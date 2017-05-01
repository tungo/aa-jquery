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

      this.game.playMove([row, col]);
      this.makeMove(cell);
    });
  }

  makeMove($square) {
    $($square).html(this.game.currentPlayer);
    $($square).addClass('white');
  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    for (var i = 0; i < 9; i++) {
      $ul.append($("<li></li>"));
    }
    this.$el.append($ul);
  }

}

module.exports = View;
