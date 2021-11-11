function Render(width, height, animationTime){
  this.outCb = []
  this.renderTes = null
  this.animationTime = animationTime
  this.screen = {
    width: width,
    height: height,
    objects: []
  }
}

Render.prototype.render = function(fps) {
  this.renderTes = setInterval(() => {
    this.outCb.map((el, index,arr) => {
      el.call(null, this.screen)
    })
  }, 1000 / fps)

  setTimeout(() => {
    clearInterval(this.renderTes)
  }, this.animationTime)
}

Render.prototype.move = function(id, x, y, cb) {
  return this
}

Render.prototype.add = function(fig, x, y){
  this.screen.objects.push({id: Date.now(), figure: fig, x: x, y: y})
}

Render.prototype.register = function(cb){
  this.outCb.push(cb)
}

Render.prototype.stop = function(){
  clearInterval(this.renderTes)
}

function Square(size){
  this.size = {
    height: size,
    width: size
  }

  return this.size
}

let rend = new Render(1024, 768, 300)
let fig = new Square(10)
let id = rend.add(fig, 110, 100)
rend.register((el) => console.log(el))
// rend.register(() => console.log('test'))
rend.render(30)


// rend.stop()
// rend.move(fig, 111, 111, rend.render(50))
// console.log(rend.screen);
// console.log(rend.outCb);
// console.log(rend);
// console.log(Date.now());