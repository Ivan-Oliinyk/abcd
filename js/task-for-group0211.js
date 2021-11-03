//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  ЗАДАЧА 1

  Создать функцию которая принимает массив целых положительных чисел и 
  возвращает массив при этом :
    1)Все четные элементы отсортированные по возрастанию, а элементы больше 10 
      возведены в квадрат
    2)Все нечетные элементы остаются на своем месте и каждый элемент умножен на его 
      позицию в массиве (начало с 1)
      (пример [7, 9, 2, 4, 6, 11, 21, 14, 13] => [7, 18, 2, 4, 6, 66, 147, 196, 117])


  ЗАДАЧА 2 

    Дан массив объектов, необходимо отсортировать игроков онлайн с наибольшей эффективностью
    (score / timePlay) от большего к меньшему, решение должно быть в одну строку
    
    const players = [
      {name: "Poly", timePlay: 1101, online: true, score: 42},
      {name: "Doly", timePlay: 901, online: true, score: 101},
      {name: "Max", timePlay: 642, online: false, score: 91},
      {name: "Grep", timePlay: 879, online: true, score: 66},
      {name: "John", timePlay: 1290, online: false, score: 21}
    ]

    Результат
    [
      {name: 'Doly', timePlay: 901, online: true, score: 101}
      {name: 'Grep', timePlay: 879, online: true, score: 66}
      {name: 'Poly', timePlay: 1101, online: true, score: 42}
    ]
  
  ЗАДАЧА 3

  Необходимо создать метод объекта String endsWith(), который сравнивает подстроку str1 с 
  окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
  const str = "Каждый охотник желает знать"; 
  const str1 = "скрипт";
  const str2 = "знать";
  console.log(str.endsWith(str1)) //false
  console.log(str.endsWith(str2)) //true


  ЗАДАЧА 4

  Задача 4
  Написать однострочное решение, которое вычисляет сумму квадратных корней для всех 
  чётных чисел целочисленного массива, точность 2знака после запятой
  [1, 4, 3, 0, 4, 5, 4, 6] => 8.45

  ЗАДАЧА 5
  Создать функцию iteartion которая выводит все ключи и 
  значения объекта на всех уровнях вложенности
 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//задача 1
// Создать функцию которая принимает массив целых положительных чисел и 
// возвращает массив при этом :
//   1)Все четные элементы отсортированные по возрастанию, а элементы больше 10 
//     возведены в квадрат
//   2)Все нечетные элементы остаются на своем месте и каждый элемент умножен на его 
//     позицию в массиве (начало с 1)
      // (пример [7, 9, 2, 4, 6, 11, 21, 14, 13] => [7, 18, 2, 4, 6, 66, 147, 196, 117])

// const arr = [7, 9, 6, 2, 4, 11, 21, 14, 13]

// const chnageArr = arr => {
//   const even = arr.filter(el => !(el % 2)).sort((a, b)=> a - b).map(el => el > 10 ? el * el : el)
  
//   return arr.map((el, idx) => el % 2 ? el * (idx + 1) : even.shift())
// }

// console.log(arr)
// console.log(chnageArr(arr)) //[7, 18, 2, 4, 6, 66, 147, 196, 117]


//////////////////////////////////////////////////////////////////////////////////////
// задача 2 
  // Дан массив объектов, необходимо отсортировать игроков онлайн с наибольшей эффективностью
  //  (score / timePlay) от большего к меньшему, решение должно быть в одну строку
  
  // const players = [
  //   {name: "Poly", timePlay: 1101, online: true, score: 42},
  //   {name: "Doly", timePlay: 901, online: true, score: 101},
  //   {name: "Max", timePlay: 642, online: false, score: 91},
  //   {name: "Grep", timePlay: 879, online: true, score: 66},
  //   {name: "John", timePlay: 1290, online: false, score: 21}
  // ]

  // Результат
  // [
  //   {name: 'Doly', timePlay: 901, online: true, score: 101}
  //   {name: 'Grep', timePlay: 879, online: true, score: 66}
  //   {name: 'Poly', timePlay: 1101, online: true, score: 42}
  // ]




// const players = [
//   {name: "Poly", timePlay: 1101, online: true, score: 42},
//   {name: "Doly", timePlay: 901, online: true, score: 101},
//   {name: "Max", timePlay: 642, online: false, score: 91},
//   {name: "Grep", timePlay: 879, online: true, score: 66},
//   {name: "John", timePlay: 1290, online: false, score: 21}
// ]

// console.log(
//   players
//   .filter(({online}) => online)
//   .sort((a, b) => (b.score / b.timePlay) - (a.score / a.timePlay))
// )

// Задача 3

// Необходимо создать метод объекта String endsWith(), который сравнивает подстроку str1 с 
//окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// const str = "Каждый охотник желает знать"; 
// const str1 = "скрипт";
// const str2 = "знать";
// console.log(str.endsWith(str1)) //false
// console.log(str.endsWith(str2)) //true

// const str = "Каждый охотник желает знать"; 
// const str1 = "скрипт";
// const str2 = "знать";

// String.prototype.endsWith = function (substring) {
//   if (typeof substring !== 'string') {
//     return "argumnet must be string"
//   }

//   return this.slice(-(substring.length)) === substring ? true : false
// }

// console.log(str.endsWith(str1))
// console.log(str.endsWith(str2))

//Задача 4
// Написать однострочное решение, которое вычисляет сумму квадратных корней для всех 
// чётных чисел целочисленного массива, точность 2знака после запятой
// [1, 4, 3, 0, 4, 5, 4, 6] => 8.45

// console.log([1, 4, 3, 0, 4, 5, 4, 6]
//   .filter(el => el % 2 === 0)
//   .reduce((sum, el) => sum+= Math.sqrt(el), 0)
//   .toFixed(2)
// )

// Задача 5
// Создать функцию iteartion которая выводит все ключи и 
// значения объекта на всех уровнях вложенности

// const obj = {
//   name : "Gop",
//   age: 13,
//   haveParents: true,
//   paranets: {
//     father: {
//       name: "Sam",
//       age: 45,
//       haveParents: true,
//       paranets: {
//         mother: {
//           name: "Sarah",
//           age: 79,
//         },

//         father: {
//           name: "Piter",
//           age: 76,
//         },
//       }
//     },
//     mother: {
//       name: "Maria",
//       age: 39,
//       haveParents: false
//     }
//   }
// }

// function iteartion(obj) {
//   if(typeof obj !== 'object') {
//     console.log("Error value must be object");
//   }

//   for (const key in obj) {
//     if (typeof obj[key] === 'object') {
//       iteartion(obj[key])
//     } else {
//       console.log(`${key} => ${obj[key]}`);
//     }
//   }
// }

// iteartion(obj)
// iteartion(22)
