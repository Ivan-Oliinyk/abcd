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

// Array.prototype.reqMap = function (cb, thisArg) {
//   const res = []
//   let i = 0

//   return req.bind(this, i, cb, thisArg, res)()
// }

// function req(i, cb, thisArg, res) {
//   if(i < this.length) {
//     res.push(cb.call(thisArg || void 0, this[i], i, this))
              
//     i++

//     return req.call(this, i, cb, thisArg, res)
//   }

//   return res
// }


// console.log([1,2,3,4,5].reqMap(el => el * 2));

///////////////////////////////////////////////////////
//////// мой reduce() рекурсия внешняя

// Array.prototype.reqReduce = function(cb, init) {
//   let res = init || 0
//   let i = 0

//   return rec.call(this, i, cb, res)
// }

// function rec(i, cb, res) {
//   if (this.length > i) {
//     res = cb.call(null, res, this[i], i, this)
//     i++
//     return rec.call(this, i, cb, res)
//   }

//   return res
// }

// console.log([1,2,3,4].reqReduce((sum, el) => sum += el, 0))
// console.log([10, 20, 30, -5].reqReduce((sum, el) => sum += el, 0));

///////////////////////////////////////////////////////
//////// мой reduce() рекурсия внутренняя

// Array.prototype.reqReduce = function (cb, init) {
//   let res = init || 0
//   let i = 0

//   function rec () {
//     if(this.length > i) {
//       res = cb.call(null, res, this[i], i, this)
//       i++
//       rec.call(this)      
//     }
    
//     return res
//   }

//   rec.call(this)

//   return res
// }

// console.log([1,2,3,4].reqReduce((sum, el) => sum += el, 0))
// console.log([10, 20, 30, -5].reqReduce((sum, el) => sum += el, 0));


// const arr = [[2,6,7], [11,8,3], [6,4,3]]

// const multMatrix = arr => arr.map(el => el.map(item => item % 2 ? item * Math.min(...arr.flat(arr.length)) : item))
// console.log(multMatrix(arr));

// String.prototype.mySplit = function (sep, limit) {
//   if (sep === undefined) {
//     return [this]
//   }

//   let res = []

//   if (sep === "") {
//     let i = 0 

//     while(i < this.length) {
//       res.push(this[i])
//     }
//     console.log(res);

//     return res
//   }
  
//   const length  = this.length
//   let i = this.indexOf(sep)
//   let start = 0
  
//   while ( i !== -1 ) {
//     res.push(this.slice(start, i))
//     start = i + sep.length
//     i = this.indexOf(sep, start)
//   }

//   res.push(this.slice(start))
//   return res
// }

// console.log('12323'.mySplit(""))


// console.log('1231233'.match('12'))

// const arr = [1,2, [2,3, [3]]]
// arr.flat(-1)
// console.log(arr);

// console.log('123144241'.repeat());

// console.log(parseInt('21px', 10))
// const getIdCb = () =>  "id" + String(Date.now())
// console.log(getIdCb());
// console.log(getIdCb());
// console.log(getIdCb());

// console.log([].concat([1], [3]))

// function move(arr){
//   return [].concat(arr.slice(-1), arr.slice(0, -1))
// }

// console.log(move([1,2,3]))

// Array.prototype.move = function(iter = 1) {
//   return [].concat(this.slice(-iter), this.slice(0, -iter))
// }

// console.log([1,2,3])
// console.log([1,2,3].move())
// console.log([1,2,3].move().move())
// console.log([1,2,3].move().move().move())
// console.log([1,2,3].move().move().move().move())
// console.log([1,2,3].move().move().move().move().move())
// console.log([1,2,3].move().move().move().move().move().move())

// String.prototype.padding = function (init) {
//   return this.split("").reduce((sum, el, i) => sum += init.repeat(i) + el, '')
// }

// console.log('aaaa'.padding('_'))
// console.log('012345'.padding('_'))

// const arr = [1,2, 'Poly']

// console.log(arr.find(el => el === 'Poly'))

// [1,2,3].forEach(function(el){this.push(a)}, a)

// String.prototype.myConcat = function (...args) {
//   return args.reduce((res, el) => res += el, this)
// }

// console.log("123".myConcat('333,777,888,999'))

// String.prototype.myIncludes = function(search, pos) {
//   if (pos <= 0 || pos === '') {
//     pos = 0
//   }

//   if (pos > this.length || pos + search.length > this.length) {
//     return false
//   }

//   return this.indexOf(search, pos) !== -1
// }

// console.log('12312323'.myIncludes(23, 7));

// String.prototype.myIndexOf = function(search, pos = 0) {
//   if (search === '') {
//     return Number(pos) > this.length ? this.length : Number(pos)
//   } else if (search.length  + Number(pos) > this.length) {
//     return -1
//   } 
  
//   typeof Number(pos) !== 'number' || Number(pos) < 0  ? pos = 0 : pos = Number(pos)

//   for (let i = pos; i < this.length; i+= 1) {
//     if(this.slice(i, String(search).length + i) === String(search)){
//       return i
//     }
//   }

//   return -1
// }

// console.log('1231 2353'.myIndexOf(' ', "-213"));
// console.log('1231 2353'.indexOf(' ', "-212"));

// const arr = [1,2,3,4,5]
// console.log(arr.entries());

// console.log(arr.splice(2, 2, 31));

// console.log(arr);

// const arr = [1,2,2,3]
// console.log(arr.unshift('2'));
// console.log(Math.abs("udefined"));
// console.log(parseFloat('23px'));
// console.log(Number.parseFloat('23px'));
// console.log(typeof 234.56.toPrecision(7));
// console.log(0.023456.toPrecision(7));

// console.log([1,[2,[3,[4]]]].flat(2));

// const arr = ['f', 's', 'a', 'A', 'q', 'j']

// console.log(arr.sort());

// console.log('123456789'.substring(7, 3));

// Array.myIsArray = function (arr) {
//   return arr instanceof Array
// }

// console.log(Array.myIsArray([1,2]));
// console.log(Array.myIsArray({}));
// console.log(Array.myIsArray('sdad'));

///////////////////// myPush мой push ///////////////////////

// Array.prototype.myPush = function(...args) {
//   this.splice(this.length, 0, ...args.flat())

//   return this.length
// }

// let arr = [1,2,3]
// console.log(arr.myPush([66, 88]))
// console.log(arr)

///////////////////// myShift мой shift ///////////////////////
// Array.prototype.myShift = function () {
//   return this.splice(0, 1)
// }

// const arr = [1,2,3,4]
// console.log(arr.myShift());
// console.log(arr);


///////////////////// myUnShift мой unshift ///////////////////////
// Array.prototype.myUnShift = function (el) {
//   this.splice(0, 0, el)
//   return this.slice(0,1)
// }

// const arr = [1,2,3,4]
// console.log(arr.myUnShift(2));
// console.log(arr);

///////////////////// myFilter мой filter внешняя рекурсия ///////////////////////
// Array.prototype.myRecFiltrer = function(cb, thisArg) {
//   let res = []
//   let i = 0

//   rec.call(this, i, cb, res)

//   return res
// }

// function rec(i, cb, res) {
//   if(this.length > i) {
//     if(cb.call(this, this[i], i, this)) {
//       res.push(this[i])
//     }
    
//     i++
//     return rec.call(this, i, cb, res)
//   }

//   return res
// }

// console.log([1, 2, 3, 5, 6, 7, 8 ,9].myRecFiltrer(el => el % 2));

// console.log('13123'.match('31'));

// console.log([1,2,3,'Vasia',1,2].find(el => el === "Vasia"));

// console.log(parseFloat('123.23123213ps'));

// const a = {
//   Object.defineProperty(this, "x", {
//     writable: false,

//     get
//   })
// }

// const arr = [9, [2, 3, [6, 3, 7]], [2]]

// Array.prototype.multMin = function () {
//   const min = Math.min(...this.flat(Infinity))
//   const res = []
//   let i = 0
  
//   function rec(i < this.length) {

//   }

// } 

// console.log(arr.multMin());

// const arr = [2, 3, 5, 7, 9, 10, 2, 3, 5, 3]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array.prototype.firstAndLastIndexOf = function (value) {
//   return this.reduce((res, el, i) => {
//     if (el === value) {
//       res[1] = i
//     }

//     if (res[0] === -1) {
//       res[0] = i
//     }
    
//     return res    
//   },[-1, -1] )
// }

// Array.prototype.firstAndLastIndexOf = function (value) {
//   const res = []
//   this.filter((el, i) => el === value ? res.push(i) : res)

//   return res.length > 0 ? [res[0], res[res.length -1]] : [-1, -1]
// }

// Array.prototype.firstAndLastIndexOf = function (value) {
//   const res = [-1, -1]
  
//   for(let i = 0; i < this.length; i++) {
//     if (this[i] === value) {
//       res[1] = i

//       if (res[0] === -1) {
//         res[0] = i
//       }
//     }
//   }

//   return res
// }
// Array.prototype.firstAndLastIndexOf = function (value) {
//   let res = []
//   let i = 0

//   while(this.length > i) {
//     if (this[i] === value) {
//       res.push(i)
//     }

//     i++
//   }

//   res.length || res[-1, -1] 
//   return [res[0], res[res.length -1]]
// }

// Array.prototype.firstAndLastIndexOf = function (value) {
//   let res = [-1, -1]
//   let i = 0

//   function rec(i) {
//     if (this.length > i) {
//       if (this[i] === value) {
//         res[1] = i

//         if (res[0] === -1) {
//           res[0] = i
//         }
//       } 

//       i++

//       return rec.call(this, i)
//     }
//   }

//   rec.call(this, i)

//   return res
// }


// Array.prototype.firstAndLastIndexOf = function (value) {
//   let res = [-1, -1]
//   let i = 0
//   const temp = this

//   function rec() {
//     if (temp.length > i) {
//       if (temp[i] === value) {
//         res[1] = i

//         if (res[0] === -1) {
//           res[0] = i
//         }
//       } 

//       i++

//       return rec()
//     }
//   }

//   rec(i)

//   return res
// }

// Array.prototype.firstAndLastIndexOf = function (value) {
//   return this.reduce((res, el, i) => {
//     if(el === value) {
//       res[1]= (i)

//       if (res[0] === -1) {
//         res[0] = i
//       }
//     }

//     return res
//   }, [-1, -1])
// }

Array.prototype.firstAndLastIndexOf = function (value) {
  const temp = this.map((el, i) => el === value ? i : -1)
    .filter(el => el !== -1)

  return temp.length ? [temp[0], temp[temp.length -1]] : temp[0] = -1 
}


const arr = [2, 3, 5, 7, 1, 9, 10, 5, 2, 3, 5, 3]

console.log(arr.firstAndLastIndexOf(5));
console.log(arr.firstAndLastIndexOf(6));
console.log(arr.firstAndLastIndexOf(1));
