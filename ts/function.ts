console.log("function.ts");

function getSum(a: number, b: number): number {
  return a + b;
}

console.log(getSum(2, 4));

function getSumFromStr(a: number | string, b: number | string): number | boolean {
  if (typeof a || typeof b !== 'number' || 'string') {
    return false
  }
  
  if (Number(a) || Number(b) === NaN) {
    return false
  }
  
  return Number(a) + Number(b);
 }

console.log(getSumFromStr("3", "s"));
// console.log(getSumFromStr(true, false));
// console.log(true + false);

