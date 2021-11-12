// // console.log("typeof null => ", typeof null)
// // console.log("typeof undefined => ", typeof undefined)
// // let elem;
// // console.log(elem);
// // elem = document.getElementById("dsdd")
// // console.log(elem);
// // elem = document.querySelector("dsdd")
// // console.log(elem);

// // console.log(typeof NAN)
// // console.log(typeof infinity)
// // let str = "Hellow"

// // str.test = 5

// // console.log(str.test)

// // console.log(isNaN([]))
// // console.log(Number([]))
// // console.log(isNaN({}))
// // console.log(Number({}))

// // let str = "Яблоки были сочные, потомучнто яблоки"

// // console.log(str.replace('яблоки', 'груши'));

// // console.log( Math.round(Math.random() * (16 - 11)) + 11)

// // const arr = [11, 1, 2, 21, 3, 5, 7, 8]
// // const compareNumber = (a, b) => a - b
// // const compareNumberRevers = (a, b) => b - a
// // console.log(arr.sort()); // [1, 11, 2, 21, 3, 5, 7, 8]
// // console.log(arr.sort(compareNumber)); // [1, 2, 3, 5, 7, 8, 11, 21]
// // console.log(arr.sort(compareNumberRevers)); // [21, 11, 8, 7, 5, 3, 2, 1]

// // console.log(arr.every(e => e > 0))
// // console.log(arr.every(e => e > 1))

// // console.log(arr.filter(elem => elem > 10))

// // console.log(arr.map(elem => elem * elem));

// // const str = "Ivan Dima Tom Den"

// // console.log(str.split(' ').sort().reverse());
// // console.log(str.split(' ').sort().reverse().find(elem => elem === "Dima"));

// // console.log(str.match("Dima"))

// // const arr = [11, 1, 2, 21, 3, 5, 7, 8]

// // // // let sumArr = arr.reduce(function(sum, current){
// // // //   return sum + current
// // // // }, 0)

// // let sum = arr.reduce((acc, item) => {
// //   return acc + item
// // }, 0)

// // console.log(sum)

// // console.log(Math.max(...arr));

// // console.log(Math.PI.toPrecision(30));
// // console.log(String(Math.PI.toPrecision(30)).slice(18, 19));

// // const a = [1, 2, 3, 4, 5, 6]
// // const b = [11, 22, 33, 44, 55]
// // const c = a.slice(0, (a.length -1 )/ 2).concat(b, a.slice((a.length - 1) / 2))
// // console.log(c);

// const a = [1, 11, 2 , 21, 0, 111]
// // console.log(a)
// // console.log("a.sort() =>", a.sort())
// // console.log("a.sort((a, b) => a - b) =>", a.sort((a, b) => a - b))
// const b = []

// a.forEach((item, index ) => {
//   if (index % 2) {
//     b.push(item * item)
//   } else {
//     b.push(item)
//   }
// })

// console.log(b);

// const a = [4,1, 2, 3]

// // a.sort(e => e > 2)

// // console.log(a);
// // console.log(a.sort(e => e > 2));

// console.log(a)

// let b = a.slice().sort()
// let c = a.sort()

// console.log(a)
// console.log(b)
// console.log(c);

// console.log("sdds");

// const arr = [1, 2, 3]
// arr.length = 0

// console.log(arr)

// let str = "Бля ебаный V8"
// let math = ["бля", "ебаный"]

// // arr.filter((el, i)=> {
// //   if ( el[i] !== 'бля' || el[i] !== 'пиздец')
// // })

// str.split(" ").filter(elem => {
//   !math.includes(elem.toLowerCase()).join('')
// })


// console.log(str)
// console.log(arr)

// let str = "dawws dwaeqw9"
// console.log(str[str.indexOf('a')])

// function computed(str) {    
//   // Suppose the calculation in the funtion is very time consuming        
//   console.log('2000s have passed')
    
//   // Suppose it is the result of the function
//   return 'a result'
// }

// computed()

// console.log(this)




// console.log(arr.at(3));
// console.log(arr.at(-2));

// let newArr = arr.copyWithin(0, 2, 3)
// console.log(newArr)

// const arr = [5, 12, 8, 130, 44, 23, 66, 89, 41]
// let newArr = arr.entries()
// console.log(newArr)
// console.log(newArr.next().value) //[0, 5]
// console.log(newArr.next().value) //[1, 12]
// console.log(newArr.next().value) //[2, 8]
// console.log(newArr.next().value) //[3, 130]
// console.log(newArr.next().value) //[4, 44]
// console.log(newArr.next().value) //[5, 23]
// console.log(newArr.next().value) //[6, 66]
// console.log(newArr.next().value) //[7, 89]
// console.log(newArr.next().value) //[8, 41]
// console.log(newArr.next().value) //undefined

// let arr = [11, 11, 11, 11, 11, 11, 11]
// console.log(arr.fill(6, 1, 2))

// const arr = [5, 12, 8, 130, 44, 23, 66, 89, 41]

// console.log(arr.find(el => !(el % 6)))



// Есть массив строк
// ['type.subtype.prop_one', 'type.subtype.prop_two', 'type.subtype2.prop_three', 'type2.prop_one', 'type2.prop_two', 'type2.prop_three', 'type3.subtype.{...n}.prop_one']
// - где ...n несколько "уровней вложенности"

// Суть задачи преобразовать этот массив - в объект 

// {
//     type: {
//         subtype: ['prop_one', 'prop_two' ...],
//         subtype2: ['prop_three']
//     },
//     type2: ['prop_one', ...],
//     type3: {
//         subtype{...}
//     }
// }

// let array1 = [
//   ['type', 'subtype', 'prop_one'],
//   ['type', 'subtype', 'prop_two'],
//   ['type', 'subtype2', 'prop_three'],
//   ['type2', 'prop_one'],
//   ['type2', 'prop_two'],
//   ['type2', 'prop_three'],
//   ['type3', 'subtype', 'prop_one']
// ]


// const arr = ['type.subtype.prop_one', 'type.subtype.prop_two', 'type.subtype2.prop_three', 'type2.prop_one', 'type2.prop_two', 'type2.prop_three', 'type3.subtype.prop_one']

// const splitArr = arr.reduce((array, elem) => {
//     array.push(elem.split('.'))

//     return array
// }, [])



// console.log(splitArr)

// function arrayToObject(arr) {
  
//   return Array.isArray(arr) 
//     ? arr.reduce ((obj, el) => (el && (obj[el[0]] = arrayToObject(el[1])), obj),
//       {}
//     )
//     : arr;
  
// }

// console.log(arrayToObject(splitArr));

// const number = [1, 2, 3, 4, 6, 8, 99]

// number.sort(function(a, b){
//   return b - a
// })

// console.log(number)

// const str = '0123456789'

// console.log("substring ->", str.substring(9, -2));
// console.log("slice ->", str.slice(-5, -3));  
// console.log(str.substring(11))
// console.log(str.slice(11))

// console.log(Boolean([]));
// console.log(Boolean({}));

// const Constructor = function() {
  
// }


// let counter = 0

// function makeCount (num) {
//   // console.log(num)
  
//   if (num === 10) {
//     return num
//   } else {
//     return makeCount(num + 1)
//   }
// }

// console.log(makeCount(counter))

// const numbers = [1, 5, 2, 4, 5, 11, 77, 98, 100, 23]
// const numbers1 = [1, 5, 2, 4, 5, 11, 77, 98, 100, 23, [1, 5,[1, 5], [1, 5, [1, 5]]]]
// console.log(numbers.every(el => el))
// console.log(numbers.some(el => !(el % 11)))
// console.log(numbers.find(el => el % 11 === 0))
// console.log(numbers1.flat(Infinity))
// console.log(numbers.keys())
// console.log(numbers1.toString())
// console.log(numbers.toLocaleString());
// console.log(Math.round(Math.random() * (15 - 10) + 10))
// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))

//////////////////////////////////////////////////////////////////
// const arr = [2, 4, 0, 100, 4, 11, 2602, 36]
// console.log(arr.find(el => el % 2));

// const arr1 = [160, 3, 1719, 19, 11, 13, -21]
// console.log(arr1.find(el => !(el % 2)));

// Написать функцию persistence, которая будет возвращать число, 
// которое соответствует количеству деления числа на свои элементы, 
// пока не останется только одно число

// persistence(39) === 3, потому что 3*9 = 27, 2*7 = 14, 1*4=4
// persistence(999) === 4, потому что 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12,  1*2 = 2


// function persistence(num) {
//   let count = 0
//   let numStr = num.toString()

//   while(numStr.length !== 1) {
//     numStr = numStr.split("").map(Number).reduce((sum, el) => sum *= el, 1).toString()
//     count += 1
//   }

//   return count
// }

// console.log(persistence(39))
// console.log(persistence(0))
// console.log(persistence(999)


// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// // Функция maxSequence(arr) должна возвращать эту сумму.
// const arr55 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// должно быть 6: [4, -1, 2, 1]

// const maxSequence = arr => arr.reduce((sum, el, i, arr) => sum + el , 0)

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// 1) Дано матрицу размером 3x3 
// [1,2,3]
// [4,5,6]
// [7,8,9]
// Ваша задача перевернуть матрицу. Пример:
// [9,8,7]
// [6,5,4]
// [3,2,1]
// * Решить в одну строку.

// const arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]

// console.log(arr.map(el => el.reverse()).reverse())

////////////////////////////////////////////////////////////////////////////////////////////////////

// Ваша задача - написать функцию, которая заменяет все символы, кроме последних четырех, на "#".
//  maskify("4556364607935616") == "############5616"
//  maskify(     "64607935616") ==      "#######5616"
//  maskify(               "1") ==                "1"
//  maskify(                "") ==                 ""

// const maskify = str => str.split("").map((el) => el = "#" ).join('').slice(0, -4) + str.slice(-4)

// console.log(maskify("64607935616"));
// console.log(maskify("1"));
// console.log(maskify(""));
// console.log(maskify("4556364607935616"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию, которая принимает перетасованный список уникальных чисел от 1 до n с отсутствующим одним элементом (который может быть любым числом, включая n). Верните этот недостающий номер.

// console.log(findNumber([1,3,4,5,6,7,8])) //2
// console.log(findNumber([7,8,1,2,4,5,6])) //3
// console.log(findNumber([1,2,3,5])) //4

// const findNumber = arr => arr.sort().find((el, i) => el !== i + 1 ) - 1
// // const findNumber = (arr) =>  arr.sort((a , b) => a - b).reduce((prev, curr, index, array) => (curr === index + array[0]) ? prev : index + array[0]++ , 0)

// console.log(findNumber([1,3,4,5,6,7,8]))
// console.log(findNumber([7,8,1,2,4,5,6]))
// console.log(findNumber([1,2,3,5]))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Написать функцию которая принимает в аргумменты ряди и строки и создать матрицу по этим параметрам. Пример
// const matrix = (row, colum) 

// const matrix = ( row, col) => [...Array(row)].map((el, i) => [...Array(col)].map((el, j) => (i + 1) * (j + 1)))
// console.log(matrix(3, 4))

///////////////////////////////////////////////////////////////////////////////////////////
// Учитывая целое число, определите, квадратное ли это число:

// const isSqure = num => typeof num !== 'number' 
//   ? false 
//   : Math.sqrt(num) === Number(Math.sqrt(num).toFixed())

// console.log(isSqure(4))
// console.log(isSqure(26))

// const isSquare2 = (n) => {
//   return Math.sqrt(n) % 1 === 0;
// }

// console.log(isSquare2(4))
// console.log(isSquare2(26))

///////////////////////////////////////////////////////////////////////////////////////////////
// . Напишите функцию, toCase которая принимает строку и 
// //возвращает ее в нижнем и верхнем регистре с ' - ' разделителем в качестве.
// //Пример: toCase('Mthatha')должен вернуться 'mthatha-MTHATHA'.

// const toCase = str => str.toLowerCase() + "-" + str.toUpperCase()
// console.log(toCase("Mthatha"))

/////////////////////////////////////////////////////////////////////////////////////
// пин код может состоять с 4 или 6 целых цифр(никаких символов типа .,\/*-+?:%;№""!()), 
//написать функцию которая будет валидировать введенный пин. 
//функция должна вернуть true or false
    
// const validatePIN = str =>  str.length !== 4 && str.length !== 6 
//   ? false 
//   : str.length !== String(Number(str).toFixed()).length ? false 
//     : Number(str) < 0 ? false : true


// console.log(validatePIN("1234"))
// console.log(validatePIN("123456"))
// console.log(validatePIN("1"))
// console.log(validatePIN("12"))
// console.log(validatePIN("1234.0"))
// console.log(validatePIN("12345"))
// console.log(validatePIN("12-457"))
// console.log(validatePIN("-1234"))
// console.log(validatePIN("1.234"))
// console.log(validatePIN("-2.234"))
// console.log(validatePIN("00000000"))

////////////////////////////////////////////////////////////////////////////////////
// Проверка URL на валидность. Передаем урл функции и проверяем 
//валидное оно или нет (возращаем тру или фолс). 
//Критерии: Урл должен начинаться с http:// иили 
//https:// и заканчиваться на .php или .html. 
//Например - http://site.ru/index.php - валидный,
// http://site.com - не валидный, 
//site.ru/index.php - не валидный


// const isValidate = str => {
//   if ((str.indexOf('https://') === 0 || str.indexOf('http://') === 0) && (str.slice(-'.php'.length) === '.php' || str.slice(-'.html'.length) === '.html')) {
//     return "валидный"
//   }

//   return "не валидный"
// }

// const isValidate = str => ((str.indexOf('http://') === 0 || str.indexOf('http://') === 0) 
//   && (str.slice(-'.php'.length) === '.php' || str.slice(-'.html'.length) === '.html')) 
//   ? "валидный"
//   : "не валидный"
    
// console.log(isValidate('http://site.ru/index.php'))
// console.log(isValidate('http://site.com'))
// console.log(isValidate('site.ru/index.php'))
// console.log(isValidate('site.http.ru/index.php'))

////////////////////////////////////////////////////////////////////////////////////////

// const toInt = arr => Number.parseInt(arr.join(''), 2)
// console.log(toInt([1, 0, 0, 1]))
// console.log(toInt([0, 0, 1, 1]))
// console.log(toInt([0, 0, 0, 1]))

////////////////////////////////////////////////////////////////////////////////////
// Реализуйте функцию union(), которая объединит уникальные s
//элементы всех массивов, переданных ей. Пример использования: 
//union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) 
//Результат выполнения: [1, 2, 3, 101, 10].

//const union = (...arg) => [...arg].flat(1).filter((el, i, arr) => arr.indexOf(el) === i) 

// const union = (...arg) => [...new Set([...arg].flat(Infinity))]

// console.log(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]));

//////////////////////////////////////////////////////////////////////////////////////////
// Написать функцию, которая принимает 2 строки со знаками:
// ! - вес 2
// ? - вес 3
// Нужно сравнить вес этих строк.

// const f = (a, b) => {
//   const left = a.split('').reduce((sum, el) => el === "!" ? sum += 2 : sum += 3 ,0)
//   const right = b.split('').reduce((sum, el) => el === "!" ? sum += 2 : sum += 3 ,0)
  
//   return left === right ? "ROUND" : left > right ? "LEFT" : "RIGHT"
// }
  

// console.log( f('!!', '??') ) // right
// console.log( f('!!!', '??') ) // round
// console.log( f('!??', '?!!') ) // left

/////////////////////////////////////////////////////////////////////////////////////////////


// const str = "123.012ssd"
// const num = 55

// console.log(parseInt(str));
// console.log(parseFloat(str));
// console.log(num.toLocaleString('ar-EG'));
// console.log(num.toLocaleString('ru-Ru'));
// console.log(num.toLocaleString('zh-Hans-CN-u-nu-hanidec'));

// for (let i = 0; i < str.length; i ++) {
//   console.log(str[i]);
// }

// String.prototype.splite2 = function(start, end) {
//  let res = []
// }

/////////////////////////////////////////////

// Array.prototype.reduce1 = function (cb, initial) {
//   let res = initial

//   for (let i = 0; i < this.length; i += 1) {
//     // res = cb.call(null, (res, this[i], i, this))

//     res = cb(res, this[i], i, this)
//     // return res
//   }

//   return res
// }

// console.log([1,2,3].reduce1((sum, el, i, arr) => sum += el, 0));


////////////////////////////////////////////////////////////////

// console.log(['s', 'o', 'r', 'r', 'y'].join("+"));

// Array.prototype.join1 = function(sep) {
//   // return this.reduce((res, el) => res += el + sep, "").slice(0, -sep.length) 
//   return this.reduce((prev, item) => item === this[this.length - 1] ? prev += item : prev += item + sep, '')
// }


// console.log(['s', 'o', 'r', 'r', 'y'].join1("+"));
// console.log(['s', 'o', 'r', 'r', 'y'].join1("+?+"));

/////////////////////////////////////////////////////////////////
/*
function a(cb){
  console.log(this)
   return cb
 }
 
 function b( cb){
  console.log(this)
   return cb
 }
 
 function c(cb){
  console.log(this)
   return cb
 }
 
 function d(cb){
  console.log(this)
   return cb
 }
 
 
 function runner(args){
 
 let aContext = this.a
 let bContext = this.b
 let cContext = this.c
 let dContext = this.d
 
 return a.bind(aContext, b.bind(bContext, c.bind(cContext, d.bind(dContext))))
 
 }
  
 runner(1)(2)(3)(4)(5)
*/

//////////////////////////////////////////////////////////////////////////////////

// function A(){
//   this.x = 0
// }

// A.prototype.add = function(num) {
//   this.x += num
//   return this
// }

// A.prototype.res = function() {
//   return this.x
// }

// A.prototype.minus = function(value) {
//   this.x -= value
//   return this
// }

// console.log((new A).add(1).add(2).minus(4).res());

//////////////////////////////////////////////////////////////////////////////////////

// String.prototype.charAt1 = function(idx) {
//   return this[idx]
// }

// console.log('1234'.charAt1(2));

// JavaScript Sequential Search Algorithm Example******************************************

// const DOES_NOT_EXIST = -1;

// function sequentialSearch(array, value, equalsFn = defaultEquals) {
//   for (let i = 0; i < array.length; i++) {
//     if (equalsFn(value, array[i])) {
//       return i;
//     }
//   }
//   return DOES_NOT_EXIST;
// }

// function defaultEquals(a, b) {
//   return a === b;
// }


// function sequentialSearch(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (value === array[i]) {
//       return i;
//     }
//   }
//   return -1
// }

// let array = [2,1,5,4,3,8,7,6];
// let value = 2;
// let index = sequentialSearch(array, value);
// console.log(`indexOf "${value}"" in array ${array} is "${index}"`);


////////////////////////////////////////////////////////////////
// JavaScript Merge Sort Algorithm Example****************************************
// function merge(left, right, compareFn) {
//   let i = 0;
//   let j = 0;
//   const result = [];
//   while (i < left.length && j < right.length) {
//     result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
//   }
//   return result.concat(i < left.length ? left.slice(i) : right.slice(j));
// }

// function mergeSort(array, compareFn = defaultCompare) {
//   if (array.length > 1) {
//     const { length } = array;
//     const middle = Math.floor(length / 2);
//     const left = mergeSort(array.slice(0, middle), compareFn);
//     const right = mergeSort(array.slice(middle, length), compareFn);
//     array = merge(left, right, compareFn);
//   }
//   return array;
// }
// const Compare = {
//   LESS_THAN: -1,
//   BIGGER_THAN: 1,
//   EQUALS: 0
// };
// function defaultCompare(a, b) {
//   if (a === b) {
//     return Compare.EQUALS;
//   }
//   return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }
// let array = [2,1,5,4,3,8,7,6];
// array = mergeSort(array);
// console.log(array);

// console.log(  parseFloat('sdda11223'));
// console.log(  parseFloat('123sdda11223'));
// console.log(  parseFloat('123.1254sdda11223'));
  // console.log('object');

//   const str = 'Ехал Грека через реку'

//   console.log(str.replace('Грека', "Sara"));
//   console.log(str);

//   console.log(str.search('Грека'));
//  console.log(str.match('Грека'));

// console.log(parseFloat('23.57px'));
// console.log(parseInt('23.57px'));

// const obj = {
//   name: 'Ivan',
//   age: 30,
//   haveCar: true
// }

// const obj2 = Object.assign({}, obj)

// console.log(obj2)
// console.log(obj)
// console.log(obj2 === obj)

// const obj1 = obj
// console.log(obj1 === obj)

// const obj3 = Object.create(obj, {})
// console.log(obj3);

// const obj = { 0: 'a', 1: 'b', 2: 'c' };

// console.log(Object.getOwnPropertyNames(obj));
// Object.getOwnPropertyNames(obj).forEach((el) => console.log(`${el}: ${obj[el]}`))

// console.log(Object.getPrototypeOf(obj));

// const obj1 = Object.create(obj)

// console.log(Object.getPrototypeOf(obj1) === obj);

// const o = new Object()

// o.prop = "yes"

// console.log(o.hasOwnProperty("prop"));

// delete o.prop
// console.log(o)

// console.log(o.hasOwnProperty("prop"))

// console.log(null === null);
// console.log(Object.is(null, undefined));
// console.log(0 === -0);
// console.log(Object.is(0, -0));

// console.log(Object.keys(obj));
// console.log(Object.keys(obj1));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// Object.entries(obj).forEach(el => console.log(`${el[0]} => ${el[1]}`));

// String.prototype.lastIndexOf1 = function (value, start = 0) {
//   let res = -1

//   for(let i = this.length-1; i >= start; i -= 1 ) {
//     if (value === this[i]) {
//       return res = i
//     }
//   }

//   return res
// }

// console.log('aefedwe'.lastIndexOf1("e"));

// String.prototype.trim1 = function() {
//   let res = ''

//   for(let i = 0; i < this.length; i += 1) {
//     if (this[i] + this[i+1] !== "  " && this[i] + this[i-1] !== "  ") {
//       res += this[i]
//     }
//   }

//   return res

//   // return this.split('  ').join('')
// } 

// console.log('s2  2wq3   3d1 14    4s5     5s'.trim1());

// Array.prototype.reduce1 = function ()

// const arr = [0, "2", "Sasha", 3, "6", 8, 'Vasia', 91, null, undefined]
// console.log(arr.find(el => el === 'Vasia'));

// console.log(arr.filter(el => typeof el === 'string' && isNaN(el)).join('').match("Vasia")[0]);

// const arr = [
//   {xLt: 0, yLt: 0, xLb: 10, yLb: 10, xRt: 10, yRt: 0, xRb: 10, yRb: 10}
// ]

// function square (arr) {
//   return (arr[0]["xRt"] - arr[0]["xLt"]) * (arr[0]["yLb"] - arr[0]["yLt"])
// }

// console.log(square(arr))

// console.log(Object.entries(arr[0]));

// const arr = [[1,2,3], 5, {}, ['a', 'b'], 5, 6]

// Array.prototype.myFind = function (value) {
//   return this.flat(Infinity).filter(el => el === value)
// }

// console.log(arr.myFind(5));

// const matrix = [
//   [1,2,3,4,5],
//   [7,8,3,9,5],
//   [8,7,6,4,5],
//   [9,2,6,4,5],
//   [1,2,3,6,5]
// ]

// function sortMatrix(arr) {
//   const newMatrix = []
//   let iter = []

  // return arr.flat(1).sort((a, b) => a -b).reduce((sum, el, i, arr) => el !== arr[i+1]  , [])

//   const t = arr.flat(1).sort((a, b) => a -b)
  
//   console.log(t);

//   for (let i = 0; i < t.length; i += 1) {
//     if (t[i] === t[i - 1] || t[i] === t[i + 1]) {
//       iter.push((t[i]))
//     } else {
//       newMatrix.push(iter)
//       iter = []
//     }
//   }

//   return newMatrix
// }

// console.log(sortMatrix(matrix))
//////////////////////////1111111111111111111111111111111111111111/////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// function EventDebounce (bounceTime) {
//   this.subscribes = []
//   this.events = []
//   this.archive = []

//   setInterval(() => {
//       const event = this.events.shift()
//       if (event) {
//           this.subscribes.forEach(subscribe => {
//               subscribe.call(null, event)
//           })
//       }
//       // console.log(event)
//       this.archive.push(event)
//   }, bounceTime);
// }

// EventDebounce.prototype.subscribe = function (cb) {
//   this.subscribes.push(cb)
//   return this
// }

// EventDebounce.prototype.emit = function (obj) {
//   this.events.push(obj);
//   return this
// }

// let obj = new EventDebounce(1000)

// obj.subscribe((even) => console.log(even))
// obj.subscribe((even) => console.log(even))
// obj.subscribe((even) => console.log(even))
// obj.emit({a: 13})
// obj.emit({a: 334535})

////////////////////////////222222222222222222222222222222222222222222222/////////////////////////////////////

// function EventDebount (dt) {
//   this.dt = dt
//   this.events = []
//   this.sibscribe = []
//   this.arch = []
// }

// EventDebount.prototype.subscribe = function (cb) {
//   this.sibscribe.push(cb)
//   this.sinc(cb)
//   return this
// }

// EventDebount.prototype.emit = function (obj) {
//   this.events.push(obj)
// }

// EventDebount.prototype.init = function () {
//   setInterval(() => {
//     const shve = this.events.shift()
//     this.sibscribe.forEach(fn => fn.call(null, shve))
//     this.arch.push(shve)

//   }, this.dt)
// }

// EventDebount.prototype.sinc = function (cb) {
//   this.arch.forEach((ev) => cb.call(null, ev))
// }

///////////////////////////////////////////////////////////
function EventDebount (dt) {
  this.dt = dt
  this.events = []
  this.sibscribe = []
  this.cursor = 0
}

EventDebount.prototype.subscribe = function (cb) {
  this.sibscribe.push(cb)
  this.synq(cb)
  return this
}

EventDebount.prototype.emit = function (obj) {
  this.events.push(obj)
  return this
}

EventDebount.prototype.synq = function(cb) {
  this.events.slice(0, this.cursor).forEach(event => cb.call(null, event))
  return this
}

EventDebount.prototype.init = function () {
  const init = setInterval(() => { 
    if (this.events[this.cursor]) {
      this.sibscribe.forEach(sub => sub.call(null, this.events[this.cursor]))
      this.cursor += 1
    } else {
      clearInterval(init)
    }
  }, this.dt )
}

const eventDebount = new EventDebount(100)

eventDebount.subscribe((e) => console.log(`${e} => 1 `))
  .subscribe((e) => console.log(`${e} => 2 `))
  .subscribe((e) => console.log(`${e} => 3 `, '\n '))

eventDebount.emit('Poly').emit('Doly')
eventDebount.init()

setTimeout(() => {
  console.log('new EMIT');
  eventDebount.emit('Joly').emit('Sarah')
  eventDebount.init()
}, 2000)

setTimeout (() => {
  console.log("new Subscribe");
  eventDebount.subscribe((e) => console.log(`${e} => 4 `))
}, 3500) 

// setInterval(() => { 
  //   if (this.events[this.cursor]) {
  //     this.sibscribe.forEach(el => el.call(null, this.events[this.cursor]))
  //     this.cursor += 1
  //   }
    
  //   console.log('9191919191919');

  // }, this.dt )

  // eventDebount.init()