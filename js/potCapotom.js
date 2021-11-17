// ********** charAt() *****************

// String.prototype.charAt1 = function(idx) {
//   return this[idx]
// }

// console.log('1234'.charAt1(2));

// ********** concat() *****************

// String.prototype.concat1 = function (...args) {
//   let res = this

//   for(let i = 0; i < args.length; i += 1) {
//     res += args[i]
//   }
//   return res

//   // return args.reduce((sum, el) => sum + el , this)
// }

// console.log("123".concat("sdsdsd", '2asd'));
// console.log("123".concat1("sdsdsd", '2asd', '333333'));


// ************* includes() *****************************************************

// String.prototype.includes1 = function (str, pos = 0) {
//     version-1
//   if (typeof pos !== 'number') {
//     pos = 0
//   }
  
//   return pos + this.length > this.length 
//     ? false 
//     : this.indexOf(str) >= 0 
//       ? true
//       : false

  //   version-2
  // if (pos + str.length > this.length) {
  //   return false
  // }

  // if (typeof pos !== 'number') {
  //   pos = 0
  // }

  // return this.indexOf(str) >= 0

  //   version-3
  // let tempThis = ''
  // let tempStr = ''

  // if (typeof pos !== 'number') {
  //   pos = 0
  // }

  // for (let idx = pos; idx<this.length; idx++) {

  //   for (let x=0; x<str.length; x++) {
  //     tempStr += str[x]
  //     tempThis += this[idx+x]
  //   }

  //   if (tempStr === tempThis) { 
  //     return true 
  //   }

  //   tempThis = ''
  //   tempStr = ''
  // }

  // return false

      // version-4
//   if (typeof pos !== 'number') {
//     pos = 0
//   }

//   let res = false 

//   for (let i = pos; i < this.length; i += 1) {
//     if (this.slice(i, i+str.length) === str) {
//       res = true
//     }
//   }

//   return res
// }

// console.log('Evaltolocalthissome'.includes1("this", 2));
// console.log('Evaltolocalthissome'.includes1("this", 'sd'));
// console.log('Evaltolocalthissome'.includes1("thi2s"));


// ************* reverse() *****************************************************

// Array.prototype.reverse1 = function() {
//   // const newArr = []

//   // for (let i = this.length - 1; i >= 0; i -= 1) {
//   //   newArr.push(this[i])
//   // }

//   // return newArr

//   return this.map((el, i, arr) => arr[(this.length - 1) - i])
// }

// console.log([1, 2, 3, 4, 5].reverse1());


// ************* reduse() *****************************************************

// Array.prototype.reduce1 = function (cb, initial = this[0]) {
//   let res = initial

//   for (let i = 0; i < this.length; i += 1) {
//     res = cb.call(this, res, this[i], i, this)
//   }

//   return res
// }

// console.log([1,2,3].reduce1((sum, el, i, arr) => sum += el, 0));

// ************* Object.enties() *****************************************************

// const obj1 = {
//   name: "Alla",
//   age: 29,
//   hasCar: true
// }

// Object.entries1 = function (obj) {
//   if (typeof obj !== 'object') {
//     return 'Error value must be object'
//   }

//   const arr = []

//   for (let key in obj) {
//     arr.push([key, obj[key]])
//   }

//   return arr
// }

// console.log(Object.entries1(obj1))


// ************* filter() *****************************************************
// Array.prototype.filter1 = function(cb, thisArg) {
//   let res = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb.call(thisArg || null, this[i], i, this)) {
//       res.push(this[i])
//     }
//   }

//   return res;
// }

// console.log([1, 2, 5, 7, 9].filter1(el => el >= 7))


// function myFilter(e) {
//   return e === this.val;
// }

// var arr = [1, 1, 1, 2, 2, 3, 3, 78];

// console.log(arr.filter(myFilter, {val: 1}));
// console.log(arr.filter(myFilter, {val: 2}));

// ************* concat() *****************************************************
// String.prototype.concat1 = function (...args) {
//   let res = this

//   return args.reduce((total, el) => total += el, res)
// }


// console.log('fssww'.concat1('22222', 'sd211221', 77));


// ************* lastIndexOf() *****************************************************

// String.prototype.lastIndexOf1 = function(str, pos = 0) {
//   if (typeof pos !== 'number' || pos < 0) {
//     pos = 0
//   }

//   let res = -1

//   for (let i = 0; i < this.length; i += 1) {
//     if (this.slice(i, str.length + i) === str) {
//       res = i
//     }
//   }

//   return res
// }

// console.log('obj1ec1t1234'.lastIndexOf("125", 99.21));
// console.log('obj1ec1t1234'.lastIndexOf1("125", 99.81));


// ************* substring() *****************************************************

// String.prototype.substring1 = function(start, end = this.length - 1) {
//   if()
// }



// console.log('0123456789'.substring(1,2));
// console.log('0123456789'.substring(2,-2));
// console.log('0123456789'.substring("s"));
// console.log('0123456789'.substring("1", '3'));
// console.log('0123456789'.substring("s", 's'));

// ************* flat() *****************************************************

// Array.prototype.flat1 = function (num = 1) {
//   const res = []
//   const count = num
   
//   function doFlat(arr) {
  
//   //   arr.forEach((el) => {
//   //     if(!Array.isArray(el)) {
//   //       res.push(el)
//   //     } else {
//   //       doFlat(el)
//   //     }
//   //   })

//     for (let i = 0; i < arr.length; i+= 1) {
//       !Array.isArray(arr[i]) 
//         ? res.push(arr[i])
//         : doFlat(arr[i])
//     }

//   }

//   doFlat(this)

//   return res
// }

// const arr1 = [1, [2, 3], [5, [6, 7, [8, [9, [10, [11]]]]]]]

// console.log(arr1.flat1());

// Array.prototype.flatMy = function test(n) {
 
//   if(n === 0){
//       return this
//   }
  
//      return this.reduce((acc, el) => {
//       if(Array.isArray(el)){
//         return[...acc, ...test.call( el, n - 1)]
//     }else{
//         return[...acc, el]
//     }
//   }, [])
// }

// console.log([1213231, [3213123123, [3213123123], [3213123123, 
//   [3213123123 ,[3213123123]] ], [3213123123]]].flatMy(-1))

//////////////////////////////////////////////////

// Object.freeze1 = function(obj) {
//   for (const key in obj) {
//     Object.defineProperty(obj, obj[key], {
//       configurable: false,
//       wtritable: true
//     })
//   }
// }

// const obj1 = {
//   a: 2, 
//   b: 3,
//   c: 4
// }

// Object.freeze1(obj1)

// obj1.a = 111

// console.log(obj1);

////////////////////////////////////////////////////

// Array.prototype.myMap = function (cb) {
//   return this.map((el, idx, arr) => cb.call(el, el, idx, arr))
// } 

// const arr1 = [1, 2, 3, 4, 5]

// arr1.myMap(this)


//////////////////////////////////////////

// const arr = [-100, -10, 0, 10, 100]

// // const res = arr.map(el => Math.abs(el)).filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
// const res = arr.map(el => Math.abs(el)).filter((el, i, arr) => arr.indexOf(el) === i)

// console.log(res)

//////////////////////////////////////////////// math.random() ////////////////////////

// Math.random1 = function(start = 0.1, end = 1){
//   return Number(String(Date.now()).slice(-1) * 0.1).toFixed(1s) * (end - start) + start 
// }

// console.log(Math.random1());

//////////////////////////////////////////////////////////////////
//******************* haOwnProperty()

// const obj1 = {
//   a: 2,
//   b: 11,
//   c: undefined,
//   d: false
// }

// const obj2 = Object.create(obj1)

// console.log(obj1);
// console.log(obj2);

// Object.prototype.hasOwnProperty1 = function(value) {
//   return Object.keys(this).includes(value)
// }

// console.log(obj1.hasOwnProperty1("d"));

// console.log(Object.keys(obj2))

// ************* lastIndexOf() *****************************************************

// String.prototype.lastIndexOf1 = function(str, pos = 0) {
//   if (typeof pos !== 'number' || pos < 0) {
//     pos = 0
//   }

//   let res = -1

//   for (let i = 0; i < this.length; i += 1) {
//     if (this.slice(i, str.length + i) === str) {
//       res = i
//     }
//   }

//   return res
// }

// console.log('obj1ec1t1234'.lastIndexOf("125", 99.21));
// console.log('obj1ec1t1234'.lastIndexOf1("125", 99.81));



////////////////////////////////////////////////////
//************************** indexOf() */

// String.prototype.indexOf1 = function (value, pos = 0) {
//   if (typeof pos !== 'number' || pos < 0) {
//     pos = 0
//   }

//   // for (let i = 0; i < this.length; i += 1) {
//   //   if (this.slice(pos + i, value.length + i) === value) {
//   //     return i
//   //   }
//   // }

//   // return -1
  
//   return this.split("").reverse().reduce((res, el, i, arr) => 
//     arr.reverse().slice(pos + i, value.length + i).join('') === value ? res = i  : res += 0, -1)
// }

// console.log('3a1ad1ad1'.indexOf1('ad1'));

// String.prototype.myIndexOf = function (str) {
//   if (typeof str !== 'string') {
//       return false;
//   }

//   return this.split("").reduce((prev, item, i, arr) => {
//     if (arr.slice(i, i + str.length).join('') === str) {
//       arr.length = 0
//       return i
//     }
    
//     return prev
//   }, -1)
// }

// console.log('3a1ad1ad1'.myIndexOf('ad1'));

////////////////////////////////////////////////////
//************************** trim() */ (минус 2 пробела везде)

// String.prototype.myTrim = function () {
//   let res = this;
//   let i = 0;

//   while (true) {
//       if (res.slice(i, i + 2) === '  ') {
//           res = res.slice(0, i) + res.slice(i + 2)
//       } else {
//           i++
//       }

//       if (i === res.length) {
//           return res
//       }
//   }
// }

// console.log('A   Привет   Маша'.myTrim());

////////////////////////////////////////////
//************************** reduce() */

// Array.prototype.reduce1 = function (cb, initV = 0) {
//   let res = initV

//   for (let i = 0; i < this.length; i +=1) {
//     res = cb.call(null, res, this[i], this)
//   }

//   return res
// }


// console.log([1,2,3].reduce1((sum,el) => sum += el, 0));

////////////////////////////////////////////
//************************** replace1() */

// String.prototype.replace1 = function (search, repl) {
//   return this.slice(0, this.indexOf(search)) + repl + this.slice(this.indexOf(search) + search.length)
// }

// console.log("Ехал Грека через реку Грека".replace1('Грека', 'Some'));
// console.log("Ехал Грека через реку Грека".replace1('Ехал', '2Some'));
// console.log('ababab'.replace1('ab', 'cv'));

////////////////////////////////////////////
//************************** repeat() */

// String.prototype.repeat1 = function (count = 0) {
//   if (count < 0) {
//     return "Error"
//   }
  
//   let res = ''

//   while (count) {
//     res += this 
//     count -= 1
//   }

//   return res
// }

// String.prototype.repeat1 = function (count = 0) {
//   // if (typeof count !== 'number') {
//   //   count = 0
//   // }

//   // if (count < 0) {
//   //   return "Error"
//   // }

//   return Array(count).fill(this).join('')  
// }

// console.log('123!'.repeat1());
// console.log('123!'.repeat1(0));
// console.log('123!'.repeat1('sad'));
// console.log('123!'.repeat1(2));
// console.log('1!'.repeat1('2'));

////////////////////////////////////////////
//************************** slice() */

// String.prototype.slice1 = function(a = 0, b = this.length) {
//   let str = ''

//   if (a < b) {
//     for (let i = a; i < b; i += 1) {
//       str += this[i]
//     }
//   } if (a - b < 0) {
//     for (let i = this.length - b; i += 1) {}
//   }

//   return str
// }

// console.log('0123456789'.slice());
// console.log('0123456789'.slice1());

// console.log('0123456789'.slice(5, 7));
// console.log('0123456789'.slice1(5, 7));

// console.log('0123456789'.slice(5, -2));
// console.log('0123456789'.slice1(5, -2));

// console.log('0123456789'.slice(-4, -1));
// console.log('0123456789'.slice1(-4, -1));


////////////////////////////////////////////
// String.prototype.mySlice= function (start = 0, end = this.length - 1) {

//   let str = '' 

//   if (start < 0){
//     start = this.length + start 
//   }

//   if (end < 0){
//     end = this.length + end
//   } 

//   for (let idx = start; idx < end; idx++) {
//       str += this[idx]
//   }

//   return str
// }

// console.log('0123456789'.slice());
// console.log('0123456789'.mySlice());

// console.log('0123456789'.slice(5, 7));
// console.log('0123456789'.mySlice(5, 7));

// console.log('0123456789'.slice(5, -2));
// console.log('0123456789'.mySlice(5, -2));

// console.log('0123456789'.slice(-4, -1));
// console.log('0123456789'.mySlice(-4, -1))


// Array.prototype.mySlice = function (start = 0, end = this.length) {
//   const res = []

//   if (start < 0) {
//     start = this.length + start
//   }

//   if (end < 0) {
//     end = this.length + end
//   }

//   for (let i = start; i < end; i += 1) {
//     res.push(this[i])
//   }

//   return res
// }

// console.log([1,2,3,4,5,6,7].slice(1,3))
// console.log([1,2,3,4,5,6,7].mySlice(1,3))

// console.log([1,2,3,4,5,6,7].mySlice(1))
// console.log([1,2,3,4,5,6,7].slice(1))

// console.log([1,2,3,4,5,6,7].slice(-1,3))
// console.log([1,2,3,4,5,6,7].mySlice(-1,3))

// console.log([1,2,3,4,5,6,7].slice(1,-3))
// console.log([1,2,3,4,5,6,7].mySlice(1,-3))

// console.log([1,2,3,4,5,6,7].slice(-3,-1))
// console.log([1,2,3,4,5,6,7].mySlice(-3, -1))
///////////////////////////////////////////
//************************** every1() */
// Array.prototype.every1 = function (cb, thisArg) {
//   let res = true

//   for (let i = 0; i < this.length; i += 1) {
//     if (!(cb.call(thisArg || null, this[i], i, this))) {
//       res = false
//     }
//   }

//   return res
// }
// console.log('every1');
// console.log([2,4,6].every1(el => el % 2 === 0));
// console.log([2,3,6].every1(el => el % 2 === 0));

// console.log(' ');

////////////////////////////////////////////
//************************** reduce1() */
// Array.prototype.reduce1 = function (cb, initial = this[0]) {
//   let res = initial

//   for(let i = 0; i < this.length; i += 1) {
//     res = cb.call(null, res, this[i], i, this)      
//   }

//   return res
// }

// console.log([1,2,3].reduce1((sum,el) => sum += el, 0));
// console.log('Egryp'.split('').reduce1((sum,el) => sum += el, ''));
// console.log([1,2,3,4,5,6].reduce1((sum,el) => el % 2 === 0 ? sum += el : sum, 0));

// Array.prototype.reduce1 = function (cb, initV = 0) {
//   let res = initV

//   for (let i = 0; i < this.length; i +=1) {
//     res = cb.call(null, res, this[i], this)
//   }

//   return res
// }


// console.log([1,2,3].reduce1((sum,el) => sum += el, 0));

// Array.prototype.myReduce = function (cb, init = this[0]) {
//   let res = init

//   for (let i = 0; i < this.length; i += 1) {
//     res = cb.call(null, res, this[i], i, this)
//   }

//   return res
// }

// console.log([1,2,3,4,5,6,7,8,9,0].myReduce((sum, el) => el % 2 === 0 ? sum += el : sum, 0));
/////////****myEvery()*** */

// Array.prototype.myEvery = function(cb, thisArgs) {
//   for (let i = 0; i < this.length; i += 1) {
//     if(!cb.call(thisArgs || null, this[i], i, this)) {
//       return false
//     }
//   }

//   return true
// }

// console.log([2,3,4,5,6,7].myEvery(el => el >= 2));
// console.log([2,4,6,].myEvery(el => el % 2 === 0));
// console.log([3,4,6,].myEvery(el => el % 2 === 0));


///////////********myFilter() */

// Array.prototype.myFilter = function (cb, thisArgs) {
//   let res = []

//   for (let i = 0; i < this.length; i += 1) {
//     if (cb.call(thisArgs || null, this[i], i, this)) {
//       res.push(this[i])
//     }
//   }

//   return res
// }

// console.log([1,2,3,4,5,6,7,8,9,0].myFilter(el => el % 2));

// Array.prototype.myMap = function (cb, thisArgs) {
//   let res = []
  
//   for (let i = 0; i < this.length; i += 1) {
//     res.push(cb.call(thisArgs || null, this[i], i, this))
//   }

//   return res
// }

// console.log([1,2,3,4,5,6,7,8,9].myMap(el => el * 2));


///////////////////*********myFlat() */

// Array.prototype.myFlat = function (n = 1) {
//   let res = [];

//   function flatArr(arr, n) {
//       arr.forEach(item => {
//           if (Array.isArray(item) && n !== 0) {
//               flatArr(item, n - 1)
//           } else {
//               res.push(item)
//           }
//       })
//   }

//   flatArr(this, n)

//   return res;
// }

// console.log([1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]].myFlat(-2));

// console.log([1,2,3,4].forEach(el => el > 2))



// String.prototype.myIndexOf = function (str) {
//   return this.split('').reverse().reduce((res, el, i, arr) => 
//     arr.slice(i, i + str.length).reverse().join('') === str ? res = i : res,
//     -1
//   )
// }

// console.log('asdfasas'.myIndexOf('as'));


// Array.prototype.myMap = function (cb, thisArgs) {
//   const res = []

//   for(let i = 0; i < this.length; i+= 1) {
//     res.push(cb.call(thisArgs || null, this[i], i, this))
//   }

//   return res
// }

// console.log([1,2,3,4].myMap(el => el *2));

// Array.prototype.myMap = function (cb, thisArgs) {
//   const res = []

//   for (let i = 0; i < this.length; i += 1 ) {
//     res.push(cb.call(thisArgs, this[i], i , this))
//   }

//   return res
// }

// console.log([1,2,3].myMap(el => el * 3));

// Array.prototype.myReduce = function (cb, init = this[0]) {
//   let res = init

//   for (let i = 0; i < this.length; i += 1) {
//     res = cb.call(null, res, this[i], i, this)
//   }

//   return res
// }

// console.log([1,2,3].myReduce((sum, el) => sum += el, 0));

// Array.prototype.myReduce = function (cb, init = this[0]) {
//   let res = init

//   for (let i = 0; i < this.length; i += 1) {
//     res = cb.call(null, res, this[i], i, this)
//   }

//   return res
// }

// console.log([1,2,3].myReduce((sum, el) => sum += el, 0));

// Array.prototype.myEvery = function (cb, thisArg) {
//   for (let i = 0; i < this.length; i += 1) {
//     if (!cb.call(thisArg || null, this[i], i, this)) {
//       return false
//     }
//   }

//   return true
// }

// console.log([2,3,4].myEvery(el => el > 2));

// Array.prototype.myEvery = function (cb, thisArgs) {
//   for (let i = 0; i < this.length; i += 1) {
//     if (!cb.call(thisArgs || null, this[i], i, this)) {
//       return false
//     }
//   }

//   return true
// }

// console.log([3, 6, 9].myEvery(el => el % 3));

// Array.prototype.mySome = function (cb, thisArgs) {
//   for (let i = 0; i < this.length; i += 1) {
//     if (cb.call(thisArgs || null, this[i], i, this)) {
//       return true
//     }
//   }

//   return false
// }

// console.log([1,2,3,4,5].mySome(el => el > 5));

// const arr = [1, 3, 6, 6, 7, 8, 8, 8, 9]
// const arr1 = [1, 2, 3, 89, 3, 21, 4, 4]

// function deleteDubl ([...args]) {
//   return [...args].filter((el, i, arr) => arr.indexOf(el) === i)
// }

// console.log(deleteDubl(arr, arr1));

// console.log('sadq1ds123sd'.match('123'));
// console.log('sadq1ds123sd'.replace('123', '666'));
// console.log('sadq1ds123sd'.search('123'));


// Number.prototype.myFixed = function (n = 0) {
//   let res = 0 

//   for (let i = 0; i < String(this).length; i+= 1) {
    
//   }

//   return res
// }

// let num  = 123.5634

// console.log(num.toFixed(), '|',num.myFixed())
// console.log(num.toFixed(1), '|', num.myFixed(1))
// console.log(num.toFixed(2), '|', num.myFixed(2))
// console.log(num.toFixed(3), '|', num.myFixed(3))
// console.log(num.toFixed(6), '|', num.myFixed(6))
// console.log(45.999.toFixed(2), '|', 45.999.myFixed(2))


// Math.myRound = function (n) {
//   // return Number(String(n).slice(String(n).indexOf('.') + 1,  String(n).indexOf('.') + 2) > 4 
//   //   ? String(n + 1).slice(0, String(n).indexOf('.')) 
//   //   : String(n).slice(0, String(n).indexOf('.'))
//   // )

// if (n >= 0) {
//     return Number(String(n).slice(String(n).indexOf('.') + 1,  String(n).indexOf('.') + 2) > 4 
//       ? String(n + 1).slice(0, String(n).indexOf('.')) 
//       : String(n).slice(0, String(n).indexOf('.'))
//   }
  
// }

// console.log(Math.round(12.47), '|', Math.myRound(12.47));
// console.log(Math.round(12.57), '|', Math.myRound(12.57));
// console.log(Math.round(0.57), '|', Math.myRound(0.57));
// console.log(Math.round(-20.51), '|', Math.myRound(-20.51))
// console.log(Math.round(-20.5), '|', Math.myRound(-20.5))
// console.log(Math.round(-20.49), '|', Math.myRound(-20.49))
// console.log(Math.round(-20.4), '|', Math.myRound(-20.4))

// console.log(void 0);
// console.log(undefined);
// console.log(void 0 === undefined);

/////////// find() ///////////////////////
// Array.prototype.myFind = function(cb, thisArg) {
//   for(let i = 0; i < this.length; i += 1) {
//     if (cb.call(null || thisArg, this[i], i, this)) {
//       return this[i]
//     }
//   }

//   return undefined
// }

// console.log([1,2,3,4].myFind(el => el === 4))
// console.log([1,2,3,4].myFind(el => el === 8))

/////////////////////////////////////////// my freez() /////////////////////////////////////////////////

// Object.prototype.myFreez = function (obj) {
//   Object.preventExtensions(obj)
//   // const props = Object.getOwnPropertyNames(obj)

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


///////////////////// Array.indexOf() ////////////////

// Array.prototype.indexOf1 = function (str, pos = 0) {
//   for(let i = pos; i < this.length; i++) {
//     if (typeof this[i] !== 'string') {
//       if (this[i] === str) {
//         return i
//       } else if (this[i].indexOf(str) !== -1) {
//         return i
//       }
//     }
//   }

//   return -1
// }

//////////////////////////// recurse filter() ///////////////////////////

// Array.prototype.recurseFilter = function (cb, thisArg) {
//   const res = []
//   const count = this.length
//   let i = 0

//   function rec(i) {
//     if (cb.call(thisArg || void 0, this[i], i, this)) {
//       res.push(this[i])
//     }
    
//     i++
        
//     if (i < count) {
//       // rec.call(this, i)
//       reqBind(i)
//     }
//   }

//   // rec.call(this, i)
//   let reqBind = rec.bind(this)

//   reqBind(i)

//   return res
// }

// console.log([1,2,3,4,5,6,7,8,9,10].recurseFilter(el => el % 2));
// console.log([1,2,3,4,5,6,7,8,9,10].recurseFilter(el => !(el % 2)));


///////////////////////////////////////////////////////////////////////////////////

// function req(arr) {
//   let i = 0

//   function rek(i) {
//     console.log(arr[i])

//     i++

//     if (arr.length > i) {
//       rek(i)
//     }
//   }

//   rek.call(this, i)
// }

// req([1,2,3,4,5])

//////////////////////////////////////////////////////////////////////////////////////
/////////////////// requrse map() ////////////////////

// Array.prototype.reqMap = function (cb, thisArg) {
//   const res = []
//   let i = 0

//   function req() {
//     if(i < this.length) {
//       res.push(cb.call(thisArg || void 0, this[i], i, this))
            
//       i++

//       req.call(this)
//     }
//   }

//   req.call(this)

//   return res
// }

// console.log([1,2,3,4,5].reqMap(el => el * 2));

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


////////////////////////////////////////////////////////////////