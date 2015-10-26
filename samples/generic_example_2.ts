
class Processor&lt;T> {

    find(lookup: T, data: T[]) : T {
        for (var i = 0; i&lt;data.length; ++i) {
            if (lookup === data[i]) {
                return data[i];
            }
        }
        return null;
    }

    split(el: T, data: T[]) : T[] {
        var spl = [];
        // do splitting
        return spl;
    }
}
