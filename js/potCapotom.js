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
//   const newArr = []

//   for (let i = this.length - 1; i >= 0; i -= 1) {
//     newArr.push(this[i])
//   }

//   return newArr
// }

// console.log([1, 2, 3, 4, 5].reverse1());


// ************* reduse() *****************************************************

// Array.prototype.reduce1 = function (cb, initial) {
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
//     if (cb.call(thisArg || this, this[i], i, this)) {
//         res.push(this[i])
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