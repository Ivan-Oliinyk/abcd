function Render (width, height,animationTime) {
  this.width = width
  this.height = height
  this.animationTime = animationTime

  this.buildContainer = function () {
    const container = document.createElement('div')
    container.style.width = `${width}px`
    container.style.height = `${height}px`
    container.style.backgroundColor = 'green'
    document.body.appendChild(container)

    console.log(container);
    return container
  }

  // buildContainer()
    
}

Render.prototype.registerOut = function (cb) {

}

Render.prototype.add = function(fig, x, y ) {
  
}

Render.prototype.move = function(id, x, y, cb) {

}

Render.prototype.stop = function() {

}

function Squere (size) {
  // this.width = size
  // this.height = size
  this.createFigure = function () {
    const box = document.createElement('div')
    box.style.backgroundColor = 'red'
    box.style.width = size + 'px'
    box.style.height = size + 'px'

    container.appendChild(box)
  }
}

const render = new Render(1024, 768, 300)
render.buildContainer()
console.log(render)

console.log(container)

const square = new Squere (10)
square.createFigure()
console.log(square)


// const container = document.createElement('div')
// container.style.width = `${render.width}px`
// container.style.height = `${render.height}px`
// container.style.backgroundColor = 'green'

// document.body.appendChild(container)

// const box = document.createElement('div')
// box.style.backgroundColor = 'red'
// box.style.width = square.width + 'px'
// box.style.height = square.height + 'px'

// container.appendChild(box)




