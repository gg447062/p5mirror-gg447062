let sphere
let timeout = 100 
let capturing = true
let frame = 0
function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  noStroke()
  let myGreen = color(100, 100, 80)
  sphere = new Sphere(-200, 200, 100, 0, myGreen, 200)
  
}

function draw() {
  background(280, 100, 90);
   sphere.draw()
  if (frameCount % 60 == 0 ) {
    if (capturing) capture()
    sphere.update()
  }
 
}

function radicalGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  )
  gradient.addColorStop(0, colorS)
  gradient.addColorStop(1, colorE)
  
  drawingContext.fillStyle = gradient
}

class Sphere {
  constructor(x, y, xV, yV, c, r=radius) {
    this.x = x;
    this.y = y;
    this.xVelocity = xV;
    this.yVelocity = yV;
    this.decay = timeout
    this.radius = r
    this.color = c
    // this.upperBound = 600 + ( this.radius * 2)
    this.upperBound = this.radius * 2
    
    this.lowerBound = 0 - (this.radius * 2)
  }
  
  draw() {
    stroke(10)
    strokeWeight(2)
 
  radicalGradient(
    this.x + 20, this.y - 20, 0,
    this.x + 20, this.y - 20, 50,
    color(50, 100, 80),
     this.color
  );
    noStroke()
    ellipse(this.x, this.y, this.radius)
  }
  
  reset () {
    this.x = Math.random() * 600
    this.y = Math.random() * 600
    this.decay = timeout
  }
  
  update() {
   if (this.x > this.upperBound || this.x < this.lowerBound) {
     capturing = false
     this.xVelocity *= -1
   } else if (this.y > this.upperBound || this.y < this.lowerBound) {
     this.yVelocity *= -1
   }
    
    this.x += this.xVelocity
    this.y += this.yVelocity
    
    this.draw()
  }
  
}

function capture () {
  const canvas = document.querySelector('canvas')
  const png = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = png
  link.download = `sphere_${String(frame).padStart(4,'0')}` 
  link.click()
  link.remove()
  frame++
}