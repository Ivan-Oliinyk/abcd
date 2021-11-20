var str = "Hello";
console.log(str);
var int = 21;
console.log(int);
int = 78;
console.log(int);
var isFetching = true;
var isLoading = false;
var numberArray = [1, 2, 3, 4, 5, 6];
var numberArray2 = [1, 2, 3, 4, 5, 6, 7];
// numberArray.push("2") //выдаст ошибку при компиляции но всеравно соберет файл
console.log(numberArray);
var words = ['a', 'b', 'c'];
//Tuple массив из разных типов данных
var contact = ['Poly', 123];
console.log(contact);
var box = ['12', true, 21];
box.push(null, 12, Infinity, undefined);
console.log(box);
//Any
var variable = 24;
variable = true;
//====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Ivan');
//Never
function throwError(message) {
    throw new Error(message);
    var i = 1;
}
var id1 = 1234;
var id2 = "1234";
var id3 = 1237;
console.log(id1, id2, id3);
