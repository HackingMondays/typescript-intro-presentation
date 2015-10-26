class Player {
    score:number = 0;

    constructor(public name:string) {
    }

    addScore(points:number) : void {
        this.score += points;
    }
}
var player = new Player("Rodrigo");
player.addScore(1);