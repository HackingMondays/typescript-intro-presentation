var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sprite = (function () {
    function Sprite(x, y) {
        this.x = x;
        this.y = y;
    }
    Sprite.prototype.debug = function () {
        console.log("I am at " + this.x + "," + this.y);
    };
    return Sprite;
})();
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(name) {
        _super.call(this, 0, 0);
        this.name = name;
    }
    return Player;
})(Sprite);
var player = new Player("Rodrigo");
player.debug();
//# sourceMappingURL=class_example_heritage.js.map