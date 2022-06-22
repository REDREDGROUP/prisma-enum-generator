"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstUpper = exports.firstLower = void 0;
var firstLower = function (s) {
    return s.replace(/(^\w{1})|(\s+\w{1})/g, function (letter) { return letter.toLowerCase(); });
};
exports.firstLower = firstLower;
var firstUpper = function (s) {
    var firstChar = s[0];
    var firstCharUpper = firstChar.toUpperCase();
    var leftChar = s.slice(1, s.length);
    return firstCharUpper + leftChar.toLowerCase();
};
exports.firstUpper = firstUpper;
//# sourceMappingURL=tools.js.map