let w, h, w2, h2
let butterfly
let frame = 0
let capturing = true

function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  w = width
  h = height
  
  background(300, 80, 80)
  stroke(0,0,30)
  strokeWeight(2)
  
  butterfly = new Butterfly(w, h, 1)
  
}

function draw() {
   background(300, 80, 80)
    butterfly.draw()
  if( frameCount == 0 || frameCount % 60 == 0) {    
    if (capturing) capture()
    butterfly.update()
  }
 

}

class Butterfly {
  constructor(w,h, mult){
    this.x = w/2
    this.y = h/2 
    this.h = h * mult
    this.w = w * mult
    this.max = this.w
    this.speed = 10
    this.flap = true
  }
  
  drawWings() {
    fill(90, 100, 50)
    beginShape()
    // left bottom
    vertex(-this.w*0.01, 0)
    quadraticVertex(-this.w*0.4,-this.h*0.06, -this.w*0.25, this.h*0.2)
    quadraticVertex(-this.w*0.13, this.h*0.4, -this.w*0.01, 0)
    endShape(CLOSE)

     beginShape()
    // left top
    vertex(-this.w*0.01, -this.h*0.05)
    quadraticVertex(-this.w*0.18, -this.h*0.35, -this.w*0.35, -this.h*0.3)
    quadraticVertex(-this.w*0.4, -this.h*0.25, -this.w*0.35, -this.h*0.05)
    quadraticVertex(-this.w*0.3, this.h*0.05, -this.w*0.01, 0)
    quadraticVertex(-this.w*0.025, -this.h*0.025, -this.w*0.01, -this.h*0.05)
    endShape(CLOSE)
    
    beginShape()
    // right bottom
    vertex(this.w*0.01, 0)
    quadraticVertex(this.w*0.4,-this.h*0.06, this.w*0.25, this.h*0.2)
    quadraticVertex(this.w*0.13, this.h*0.4, this.w*0.01, 0)
    endShape(CLOSE)

     beginShape()
    // right top
    vertex(this.w*0.01, -this.h*0.05)
    quadraticVertex(this.w*0.18, -this.h*0.35, this.w*0.35, -this.h*0.3)
    quadraticVertex(this.w*0.4, -this.h*0.25, this.w*0.35, -this.h*0.05)
    quadraticVertex(this.w*0.3, this.h*0.05, this.w*0.01, 0)
    quadraticVertex(this.w*0.025, -this.h*0.025, this.w*0.01, -this.h*0.05)
    endShape(CLOSE)

  }
  
  drawBody() {
    fill(0,0,30)
    beginShape()
    vertex(-this.h*0.005, this.h*0.1)
    quadraticVertex(-this.h*0.02, this.h*0.025, -this.h*0.01, this.h*0.01)
    quadraticVertex(-this.h*0.04, -this.h*0.05, -this.h*0.01, -this.h*0.08)
    quadraticVertex(-this.h*0.025, -this.h*0.09, -this.h*0.01, -this.h*0.1)
    quadraticVertex(0, -this.h*0.105, this.h*0.01, -this.h*0.1)
    quadraticVertex(this.h*0.025, -this.h*0.09, this.h*0.01, -this.h*0.08)
    quadraticVertex(this.h*0.038, -this.h*0.05, this.h*0.01, this.h*0.01)
    quadraticVertex(this.h*0.02, this.h*0.025, this.h*0.005, this.h*0.1)
    quadraticVertex(0, this.h*0.13, -this.h*0.005, this.h*0.1)
    endShape()
  }
  
  drawAntennae() {
     // left
    noFill()
    beginShape()
    vertex(-this.h * 0.005, -this.h * 0.105)
    quadraticVertex(-this.h * 0.025, -this.h * 0.25, -this.h * 0.08, -this.h * 0.25)
    endShape()
    //right
    noFill()
    beginShape()
    vertex(this.h * 0.005, -this.h * 0.105)
    quadraticVertex(this.h * 0.025, -this.h * 0.25, this.h * 0.08, -this.h * 0.25)
    endShape()
  }
  
  draw() {
    
    translate(this.x, this.y)
     this.drawBody()
     this.drawAntennae()
     this.drawWings()
    // this.drawBody()
  }
  
  update() {
    if (this.w <= 80) {
      this.flap = false
    } else if (this.w >= this.max && this.flap == false) {
      this.flap = true
      capturing = false
    }
    if (this.flap) {
       this.w -= this.speed
    } else {
      this.w += this.speed
    }
   
  }
  
}

function capture () {
  const canvas = document.querySelector('canvas')
  const png = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = png
  link.download = `butterfly_0${frame}` 
  link.click()
  link.remove()
  frame++
}