// taks1 *********
//Сделать что бы каждый второй символ(пробелы учитываем тоже) был в верхнем регистре
//Важно: не использовать перебирающие методы массивов 

// const str1 = "London is the capital of Great Britain"
// const str2 = str1.toLowerCase()
// let strValue = ''

// for(let i = 0; i < str1.length; i += 1) {
//     if ( i % 2 ) {
//       strValue += str2[i].toUpperCase()
//     } else {
//       strValue += str2[i]
//     }
// }

// console.log(strValue);


// task2 ******************
//Проверить является ли строка полидромо 
//(без использования перебирающих методов массива и (split, reverse, join,))

// const str = "topot" 
// let newStr = ''

// for (let i = str.length -1; i >= 0; i -= 1) {
//   newStr += str[i]
// }

// if (str === newStr) {
//   console.log(true)
// } else {
//   console.log(false)
// }


//task3 *****************
/*
Есть строка 'London is the capital of Great Britain' найти  
букву котороя само часто посторяется и вывести ее и количество 
повтороний (c учетом регистра и НЕ ДОЛЖНО СЧИТАТЬ ПРОБЕЛЫ, 
без использования перебирающих методов массива)
*/

// const str = 'London is the capital of Great Britain ggggggggg'
// let letter = ''
// let counter = 0

// for (let i = 0; i < str.length; i += 1) {
//   let newCounter = 0
  
//   for (let j = 0; j < str.length; j += 1) {
//     if (str[i] === str[j] && str[i] !== ' ') {
//       newCounter += 1
//     }
//   }

//   if (counter < newCounter) {
//     counter = newCounter
//     letter = str[i]
//   }
// }

// console.log(`Буква "${letter}" повторяется больше всех => ${counter}`);

// const str = 'London is the capital of Great Britain'

// let newStr = str.toLowerCase().split(' ').forEach((elem, index) => {
//   elem.forEach((el, i) => )
// })

// console.log(newStr);


// let str = " 1zod 2ds dsw91"

// str = str.replace(/[0-9]/g, "")

// console.log(str);

// let a = [1,2,3,4,5]

// let b = a.reduce((total, current) => {
//   return total + current
// }, 0)

// console.log(b);

// let str = "London"
// let strN = str.split("").reduce((total, el, index) => {
//   return total += (index % 2) ? el.toUpperCase() : el
// }, '')

// console.log(strN);

// let arr = [1.54, 11.93, 2.32, 10.4]

// let newArr = arr.map(Math.round).sort((a, b) => a - b)

// console.log(newArr)

// const a = [123, [221, [6, [12, [21]]]]]
// console.log("flat(Infinity) -> ", a.flat(Infinity));
// console.log("flat(-1) -> ", a.flat(-1));

// console.log(typeof parseInt("1.57px"));

// const arr = [1]
// const str = "sds"

// console.log(Array.isArray(arr));
// console.log(Array.isArray(str));

// let arr = [0, 1, 2, 3, 4, 5, 6]

// arr.copyWithin(2, 0)
// arr.copyWithin(2, 0, 0)

// console.log(arr);

// const func = e =>  e + 2

// console.log(func(2));

// var user = {
//   firstName: "Василий",
//   surname: "Петров",
//   patronym: "Иванович"
// };

// function showFullName(firstPart, lastPart) {
//   console.log( this[firstPart] + " " + this[lastPart] )
// }

// // f.call(контекст, аргумент1, аргумент2, ...)
// showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
// showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"

// function Person(name) {
//   this.name = name
//   this.greeting = function() {
//     console.log(`Hello i am ${this.name}`)
//   }
// }

// let person1 = new Person('Bob')
// let person2 = new Person('Sarah')

// console.log(person1.name)
// person1.greeting()

// console.log(person2.name)
// person2.greeting()

// function Person(first, last, age, gender, interest) {
//   this.name = {
//     'first': first,
//     'last' : last
//   };
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.farewell = function() {
//   console.log(`${this.name.first} ${this.name.last}`);
// }

// const person1 = new Person('Tomas', "Piterson", 29, 'man')

// console.log(person1)

// person1.farewell()

// Person.prototype.fullName = function () {
//   return `${this.name.first} ${this.name.last}`
// }

// console.log(person1.fullName())

// function Teacher(first, last, age, gender, interests, subject) {
//   this.name = {
//     first,
//     last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype)

// const teacher1 = new Teacher ()

// console.log(teacher1);

// const person = {
//   name: {
//     "first" : "Tom",
//   },
//   age: 29
// }

// console.log(person)

// person.hasCar = true
// person.name.lastName = "Shelby"
// console.log(person)

// person.fullName = function () {
//   person.fullName = (`${this.name.first} ${this.name.lastName}`)
// }

// person.fullName()

// console.log(person)

// const obj1 = new Object()
// console.log(obj1)

// const obj2 = {}
// console.log(obj2)

// obj2.age = 30
// obj2.name = "Ivan"

// console.log(obj2)

// delete obj2.name

// console.log(obj2);

// obj1["Like birds"] = true

// console.log(obj1);

// let key = prompt("Your name :", "name")
// obj2.name = "Ivan"
// obj2.age = 30

// alert(obj2.key)

// const Cons = function () {
//   this.a = 1;
//   this.b = 2;
// }

// const obj = new Cons()

// Cons.prototype.c = 22

// console.log(obj);
// console.log(obj.c);

// const obj1 = Object.assign({}, obj)

// console.log(obj1);
// console.log(obj1.a = 777);
// obj.c = 88
// obj.y = 99

// console.log(Object.entries(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj).length);
// console.log(obj1.valueOf());
// console.log(obj.valueOf());
// console.log(obj1.y);

// const obj2 = Object.create(obj)
// console.log(obj2);

// console.log(obj2.__proto__);

// const obj3 = new obj.constructor()
// console.log(obj3);
// console.log(obj3.y);

// const utf = new Object()
// console.log(utf);

// const arr = [1,2,3,4,5,6]
// const objArr = Object.assign({}, arr)
// console.log(objArr);


// s


