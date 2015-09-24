//// [es6-umd2.ts]

export class A
{
    constructor ()
    {

    }

    public B()
    {
        return 42;
    }
}

//// [es6-umd2.js]
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    class A {
        constructor() {
        }
        B() {
            return 42;
        }
    }
    exports.A = A;
});
