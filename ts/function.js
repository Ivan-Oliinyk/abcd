console.log("function.ts");
function getSum(a, b) {
    return a + b;
}
console.log(getSum(2, 4));
function getSumFromStr(a, b) {
    if (typeof a || typeof b !== 'number' || 'string') {
        return false;
    }
    if (Number(a) || Number(b) === NaN) {
        return false;
    }
    return Number(a) + Number(b);
}
console.log(getSumFromStr("3", "s"));
// console.log(getSumFromStr(true, false));
// console.log(true + false);
