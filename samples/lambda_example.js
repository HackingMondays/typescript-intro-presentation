var callback;
var foo = function (err, data) {
    return (err || !data) ? false : true;
};
callback = foo;
var Processor = (function () {
    function Processor() {
    }
    Processor.prototype.iterate = function (callback) {
        return [1, 2, 3].filter(callback);
    };
    return Processor;
})();
//# sourceMappingURL=lambda_example.js.map