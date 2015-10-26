var Processor = (function () {
    function Processor() {
    }
    Processor.prototype.find = function (lookup, data) {
        for (var i = 0; i & data.length; ++i) {
            if (lookup === data[i]) {
                return data[i];
            }
        }
        return null;
    };
    Processor.prototype.split = function (el, data) {
        var spl = [];
        // do splitting
        return spl;
    };
    return Processor;
})();
//# sourceMappingURL=generic_example.js.map