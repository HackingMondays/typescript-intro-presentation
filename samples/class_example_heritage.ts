class Sprite {
    constructor(public x: number, public y: number) {}
    debug() {
        console.log("I am at " + this.x + "," + this.y);
    }
}

class Player extends Sprite {
    constructor(public name:string) {
        super(0,0);
    }
}

var player = new Player("Rodrigo");
player.debug();