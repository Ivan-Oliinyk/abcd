/////////////////********* 1 *****//////////////////////////////////
// function Sum (...args) {
//   this.n = args.reduce((sum, num) => sum += num, 0)
// }

// Sum.prototype.add = function (num) {
//   this.n += num
//   return this
// }

// Sum.prototype.res = function () {
//   return this.n
// }

// const sum = new Sum(1,2,3)

// console.log(sum.res());
// sum.add(2).add(5).add(10);
// console.log(sum.res());

///////////////////////********* 2 *****////////////////////////////////

// function Sum (...args) {
//   let sum = {res: args.reduce((sum, num) => sum += num, 0)}
  
//   this.add = this.add.bind(this, sum)
//   this.res = this.res.bind(this, sum)
// }

// Sum.prototype.add = function (sum, num) {
//   sum.res += num
//   return this
// }

// Sum.prototype.res = function (sum) {
//   return sum.res
// }

// const sum = new Sum(1,2,3)

// console.log(sum.res());
// sum.add(2).add(5).add(10);
// console.log(sum.res());

// console.log(sum)

///////////////////////********* 3 *****////////////////////////////////
// function Sum (...args) {
//   Object.defineProperty(this, 'res', {
//     configurable: false,
//     enumerable: true,
      
//     get: function() {
//       return args.reduce((sum, arg) => sum += arg, 0)
//     },

//     set: function() { }
      
//   })
  
//   Object.setPrototype
//   const sum = new Sum(1, 2, 3, 5)
  
//   console.log(sum)
//   console.log(sum.res)
//   sum.add(2)
//   console.log(sum.res);
  
// const sum = new Sum(1, 2, 3, 5)

// console.log(sum)
// console.log(sum.res)
// sum.add(2)
// console.log(sum.res);


///////////////////////////////
// function Sum (...args) {
//   this.sum = args.reduce((sum, el) => sum += el, 0)
// }

// Sum.prototype.add = function(num) {
//   this.sum += num
//   return sum
// }

// Sum.prototype.res = function() {
//   return this.sum
// }

// const sum = new Sum(1,2,3)
// console.log(sum)

// sum.add(2).add(10).add(-14)
// console.log(sum.res())

// console.log([1,2,3,4].slice(-4));

// console.log([1,2,3,4].map((el, i, arr) => arr[arr.length - 1 -i]))

// const numbs= []

// function myRandom(min = 1, max = 9) {
//   const random = Math.round(Math.random() * (max - min) + min)

//   if(numbs.includes(random)) {
//     myRandom(min, max)
//   } 

//   numbs.push(random)
//   console.log(numbs);
//   return random
// }

// myRandom(1, 9)
// console.log(numbs);

// function returnNumber (str) {
//   let newStr = ''

//   for(let i = 0; i < str.length; i += 1) {
//     if (Number(str[i])) {
//       newStr += str[i]
//     }
//   }

//   return Number(newStr)
// }

// console.log(returnNumber("$100"))

// function numberform (num) {
//   const numberFormat = new Intl.NumberFormat()

//   return numberFormat.format(num)
// }

// console.log(numberform(1000.2))
// console.log(numberform(1000000))
// console.log(numberform(100000000))

// function retNum (num) {
//   return String(num).split('').reverse().map((el, idx, arr) => !((idx + 1) % 3) ? " " + el : el).reverse().join('') + ".00"
// }

// console.log(retNum(100000))
// console.log(retNum(1000))
// console.log(retNum(100000000))

///////////////////////////////////////////////////////////////////////////

// console.log([1, 2, 2, 3, 3, 4, 6, 6, 9, 0, 11, 3]
//   .filter((el, i, arr) => arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])))

///////////////////////////////////////////////////////////////////////////////////

// const matrix = [
//   ['lamp', 'block', 'lamp', 'block', 'lamp'],
//   ['block', 'block', 'block', 'block', 'block'],
//   ['lamp', 'block', 'lamp', 'block', 'lamp'],
//   ['block', 'block', 'block', 'block', 'block'],
//   ['lamp', 'block', 'lamp', 'block', 'lamp'],
//   ['block', 'block', 'block', 'block', 'block'],
//   ['lamp', 'block', 'lamp', 'block', 'lamp']
// ]

// function Vcl (arr, val) {
//   if (val < 1 && val > 3) {
//     return 'Erro enter valu 1 - 3'
//   }

//   const res = []

//   if (val === 1) {
//     for (let i = 0; i < arr.length; i += 1) {
//       const dif = arr[i].filter(el => el === 'lamp').map((el, i) => !(i % 2) ? el + 1 : el)
//       res.push(arr[i].map((el) => el === 'lamp' ? dif.shift() : el))
//     }
//   }

//   if (val === 2) {
//     for (let i = 0; i < arr.length; i += 1) {
//       if (!(i % 4)) {
//         res.push(arr[i].map(el => el === 'lamp' ? el + 2 : el))
//       } else {
//         res.push(arr[i])
//       }
//     }
//   }

//   if (val === 3) {

//   }

//   return res
// }

// console.log('value = 1  ');
// console.table(Vcl(matrix, 1))

// console.log('value = 2  ');
// console.table(Vcl(matrix, 2))

// console.log('value = 3  ');
// console.table(Vcl(matrix, 3))

////////////////////////////////***freez() ***/////////////////////////////////////////

// Object.prototype.myFreez = function (obj) {
//   Object.preventExtensions(obj)

//   Object.getOwnPropertyNames(obj).forEach(item => {
//     Object.defineProperty(obj, item, {
//       configurable: false,
//       writable: false,
//       enumerable: false
//     })
//   })
// }

// const a = {
//   n: 1,
//   b: 2,
//   c: 3
// }

// const b = Object.create(a)
// b.c = 33
// b.u = 100

// Object.myFreez(b)

// console.log(b);
// // b.c = 222
// // b.p = 102

// // Object.myFreez(a)
// // delete a.b

// delete b.n
// console.log(b)

///////////////////////////////////////////////////////////
/////////////////////// Object.is() ///////////////////////

// Object.prototype.myIs = function (x, y) {
//   // if (x === y) {
//   //   return x !== 0 || 1/x === 1/y
//   // } else {
//   //   return x !== x && y !== y
//   // }

//   return x === y ? x !== 0 || 1/x === 1/y : x !== x && y !== y
// }

// console.log(Object.myIs(1, 1));
// console.log(Object.myIs(0, 0));
// console.log(Object.myIs(-0, 1));
// console.log(Object.myIs(Infinity, -Infinity));
// console.log(Object.myIs('Infinity', 'Infi2nity'));


////////////////////////////////////////////////////////////////////////////

// const arr = ["0,1,0,1", "1,1,1,1", "0,1,0,1", "1,1,1,1"]

// function pre(arr) {
//   const ar = arr.map(item => item.split(',').map(el => Number(el)))

//   return ar

//   // const ar = arr.map(item => item.split(',').map(el => Number(el)))
   
//   // const res = []

//   // for (let i = 0; i < ar.length; i += 1) {
//   //   let dir = []

//   //   for (let j = 0; j < ar[i].length; j += 1) {
//   //     // ar[i][0] > ar[i][1] ? dir.push(ar[i][0]) : dir.push(ar[i][1])
//   //     ar[i][0] > ar[i][1] ? dir.push(ar[i][0]) : dir.push(ar[i][1])
//   //     // ar[i][1] === ar[i][2] ? dir.push(ar[i][1]) : dir.push(ar[i][2])
//   //   }

//   //   if (dir.length === 4) {
//   //     res.push(dir)
//   //     dir = []
//   //   }  
      
//   // }

//   // return res
// }

// console.log(pre(arr))



///////////////////////////////////////////////////////////

// const arr = [1, 23, 29, 19, 19, 18, 9, 19]
//   .filter((el, i, arr) => String(arr[i]).slice(-1) === "9" && String(arr[i + 1]).slice(-1) === "9").length


// console.log(arr);


// const a = {
//   a: 1
// }

// const b = {
//   b: 2,
//   c: 1,
//   g: 4
// }

// function sumObg(...args) {
//   return args.reduce((sum, el) => sum += )
// }

// console.log(sumObg(a, b));


// console.log('sdadss'.includes(""));

/////////////////// requrse map() ////////////////////

Array.prototype.reqMap = function (cb, thisArg) {
  const res = []
  let i = 0

  return req.bind(this, i, cb, thisArg, res)()
}

function req(i, cb, thisArg, res) {
  if(i < this.length) {
    res.push(cb.call(thisArg || void 0, this[i], i, this))
              
    i++

    return req.call(this, i, cb, thisArg, res)
  }

  return res
}


console.log([1,2,3,4,5].reqMap(el => el * 2));