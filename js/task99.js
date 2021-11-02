// console.log("hell")

// function Logger (logName) {
//   // this.messageInfo = []
//   loggers = Logger.instance.db 
//   loggers[logName] = {logs: []}

//   this.write = function(message) {
//     loggers[logName].logs.push(message)
//   } 
  
//   this.read = function() {
//     return loggers[logName].logs
//   }

//   this.readAll = function() {
//     return loggers
//   }
// }

// Logger.instance.db = {}

// function Logger (logName) {
//   const store = Logger.prototype.store
//   store[logName] = []

//   this.write = function (...element) {
//     store[logName].push(...element )
//   }

//   this.read = function () {
//     return store[logName]
//   }

//   this.readAll = function () {
//     return store
//   }
// }

// Logger.prototype.store = {}

// const log1 = new Logger("log1")
// const log2 = new Logger("log2")

// log1.write("hello", "hello1", "hello2")
// console.log(log1.read())

// log2.write("zdraste")
// console.log(log2.read())

// console.log(log1.readAll())
// console.log(log2.readAll())

// console.log(log1);
// console.log(log2);


/////////////////////////////////
function a(cb){
  console.log(this)
   return cb
 }
 
 function b( cb){
  console.log(this)
   return cb
 }
 
 function c(cb){
  console.log(this)
   return cb
 }
 
 function d(cb){
  console.log(this)
   return cb
 }
 
 
 function runner(args){
 
 let aContext = this.a
 let bContext = this.b
 let cContext = this.c
 let dContext = this.d
 
 return a.bind(aContext, b.bind(bContext, c.bind(cContext, d.bind(dContext))))
 
 }
  
 runner(1)(2)(3)(4)(5)