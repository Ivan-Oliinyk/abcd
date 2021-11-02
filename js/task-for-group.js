/*Задание 
  Есть масиив [1, 3, 66, 11, 43, 15, 18, 24, 12, 15, 18]
  1) Вывести на экран элемент кратный 6
  2) Произвести замену(подстановку) елементов с 6 по 9 на элемент 111
  3) Удалить все нечетные и вывести их сумму
*/

//РЕШЕНИЕ


// let arr = [1, 3, 66, 11, 43, 15, 18, 24, 12, 15, 18]

// // //Решение 1части
// // console.log(arr.find(el => !(el % 6)))

// // //Решение 2части
// // arr.fill(111, 5, 8)
// // console.log(arr)

// // //Решение 3части
// // const result = arr.reduce((sum, elem) => {
// //   if(!(elem % 2)) {
// //     sum += elem
// //     console.log(elem)
// //   }

// //   return sum
// // }, 0)

// // console.log(result)

// const sum = arr.reduce((total, elem) => {
//   if (!(elem % 3)) {
//     total += elem
//     console.log(elem)
//   }

//   return total
// }, 0)

// console.log(sum);

//Создать функцую генерации случайного цвета  в формате rgb rgb (11, 56, 134)

// function generateRGB () {
//   return `rgb (${generateColor()}, ${generateColor()}, ${generateColor()})`
// }

// function generateColor() {
//   return Math.round(Math.random() * (255 - 0) + 0)
// }

// console.log(generateRGB());