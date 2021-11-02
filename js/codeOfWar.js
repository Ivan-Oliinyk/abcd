///////////////////////


// function solution(string) {
//   if ("") {return " "}
  
//   let str = ''

//   for (let i = 0; i < string.length; i +=1) {
//     if (string[i] !== string[i].toUpperCase()) {
//       str += string[i]
//     } else {
//       str += ` ${string[i]}`
//     }
//   }
  
//   return str
// }

// console.log(solution("camelCasing"))


///////////////////////////////////////////////////////////////////
// Подсчитайте количество делителей положительного целого числа
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// function getDivisorsCnt(n){
//   let result = 0

//   for (let i = 0; i <= n; i += 1) {
//     if (n % i === 0) result +=1 
//   }

//   return result
// }

// console.log(getDivisorsCnt(1))
// console.log(getDivisorsCnt(10))
// console.log(getDivisorsCnt(11))
// console.log(getDivisorsCnt(54))


//////////////////////////////////////////////////////////////////////////
// const multiplicationTable = function(size) {
//   const arr = []

//   for (let i = 1; i <= size; i += 1) {
//     arr[i] = []

//     for (let j = 1; j <= size; j += 1) {
//       arr[i][j] = i * j
//     }
//   }

//   return arr
// }

// console.log(multiplicationTable(3));

///////////////////////////////////////////////////////////////
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// function encode(string) {
//   const code = ["a", "e", "i", "o", "u"]

//   return string.split("").reduce((str, el) => {
//     if (code.includes(el)) {
//       str += code.indexOf(el) + 1
//     } else {
//       str += el
//     }

//     return str
//   }, "")
// }

// function decode(string) {
//   const code = ["a", "e", "i", "o", "u"]
//   const codeNum = ["1", "2", "3", "4", "5"]

//   return string.split("").reduce((str, el) => {
//     if(codeNum.includes(el)) {
//       str += code[el - 1]
//     } else {
//       str += el
//     }

//     return str
//   }, "")
// }

// console.log(encode("hello"))
// console.log(decode(encode("hello")))
//////
// turn vowels into numbers
// function encode(string){
//   return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }

// //turn numbers back into vowels
// function decode(string){
//   return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }

///////
// const encode = s => s.replace(/[aeiou]/g, v => ' aeiou'.indexOf(v));
// const decode = s => s.replace(/\d/g, v => ' aeiou'[v]);

///////////////////////////////////////////////////////////////////////////////////

// function sortArray(array) {
//   const odd = array.filter(el => el % 2).sort((a, b) => a - b)
//   return array.map(el => el % 2 === 0 ? el : odd.shift())
// }

// console.log(sortArray([5, 8, 6, 3, 4]))
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

//////////////////////////////////////////////////////////////////////

// function isAnagram (str) {
//   for (const arg in str.toLowerCase().split('')) {
//     if (str.toLowerCase().indexOf(arg) !== str.toLowerCase().lastIndexOf(arg)) {
//       return false
//     }
//   }

//   return true
// }

// console.log(isAnagram('asdf'));

/////////////////////////////////////////////////////////////////////////////////

// const buildMatrix = (row, col) => [...Array(row)].map((el, i) => [...Array(col)].map((el, j) => (i + 1) * (j + 1)))

// console.log(buildMatrix(3,3));

// console.log(Array(5));
// console.log(String(45));
/////////////////////////////////1
// const palmTree = (n = 1) => n < 0 ? 'enter positiv number' : !Number(n) ? false : 'p'.repeat(n) 

// console.log(palmTree(4))
// console.log(palmTree(1))
// console.log(palmTree())
// console.log(palmTree('fsdf'))
// console.log(palmTree(-2))

/////////////////////////////////2
// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех 
// чётных чисел целочисленного массива, точность 2знака после запятой [1, 4, 3, 0, 4, 5, 4, 6]

// console.log([1, 4, 3, 0, 4, 5, 4, 6]
//   .filter(el => !(el % 2))
//   .reduce((sum, el) => sum += Math.sqrt(el), 0)
//   .toFixed(2)
// ) // 8.45

// console.log([1, 4, 3, 0, 4, 5, 4, 6].reduce((sum, el) => !(el % 2) ? sum += Math.sqrt(el) : sum += 0, 0).toFixed(2))

//////////////////////////////////
// Написать функцию (в одну строку с проверкой на строку) которая принимает строку 
// и возвращает каждое новое слово с большой буквы

// const toUp = str => !String(str) ? 'enter string' : str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
// console.log(toUp("hello world")) // Hello World

// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр 
//   нечетного элемента на верхний (использовать проверку на строку, код должен быть в одну строку)
//   "каждый охотник желает знать" =>  "КаЖдЫй ОхОтНиК ЖеЛаЕт ЗнАтЬ"

// validatePIN("1")//,false, "Wrong output for '1'")
// validatePIN("12")//,false, "Wrong output for '12'")
// validatePIN("1234.0")//,false, "Wrong output for '123'")
// validatePIN("12345")//,false, "Wrong output for '12345'")
// validatePIN("123456")
// validatePIN("-1234")//,false, "Wrong output for '-1234'")
// validatePIN("1.234")//,false, "Wrong output for '1.234'")
// validatePIN("-2.234")//,//false, "Wrong output for '-1.234'")
// validatePIN("00000000")//,false, "Wrong output for '00000000'")

// const validatePIN = str =>  str.length !== 4 && str.length !== 6 ? false : 
//   str.length !== String(Number(str).toFixed()).length ? false : Number(str) < 0 ? false : true
    

// console.log(validatePIN('123456'))
// console.log(validatePIN('1234'))
// console.log(validatePIN('1'))
// console.log(validatePIN('1234.0'))
// console.log(validatePIN('-2.234'))
// console.log(validatePIN('00000000'))
// console.log(validatePIN('-1234'))

// console.log(Number('1234.0').toFixed() === Number('1234.0'));

// console.log(Number("-2.234"));

//Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр 
//   нечетного элемента на верхний (использовать проверку на строку, код должен быть в одну строку)
//   "каждый охотник желает знать" =>  "КаЖдЫй ОхОтНиК ЖеЛаЕт ЗнАтЬ"
 
// const arr = [1, 2, 3, 4, 1, 2, 3, 4, 4] 

// // const doSome = arr => arr.filter((el, i) => arr.indexOf(el) === i)
// // const doSome = arr => arr.sort((a, b) => a - b).filter((el, i) => arr[i] === arr[i+2]).join()
// const doSome = arr => arr.sort((a, b) => a - b)
  
// console.log(doSome(arr))

// Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку 
// и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
// (использовать проверку на строку, код должен быть в одну строку)

// const changeRegister = str => typeof str === 'string' 
//   ? str.split('').map(el => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()).join('') 
//   : 'enter string'

// console.log(changeRegister("КаЖдЫй ОхОтНиК")) //кАжДыЙ оХоТнИк
// console.log(changeRegister("some string")) // SOME STRING
// console.log(changeRegister("SOME STRING")) //some string
// console.log(changeRegister(22)) //enter string
// console.log(changeRegister()) //enter string
// console.log(changeRegister("КаЖд2Ый ОхО2тН2и2К")) //кАжД2ыЙ оХо2Тн2И2к

// // Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, 
// // при котором несколько слов пишутся слитно без пробелов, 
// // при этом каждое слово внутри строки пишется с заглавной буквы.
// // (использовать проверку на строку, код должен быть в одну строку => если пришла не строка вывести 'enter string')
// // "hEllo woRld" => HelloWorld

// const initCap = str => typeof str === 'string' 
//   ? str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join("")
//   : 'enter string'

// console.log(initCap("hEllo woRld"))

// const matrix = (row, colum) => [...Array(row)].map((el, i) =>[...Array(colum)].map((el, j) => (i + 1) * (j + 1)))
// const buildMatrix = (a, b) => [...Array(a)].map(() => [...Array(b)].map(() => a * b))

// console.log(buildMatrix(4, 6));
// console.log(matrix(4, 6));

// const arrNew = matrix(3, 4)
// console.log(arrNew)

// console.log(arrNew.map(el => el.reverse()).reverse())
// console.log(arrNew.reduce((arr, el) => ));

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (b and B)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// const doSome = str => str.toLowerCase().split('').reduce((sum, el, i, arr) => arr.indexOf(el) === i ? sum += 0 : sum += 1 ,0)
// // const doSome = str => str.toLowerCase().split('')
// //   .filter((el, i, arr) => arr.indexOf(el) !== i)
// //   .filter((el, i, arr) => arr.indexOf(el) === i).length

// console.log(doSome("abcde"))
// console.log(doSome("aabbcde"))
// console.log(doSome("aabBcde"))
// console.log(doSome("Indivisibilities"))
// console.log(doSome("aA11"))

// const a = [121, 144, 19, 161, 19, 144, 19, 11]  
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// // const comp = (arr1, arr2) => arr1.length !== arr2.length ? false : 
// //   arr1.every(el => arr2.includes(el * el)) && arr2.every(el => arr1.includes(Math.sqrt(el)))
// const comp = (arr1, arr2) => arr1 === null || arr1 === null ? false :
//   arr1.reduce((sum, el) => sum += el, 0) === arr2.reduce((sum, el) => sum += Math.sqrt(el), 0)

// console.log(comp(a, b))

// console.log(Math.sqrt([2,4].reduce((sum, el) => sum += el)));
// console.log([2,4].reduce((sum, el) => sum += Math.sqrt(el)));
///////////////////////////////////////////////////////////////////////////////////////
// const balance = (left,right) => left.split('').reduce((sum, el) => el === "!" ? sum += 2 : sum += 3, 0) === right.split('').reduce((sum, el) => el === "!" 
//   ? sum += 2 : sum += 3, 0) ? "Balance" :
//     left.split('').reduce((sum, el) => el === "!" ? sum += 2 : sum += 3, 0) >
//     right.split('').reduce((sum, el) => el === "!" ? sum += 2 : sum += 3, 0) ? 'Left' : 'Right'
 
// console.log(balance("!!!","??"));
// console.log(balance("!??","?!!"));
// console.log(balance("!?!!","?!?"));
// console.log(balance("!!???!????","??!!?!!!!!!!"));
// //////////////////////////////////////////////////////////////////////////////////////
  

// // Создать функциию которая принимает массив чисел и возвращает массив отсортированный 
// // по нечетным элементам при этом четные остаются на своем месте 

// const num = [1, 4, 6, 12, 31, 2, 6, 7, 8, 9]

// const doSome = arr => {
//   const oddArr = arr.filter(el => el % 2).sort((a, b) => a - b)

//   return arr.map(el => el % 2 ? oddArr.shift() : el)
// }

// console.log(num);
// console.log(doSome(num));

// const countDeafRats = function(town) {
//   return town.slice(town.indexOf("P")).split("")
//     .reduce((sum, el, i, arr) => 
//       arr[i] === 'O' && arr[i - 1] === "~"  ? sum += 1 : sum += 0 , 0)
// }

// console.log(countDeafRats("~O~O~O~OP~O~OO~"));
// console.log(countDeafRats("~O~O  ~O~O~OO~  ~O~O~O~OPO~O~O~O~~OO~O~~OO~O~"));

// const str = "~O~O~O~OP~O~OO~"

// console.log(str.slice(str.indexOf('P')))

// const obj1 = {g:1}
// const obj2 = {}

// const isEmpty = (obj) => Object.keys(obj).length ? true : false
// const isEmpty = (obj) => {
//   for (const key in obj) {
//     return true
//   }

//   return false
// }

// console.log(isEmpty(obj1));
// console.log(isEmpty(obj2));


// const salaries = {
//   john: 100,
//   pit: 130,
//   sam: 160,
//   gog: "joh"
// }

// // console.log(Object.values(salaries).reduce((sum, el)=> sum += el, 0));

// function mult(obj, n) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= n
//     }
//   }
// }

// mult(salaries, 2);

// console.log(salaries);

// const isPlainObj = obj => Array.isArray(obj) || obj === null ? false : true

// console.log(isPlainObj({}))
// console.log(isPlainObj([]))
// console.log(isPlainObj(null))
  //////////////////////////////////////////////////
// const swith = (obj, [...prop]) => {
//   const newObj = {...obj}
  
//   prop.forEach(el => delete newObj[el])
  
//   return newObj
// }
////////////////////////////////////////////////////////

// console.log(swith({a: 1, b: 2, c: 3}, ["c", "b"]));

// const isEmpty = obj => {
//   if (Object.keys(obj).length === 0) {
//     return true
//   } 

//   if (Object.keys(obj).length === 1) {
//     for (const key in obj) {
//       if (obj[key] === null || obj[key] === undefined || obj[key] === NaN) {
//         return true
//       } 
//     }
//   }
  
//   return false
// }
////////////////////////////////////////////////////////////////

const isEmpty = obj => Object.keys(obj).length === 0 ? true :
  !Object.keys(obj).filter(key => obj[key] || obj[key] === 0 || obj[key] === false).length

// const isEmpty = (object) => {
//   const objectKeys = Object.keys(object);
//   if (objectKeys.length === 0) {
//     return true;
//   }

//   return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
// }

console.log(isEmpty({ a: 1, b: undefined }));
console.log(isEmpty({ a: undefined }));


