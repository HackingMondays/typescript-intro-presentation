interface UUID {
    id: string;
    creation?: Date;
}

interface Item extends UUID {
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
