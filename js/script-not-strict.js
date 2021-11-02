/////1111

// function Sum (x) {
//   Object.defineProperty(this, 'x', {
//     configurable: false,
//     enumerable: true,

//     get: function() {
//       return x
//     },

//     set: function () {}
//   })

//   this.add = function(value) {
//     x += value
//   }

// }

// const sum = new Sum(1)
// console.log(sum.x)
// console.dir(sum);

// sum.add(2)
// console.log(sum.x)

// sum.x = 4
// console.log(sum.x)
// console.log(sum);


////222222222*************************************************

// function Sum (x) {
//   Object.defineProperty(this, 'x', {
//     // configurable: false,
//     enumerable: true,

//     get: function() {
//       return x
//     },

//     set: function () {}
//   })

//   Object.setPrototypeOf( 
//     this, 
//     {
//       add: function(value) {
//         return x += value 
//       }
//     }
//   ) 
// }

// const sum = new Sum(1)
// console.log(sum.x)
// console.dir(sum)

// sum.add(2)
// console.log(sum.x)

// delete sum.x

// sum.x = 4
// sum.y = 11
// console.log(sum.x)
// console.log(sum)

//********************************************************************** */

// console.log(Object.getOwnPropertyDescriptor(sum, 'x'))
// console.log(Object.getOwnPropertyDescriptor(sum, 'y'))


// const a = 22

// console.log(typeof a);

// console.log(typeof String(a));

// const Hero = function (name, xp, weapon) {
//   this.name = name
//   this.xp = xp
//   this.atack = function() {
//     return `${this.name} atack with ${this.weapon}`
//   }
// }

// const Warrior = function (name, xp, weapon, atack) {
//   this.weapon = weapon

//   Hero.call(this, name, xp, atack)
// }

// const poly = new Warrior('Poly', '1000', 'sword')

// console.log(poly.atack());

// console.log(poly);



/////////////////////////////////////////////////////////////////////
// function MyMath(number) {
//   this.sum = function (x) {
//     return num = (new MySum(number)).add(x)
//   }  
// }

// function MySum (x) {
//   Object.defineProperty(this, "x", {
//     get() {
//       return x
//     },

//     set () {}
//   })

//   Object.setPrototypeOf(this, {add = function(value) {
//     return  x += value
//   }})
// }

// const num = new MyMath(2)
// console.log(num)

// num.sum(2)
// console.log(num)

// console.log()
//////////////////////////////////////////////////////////////////////////////
// function MyMath(num) {
//   this.sum = function (x) { 
//     return num = (new Sum(num)).add(x) 
//   }

//   this.sub = function (x) { 
//     return num = (new Sub(num)).add(x) 
//   }

//   this.mul = function (x) { 
//     return num = (new Mul(num)).add(x) 
//   }

//   // метод к примитиву
//   this.toString = function () { 
//     return num 
//   }
// }

// function Sum(x) {
//   Object.defineProperty(this, 'x', {
//       get() {
//         return x 
//       },
//       set() { }
//   })
//   Object.setPrototypeOf(
//     this,

//     { add: function (value) { 
//         return x += value 
//       }
//     })
// }

// function Sub(x) {
//   Object.defineProperty(this, 'x', {
//       get() { 
//         return x 
//       },
//       set() { }
//   })

//   Object.setPrototypeOf(
//     this, 

//     { add: function (value) { 
//         return x -= value 
//       } 
//     })
// }

// function Mul(x) {
//   Object.defineProperty(this, 'x', {
//       get() { 
//         return x 
//       },
//       set() { }
//   })
//   Object.setPrototypeOf(
//     this,

//     { add: function (value) { 
//         return x *= value 
//       } 
//     })
// }

// const num = new MyMath(2)
// console.log(num.sum(2));
// console.log(num.sub(1));
// console.log(num.mul(2));
// console.log(num + 1);
// console.log(num);


// /////////////////////////////////////////////////////////
// function Logger (logName) {
//   Logger.db[logName] = []
  
//   this.write = function (element) {
//     Logger.db[logName].push( element )
//   }

//   this.read = function () {
//     return Logger.db[logName]
//   }

//   this.readAll = function () {
//     return Logger.db[logName]
//   }
// }

// Logger.db = { }

// const log1 = new Logger("log1")
// const log2 = new Logger("log2")

// log1.write("hello")
// console.log(log1.read())

// log2.write("zdraste")
// console.log(log2.read())

// console.log(log1.readAll())

// var a= 3

// function func() {
//   a = 5
// }

// func()
// console.log(a);




// const obj2 = {
//   a: 2,

//   func() {
//     console.log("this1",this)

//     function inner() {
//       console.log("this2", this);
//     }

//     console.log("this3 ->", this);
//     inner()
//   }
// }

// obj2.func()



// function a (cb) {
//   console.log(this)
//   return cd = this.cd.bind(this)
// }

// function b (cb) {
//   console.log(this)
//   return cd = this.cd.bind(this)
// }

// function c (cb) {
//   console.log(this)
//   return cd = this.cd.bind(this)
// }

// function d (cb) {
//   console.log(this)
//   return cd = this.cd.bind(this)
// }

// function runner (arg) {
//   return a(b,)
// }

// runner(1)(2)(3)(4)(5)

//////////////////////////////////////////////////////////

// function a(cb){
//   console.log(this)
//   return cb
// }
 
// function b(cb){
//   console.log(this)
//   return cb
// }
 
// function c(cb){
//   console.log(this)
//   return cb
// }
 
// function d(cb){
//   console.log(this)
//   return cb
// }

// function runner (args) {
//   return (
//     a.bind({ args, ctx: {b: { b: 2 }, c: { c: 3 }, d: { d: 4 } }}, 
//       b.bind({ args, ctx: {a: { a: 1 }, c: { c: 3 }, d: { d: 4 } }},
//         c.bind({ args, ctx: {a: { a: 1 }, b: { b: 2 }, d: { d: 4 } }}, 
//           d.bind({ args, ctx: {a: { a: 1 }, b: { b: 2 }, c: { c: 3 } }})
//         )
//       )
//     )
//   )
// }

// runner(1)()()()()



  
// function runner (args) {
//   const aCtx = { a: 1 }
//   const bCtx = { b: 2 }
//   const cCtx = { c: 3 }
//   const dCtx = { d: 4 }

//   return (
//     a.bind({ args, ctx: {b: bCtx, c: cCtx, d: dCtx }}, 
//       b.bind({ args, ctx: {a: aCtx, c: cCtx, d: dCtx }},
//         c.bind({ args, ctx: {a: aCtx, b: bCtx, d: dCtx }}, 
//           d.bind({ args, ctx: {a: aCtx, b: bCtx, c: cCtx }})
//         )
//       )
//     )
//   )
// }

// runner(1)()()()()

// const sum = n => (n === 0) ? n : n + sum(n - 1)

// console.log(sum(1))

// const arrSum = (arr, ...args) => [...arr].reduce((sum, elem) => sum += elem)
/////////////////////////////////////////////////////
// const arr1 = [1, 2, 3, 4]
// const arr2 = [2, 3, 4, 5]

// const func = (arr1, arr2) => arr1.filter(elem => arr2.includes(elem))
// console.log(func(arr1, arr2))

// const str = 'London is the capital of Great Britain ggggggggg'

// const arr = [1, 5, 15, 25, 40]
// const returnMax = (arr) => [arr.indexOf(Math.max(...arr)), Math.max(...arr)]

// console.log(returnMax(arr))

// const arr = [1, 2, 3, 4]

// function getSum(arr) {
//   const result = []

//   let totalSum = arr.reduce()

// }


function solution(string) {
  if ("") {return " "}
  
  let str = ''

  for (let i = 0; i < string.length; i +=1) {
    if (string[i] !== string[i].toUpperCase()) {
      str += string[i]
    } else {
      str += ` ${string[i]}`
    }
  }
  
  return str
}

console.log(solution("camelCasing"))