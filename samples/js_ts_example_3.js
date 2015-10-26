var Board = (function () {
    function Board(width, height) {
        this.board = [];
        this.width = width;
        this.height = height;
    }
    Board.prototype.set = function (x, y, value) {
        this.board[y * this.width + x] = value;
    };
    Board.prototype.get = function (x, y) {
        return this.board[y * this.width + x];
    };
    return Board;
})();
//# sourceMappingURL=js_ts_example_3.js.map