class Board&lt;T> {
    private board: Array&lt;T> = [];

    constructor(private width: number, private height: number) {
    }

    set(x:number, y:number, value: T): void {
        this.board[y*this.width+x] = value;
    }

    get(x:number,y:number): T {
        return this.board[y*this.width+x];
    }
}
