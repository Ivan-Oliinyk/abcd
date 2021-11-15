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

// function EventDebount (dt) {
//   this.dt = dt
//   this.events = []
//   this.subsribe = []
// }

// EventDebount.prototype.subscribe = function (cb) {
//   this.subsribe.push(cb)
//   return this
// }

// EventDebount.prototype.emit = function (obj) {
//   this.events.push(obj)
//   return this
// }

// EventDebount.prototype.init = function () {
//   setInterval(() => {
//     const event = this.events.shift()

//       if (event) {
        
//         this.subsribe.forEach(fn => fn.call(null, event))
//         , this.dt
//       }
//     }
//   )
// }
// const eventDebount = new EventDebount(500)
// eventDebount.subscribe((e) => console.log("111"))
// eventDebount.subscribe((e) => console.log("222@@@"))
// eventDebount.subscribe((e) => console.log("Hello333???"))
// eventDebount.emit('Poly').emit('Joy')
// eventDebount.init()

// eventDebount.emit('Dodo')

// function EventDebount (time) {
//   this.events = []
//   this.subsribe = []
//   this.cursor = 0

//   setInterval(() => {
//     if (this.events[this.cursor])  {
//       this.subsribe.forEach(sub => sub.call(null, this.events[this.cursor]))
//       this.cursor += 1
//     }
//   }, time)
// }

// EventDebount.prototype.subscribe = function (cb) {
//   this.subsribe.push(cb)
//   this.synq(cb)
//   return this
// }

// EventDebount.prototype.emit = function (obj) {
//   this.events.push(obj)
//   return this
// }

// EventDebount.prototype.synq = function(cb) {
//   this.events.slice(0, this.cursor).forEach(event => cb.call(null, event))
//   return this
// }

// const eventDebount = new EventDebount(100)

// eventDebount.subscribe((e) => console.log(`${e} => 1 `))
//   .subscribe((e) => console.log(`${e} => 2 `))
//   .subscribe((e) => console.log(`${e} => 3 `, '\n '))

// eventDebount.emit('Poly').emit('Doly')

// setTimeout(() => {
//   console.log('new EMIT');
//   eventDebount.emit('Joly').emit('Sarah')
// }, 2000)

// setTimeout (() => {
//   console.log("new Subscribe");
//   eventDebount.subscribe((e) => console.log(`${e} => 4 `))
// }, 3500) 


// function Sum (...args) {
//   this.n = [...args].reduce((sum, el) => sum += el, 0)
// }

// Sum.prototype.add = function (num) {
//   this.n += num
//   return this
// }

// Sum.prototype.sum = function() {
//   return this.n
// }

// const sum = new Sum (1,2,3)
// console.log(sum);

// sum.add(2).add(2).add(2).add(2).add(2)
// console.log(sum);

// console.log(sum.res())

/////////////////////////////////////////////////////////////
// function Sum (...arg) {
//   const n = [...arg].reduce((sum, num) => sum += num, 0)

//   this.add = add.bind(this, n)
//   this.sum = sum.bind(this, n)
// }

// Sum.prototype.add = function(n, num) {
//   n += num
//   return this
// }

// Sum.prototype.sum = function (n) {
//   return n
// }

// const sum = new Sum(1,2,3)

// sum.sum()
// //////////////////////////////////////////////////////////////
// function Sum (...args) {
//   Object.defineProperty(this, 'sum', {
//     configurable: false,
//     enumerable: true,
//     writable: false,

//     get: function() {
//       return sum = [...args].reduce((sum, el) => sum += el, 0 )
//     },

//     set: function() { }
     
//   })


//   this.add = function(num) {
//     sum += num
//     return this
//   }

//   this.res = function() {
//     return sum
//   }
// }

// const sum = new Sum(1, 2, 3)

/////////////////////////////////////////
//Сложить матрицу как листок


// const matrix = [
//   [1,4,2,1],
//   [1,3,7,1],
//   [1,2,3,1],
//   [1,4,2,8]
// ]


// function sumM(arr) {
//   return arr.reduce((sum, el, i, arr) =>
//     console.log(el[i] + el[el.length -1 -i])
//   , '')
// }

// function sumMatr(arr) {
//   const newArr = []

//   for(let i = 0; i < arr.length; i += 1) {
//     for(let j = 0;  j < arr[i].length; j += 1) {
      
//     }
//   }

//   return newArr
// }



// console.log(sumMatr(matrix))

// const newM = matrix.reduce((sum, el, i, arr) => {
//   console.log(i);
//   // console.log(el[i] + el[el.length - 1 -i]);
//   // (el[i] + el[el.length - 1 -i]) 

//   // console.log(el[i]);
//   // console.log(el[el.length - 1 -i])
//   // console.log(el[i] + el[el.length - 1 -i])

//   // + (arr[arr.length - 1][i] + arr[arr.length - 1][i])
// })

  

// function sumArr(arr) {
//   return arr.reduce((sum, el, i, arr) => {
//     console.log(el[i])
//     console.log(el[el.length - 1 - i])
//     console.log(sum)
       
//     sum.push(el[i] + el[el.length - 1 -i])
//   }, [])
// } 

// console.log(sumArr(matrix));

// function paper (matrix) {
//   let width = matrix[0].length;
//   let height = matrix.length;
//   let res = []

//   for (let y = 0; y < height; y++)
//     for (let x = 0; x < width; x++) {
//       if (x === 0)
//         res.push(
//           [matrix[y][x] + matrix[y][width-x-1] + matrix[height-y-1][x] + matrix[height-y-1][width-x-1]]
//         )
//   }

//   console.dir( res );
// }

// function paper(a) {
  
//   const res = []

//   for (let i = 0; i < a.length; i += 1) {
//     let arr1 = []

//     for (let j = 0; j < a[i].length; j += 1) {
//       arr1.push()

//       console.log(a[i][j] < a[i].length / 2)

//       if (arr1.length === 2) {
//         res.push(arr1)
//         arr1 = []
//       }
//     }
//   }
 
//   return res
// }

function sumMatrix(arr) {
  let res = []
  let resDif = []

  for (let i = 0; i < arr.length / 2; i++) {
    for (let j = 0; j < arr[0].length / 2; j++) {
      resDif.push(
        arr[i][j] + 
        arr[i][arr[0].length - 1 - j] + 
        arr[arr.length - 1 -i][j] + 
        arr[arr.length - 1 -i][arr[0].length - 1 -j]
      )

      if(resDif.length === arr.length / 2) {
        res.push(resDif)
        resDif = []
      }
    }
  }

  return res
}

console.log(sumMatrix( [
  [1,  2,  2,  9 ],
  [1,  27,  3,  1 ],
  [18,  11,  2,  6],
  [1,  2,  13,  1]
] ));

console.log(sumMatrix( [
  [1,  2,  2,  9, 1,  2,  2,  9 ],
  [1,  27,  3,  1, 1,  2,  2,  9 ],
  [18,  11,  2,  6, 1,  2,  2,  9],
  [1,  2,  13,  1, 1,  2,  2,  9],
  [1,  2,  2,  9, 1,  2,  2,  9 ],
  [1,  27,  3,  1, 1,  2,  2,  9 ],
  [18,  11,  2,  6, 1,  2,  2,  9],
  [1,  2,  13,  1, 1,  2,  2,  9]
] ));

console.log(sumMatrix( [
  [1,  2,  2,  9, 3, 6 ],
  [1,  27,  3,  1, 3, 6 ],
  [18,  11,  2,  6, 3, 6],
  [1,  2,  13,  1, 3, 6],
  [18,  11,  2,  6, 3, 6],
  [1,  2,  13,  1, 3, 6]
] ));


