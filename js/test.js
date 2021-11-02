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

const Constructor = function() {
  
}
