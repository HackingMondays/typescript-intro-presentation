function Board(width: number, height: number) {
    this.board = [];
    this.width = width;
    this.height = height;
}

Board.prototype.set = function(x:number, y:number, value:any): void {
    this.board[y*this.width+x] = value;
};

Board.prototype.get = function(x:number, y:number): any {
    return this.board[y*this.width+x];
};
