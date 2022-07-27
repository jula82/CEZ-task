var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var map = new Map([
    [2, "ABC"],
    [3, "DEF"],
    [4, "GHI"],
    [5, "JKL"],
    [6, "MNO"],
    [7, "PQRS"],
    [8, "TUV"],
    [9, "WXYZ"],
]);
var btn = document.getElementById('btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function handleClick() {
    var wordElement = document.getElementById("word");
    var outputData = document.getElementById("outputData");
    var keysSequence = "";
    if (wordElement !== null && wordElement.value !== null && wordElement.value !== undefined) {
        var arrFromWordElement = __spreadArray([], wordElement.value.toUpperCase(), true);
        arrFromWordElement.forEach(function (char) {
            for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
                var _a = map_1[_i], key = _a[0], value = _a[1];
                if (value.includes(char)) {
                    keysSequence += key.toString().repeat(value.indexOf(char) + 1);
                }
            }
        });
        outputData.innerHTML = keysSequence;
    }
});
