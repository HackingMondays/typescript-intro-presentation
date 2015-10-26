var callback: (err:Error, data: string) => boolean;

var foo = (err:Error, data: string) => {
    return (err || !data) ? false : true;
};

callback = foo;

class Processor {
    iterate(callback: (data:number) => boolean) {
        return [1,2,3].filter(callback);
    }
}