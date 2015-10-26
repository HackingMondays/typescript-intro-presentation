var Player = (function () {
    function Player(name) {
        this.name = name;
        this.score = 0;
    }
    Player.prototype.addScore = function (points) {
        this.score += points;
    };
    return Player;
})();
var player = new Player("Rodrigo");
player.addScore(1);
//# sourceMappingURL=class_example.js.map