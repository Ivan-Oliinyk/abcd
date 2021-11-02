/*
  дана строка 'The quick brown fox jumps over the lazy dog'
  необходимо удалить все гласные буквы, возвести в верхний регистр и перевернуть строку
  
  Результат: GD ZL HT RV SPMJ XF NWRB KCQ HT
 */

// task1 ********
  // aeiouAEIOU
  /*
  дана строка 'The quick brown fox jumps over the lazy dog'
  необходимо удалить все гласные буквы, возвести в верхний регистр и перевернуть строку
  
  Результат: GD ZL HT RV SPMJ XF NWRB KCQ HT
 */
console.log("ЗАДАЧА 1")  

let str = 'The quick brown fox jumps over the lazy dog'

str =  str.toUpperCase().replace(/[AEIOU]/g, "").split('').reverse().join("")

console.log(str);

  

//task2 *********
/*
  написать функцию isAnagram, которая приверит являются ли два слова анаграммами
  let word1 = 'finder'
  let word2 = 'Friend'
  let word3 = 'Hello'
  let word4 = 'world'

  console.log(isAnagram(word1, word1)) //true
  console.log(isAnagram(word3, word4)) //false
*/

// РЕШЕНИЕ 3 ЗАДАЧИ
console.log("")
console.log("ЗАДАЧА 2")

let word1 = 'finder'
let word2 = 'Friend'
let word3 = 'Hello'
let word4 = 'world'
let word5 = 'JOCKER'
let word6 = "jocker"

function isAnagram( value1, value2 ) {
  if (value1.length !== value2.length) return false

  value1.toLowerCase()
  value2.toLowerCase()

  let result = true 

  value1.split('').forEach((elem) => {
    if (!value2.includes(elem)) {
      result = false
    }
  })
        
  return result
}

console.log(isAnagram(word1, word1)) 
console.log(isAnagram(word3, word4))
console.log(isAnagram(word5, word6))


// task3 **********
/*
  дан массив, в котором нужно найти массивы, все элементы которых являются строками и из этих массивов получить строку

  const arr = [1,2,3,
            'hello', 'wonderful', 'world',
            [4,5,6,7],
            {id: 1, name: "John"},
            ['hello', 'world'],
            [{id: 2, name: "Anna"},{id: 3, name: "Viktoria"}],
            ['5', '6'],
            12, 13
  ]
  
  Результат: helloworld 56
*/

// РЕШЕНИЕ 3 ЗАДАЧИ
console.log("")
console.log("ЗАДАЧА 3")

const arr = [1,2,3,
  'hello', 'wonderful', 'world',
  [4,5,6,7],
  {id: 1, name: "John"},
  ['hello', 'world'],
  [{id: 2, name: "Anna"},{id: 3, name: "Viktoria"}],
  ['5', '6'],
  12, 13
]

let newStr = arr.reduce((total, elem) => {

  if (Array.isArray(elem) && elem.every(el => typeof(el) === 'string')) {
    total.push(elem.join(''))
  }
  
  return total

}, []).join(' ')

console.log(newStr)

//ЗАДАЧА 4
/*
написать функцию, которая будет создавать матрицу случайных целых чисел в диапазоне [min, max].
функция принимает минимальное и максимальное значения и шаг (длина строки массива)
заполнять ячейки массива случайными числами до длины max-min, если массив получился длинее заполнять '*'

function createMatrix(min, max, step){
      // your code...
}
console.log(createMatrix(1, 12, 5)) //[ [ 11, 2, 4, 10, 4 ], [ 4, 2, 3, 5, 9 ], [ 6, '*', '*', '*', '*' ] ]
console.log(createMatrix(1, 10, 3)) //[ [ 3, 7, 4 ], [ 6, 2, 6 ], [ 1, 2, 5 ] ]
*/

// РЕШЕНИЕ ЗАДАЧИ 4
console.log("");
console.log("ЗАДАЧА 4");

function createMatrix(min, max, step) {
  
  function generateArr(max) {
    const arr = []
    let stepArr = []

    for (let i = 0; i < max; i += 1) {
      stepArr.push(generateNumber(min, max))

      if(stepArr.length === step) {
        arr.push(stepArr)
        stepArr = []
      } 
    }
    
    if (stepArr.length <= 5 && stepArr.length !== 0) {
      while (stepArr.length < step) {
        stepArr.push('*')
      }

      arr.push(stepArr)
    }
            
    return arr
  }
  
  function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  return generateArr(max -1)
}

console.log(createMatrix(1, 12, 5))
console.log(createMatrix(1, 10, 3))
console.log(createMatrix(2, 3, 1))

//myVariant

// variant2
// const createMatrix = (min, max, step) => {
//   let temp = 0;
//   let  matrix = Array.from({
//     length: 3
//    }, () => new Array(step).fill(Math.floor(Math.random() * (max - min) + min)))
     
//   matrix.forEach((el, index) => {
//     el.reduce((acc, el_2, index_2) => { 
//       temp++   
       
//        el[index_2] = ((max - min) <  temp) ? '*' : Math.floor(Math.random() * (max - min)) + min
       
//      }, el)
     
//    })
   
//    return matrix
//  }
  
// console.log(createMatrix(1, 12, 5))
// console.log(createMatrix(1, 10, 3))
// console.log(createMatrix(2, 3, 1))








