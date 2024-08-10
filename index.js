"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function calculateJaccardSimilarity(text1, text2) {
    var set1 = new Set(text1.split(" "));
    var set2 = new Set(text2.split(" "));
    var intersection = new Set(__spreadArray([], set1, true).filter(function (x) { return set2.has(x); }));
    var union = new Set(__spreadArray(__spreadArray([], set1, true), set2, true));
    return intersection.size / union.size;
}
function findBestMatch(X, y, inputText) {
    var maxSimilarity = -1;
    var bestMatch = "";
    for (var i = 0; i < X.length; i++) {
        var similarity = calculateJaccardSimilarity(X[i], inputText);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatch = y[i];
        }
    }
    return bestMatch;
}
// module.exports = findBestMatch;
exports.default = findBestMatch;
