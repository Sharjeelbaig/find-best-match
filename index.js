var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function calculateJaccardSimilarity(text1, text2) {
    var set1 = new Set(text1.split(" "));
    var set2 = new Set(text2.split(" "));
    var intersection = new Set(__spreadArray([], __read(set1), false).filter(function (x) { return set2.has(x); }));
    var union = new Set(__spreadArray(__spreadArray([], __read(set1), false), __read(set2), false));
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
module.exports = findBestMatch;
