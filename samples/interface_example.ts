interface Item {
    id: string;
    value: number;
    name?:string;
}

class Container {
    items: Item[] = [];

    add(item:Item) {
        this.items.push(item);
    }
}

var cont = new Container();
cont.add({id:"AAA", value: 100, name: "Item A"}); // ok
cont.add({id:"BBB", value: 79});                  // ok

cont.add({id:"CCC"});  // KO
cont.add("DDD");  // KO

