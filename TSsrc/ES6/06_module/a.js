"use strict";
exports.__esModule = true;
var Myclass;
(function (Myclass) {
    Myclass.word = "23asd";
    function sample() {
        console.log("sample in myclass namesapce");
    }
    Myclass.sample = sample;
})(Myclass || (Myclass = {}));
exports["default"] = Myclass;
function keyword() {
    return "keyword function returns message.... - 'Hello world!'";
}
exports.keyword = keyword;
