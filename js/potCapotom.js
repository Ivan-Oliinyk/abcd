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

String.prototype.myIndexOf = function (str) {
  if (typeof str !== 'string') {
      return false;
  }

  return this.split("").reduce((prev, item, i, arr) => {
    if (arr.slice(i, i + str.length).join('') === str) {
      arr.length = 0
      return i
    }
    
    return prev
  }, -1)
}

console.log('3a1ad1ad1'.myIndexOf('ad1'));



