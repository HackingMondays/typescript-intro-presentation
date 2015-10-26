@Entity("boards")
class Board&lt;T> {

    @Property({name:"checkerboard", as: ColumnType.CompressedBlob})
    private board: Array&lt;T> = [];

    constructor(private width: number, private height: number) {
    }

    @Logger.OnLeaving('Set value %3 at (%1,%2)')
    set(x:number, y:number, value: T): void {
        this.board[y*this.width+x] = value;
    }

    get(x:number,y:number): T {
        return this.board[y*this.width+x];
    }
}
