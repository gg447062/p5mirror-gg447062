let x = 0
let y = 0
let h = 600
let froggys = []


function preload() {
  img = loadImage('img/froggy_kawaii.png')
}

function setup() {
  createCanvas(600, 600)
  background(0, 255, 0)
  for (let i = 0; i < 12; i++) {
    let newX = x + i * 25;
    let newY = y + i * 25;
    let newH = h - i * 50;
    let d = round(120 / (i + 1))
    let o = round((i + 1) * 5)
    console.log(d, o)
    froggys.push(new Froggy(newX, newY, newH, d, o))
  }
}


function draw() {
  
   froggys.forEach(froggy => froggy.update())
}


class Froggy{
  constructor(x, y, h, d, o) {
    this.x = x;
    this.y = y;
    this.height = h
    this.max = this.y + o 
    this.min = this.y - o
    this.reverse = false
    this.started = false
    this.delay = d
    this.offset = o
  }
  
  switch() {
    if (this.y > this.max) {
      this.reverse = true
    } else if (this.y < this.min) {
      this.reverse = false
    }
  }
  
  oscillate() {
    if (this.reverse) {
      this.y -= 1
    } else {
      this.y += 1
    }
  }
  
  draw() {
    image(img, this.x, this.y, this.height, this.height)
  }
  
  update() {
    if (frameCount == this.delay) {
       this.started = true
     }
   if (this.started) {
      this.switch()
      this.oscillate()
      this.draw()
   } else {
     this.draw()
   }
  }
}



