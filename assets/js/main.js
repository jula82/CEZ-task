"use strict";
let map = new Map([
    [2, "ABC"],
    [3, "DEF"],
    [4, "GHI"],
    [5, "JKL"],
    [6, "MNO"],
    [7, "PQRS"],
    [8, "TUV"],
    [9, "WXYZ"],
]);
const btn = document.getElementById('btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function handleClick() {
    const wordElement = document.getElementById("word");
    const outputData = document.getElementById("outputData");
    let keysSequence = "";
    if (wordElement !== null && wordElement.value !== null && wordElement.value !== undefined) {
        const arrFromWordElement = [...wordElement.value.toUpperCase()];
        arrFromWordElement.forEach((char) => {
            for (let [key, value] of map) {
                if (value.includes(char)) {
                    keysSequence += key.toString().repeat(value.indexOf(char) + 1);
                }
            }
        });
        outputData.innerHTML = keysSequence;
    }
});
