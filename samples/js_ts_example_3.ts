class Board {
    private board = [];
    private width:number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    set(x:number, y:number, value:any): void {
        this.board[y*this.width+x] = value;
    }
    get(x:number, y:number): any {
        return this.board[y*this.width+x];
    }
}
