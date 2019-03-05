"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = function (originalConstructor) {
    function newConstructor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Arguments: ", args.join(", "));
        new originalConstructor(args);
    }
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
};
