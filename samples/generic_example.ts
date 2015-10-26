function find&lt;T>(lookup: T, data: T[]) : T {

    for (var i = 0; i&lt;data.length; ++i) {
        if (lookup === data[i]) {
            return data[i];
        }
    }
    return null;
}
