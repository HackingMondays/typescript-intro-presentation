var Container = (function () {
    function Container() {
        this.items = [];
    }
    Container.prototype.add = function (item) {
        this.items.push(item);
    };
    return Container;
})();
var cont = new Container();
cont.add({ id: "AAA", value: 100, name: "Item A" }); // ok
cont.add({ id: "BBB", value: 79 }); // ok
cont.add({ id: "CCC" }); // KO
cont.add("DDD"); // KO
//# sourceMappingURL=interface_example.js.map