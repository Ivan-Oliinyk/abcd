// function sumMatrix(arr) {
//   let length = arr[0].length
//   let height = arr.length
//   let res = []
//   let resDif = []

//   for (let i = 0; i < height / 2; i++) {
//     for (let j = 0; j < length / 2; j++) {
//       resDif.push(
//         arr[i][j] + 
//         arr[i][length - 1 - j] + 
//         arr[height - 1 -i][j] + 
//         arr[height - 1 -i][length - 1 -j]
//       )

//       if(resDif.length === arr.length / 2) {
//         res.push(resDif)
//         resDif = []
//       }
//     }
//   }

//   return res
// }

// console.log(sumMatrix( [
//   [1,  2,  2,  9 ],
//   [1,  27,  3,  1 ],
//   [18,  11,  2,  6],
//   [1,  2,  13,  1]
// ] ));

// console.log(sumMatrix( [
//   [1,  2,  2,  9, 1,  2,  2,  9 ],
//   [1,  27,  3,  1, 1,  2,  2,  9 ],
//   [18,  11,  2,  6, 1,  2,  2,  9],
//   [1,  2,  13,  1, 1,  2,  2,  9],
//   [1,  2,  2,  9, 1,  2,  2,  9 ],
//   [1,  27,  3,  1, 1,  2,  2,  9 ],
//   [18,  11,  2,  6, 1,  2,  2,  9],
//   [1,  2,  13,  1, 1,  2,  2,  9]
// ] ));

// console.log(sumMatrix( [
//   [1,  2,  2,  9, 3, 6 ],
//   [1,  27,  3,  1, 3, 6 ],
//   [18,  11,  2,  6, 3, 6],
//   [1,  2,  13,  1, 3, 6],
//   [18,  11,  2,  6, 3, 6],
//   [1,  2,  13,  1, 3, 6]
// ] ));

function Sum (...args) {
  Object.defineProperty(this, 'sum', {
    configurable: false,
    enumerable: true,
      
    get: function() {
      return args.reduce((sum, arg) => sum += arg, 0)
    },

    set: function() { }
     
  })
  
  Object.setPrototypeOf(this, {add: function(value) {
    return sum += value
  }})
}

const sum = new Sum(1, 2, 3, 5)

console.log(sum)
console.log(sum.sum)
sum.add(2)
console.log(sum.sum);