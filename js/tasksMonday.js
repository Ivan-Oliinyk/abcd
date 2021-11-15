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
function Sum (...args) {
  Object.defineProperty(this, 'res', {
    configurable: false,
    enumerable: true,
      
    get: function() {
      return args.reduce((sum, arg) => sum += arg, 0)
    },

    set: function() { }
      
  })
  
  Object.setPrototypeOf(this, {add: function(value) {
        console.log(this.res)
        console.log(value)
        return this.res += value
      }
    }
  )
}
  
const sum = new Sum(1, 2, 3, 5)

console.log(sum)
console.log(sum.res)
sum.add(2)
console.log(sum.res);

