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
//# sourceMappingURL=interface_example_2.js.map