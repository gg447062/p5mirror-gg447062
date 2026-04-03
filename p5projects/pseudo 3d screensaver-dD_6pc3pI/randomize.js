let spheres = []
let amount = 30
let radius = 90
let timeout = 8
const orangeHue = 21;
const pinkHue = 311
const greenHue = 115
const blueHue = 208
const bgHSL = [206, 56, 100, 50]


function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  
  generateSphere(5, greenHue, 220)
  generateSphere(30, pinkHue, 40)
  generateSphere(20, blueHue, radius)
  
 background(bgHSL[0], bgHSL[1], bgHSL[2], bgHSL[3])
}

function draw() {
  
  if (frameCount % 240 === 0) {
    background(bgHSL[0], bgHSL[1], bgHSL[2], bgHSL[3])
  }
  
  
  for (let i = 0; i < spheres.length; i++) {
    spheres[i].update()
  }
 
 
}





// +++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++



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
    this.upperBound = 600 + ( this.radius * 2)
    this.lowerBound = 0 - (this.radius * 2)
  }
  
  draw() {
    stroke(10)
    strokeWeight(2)
 
  radicalGradient(
    this.x + 20, this.y - 20, 0,
    this.x + 20, this.y - 20, 50,
    color(54, 78, 92),
     color(this.color, 78, 92)
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
     this.xVelocity *= -1
   } else if (this.y > this.upperBound || this.y < this.lowerBound) {
     this.yVelocity *= -1
   }
    
    this.x += this.xVelocity
    this.y += this.yVelocity
    
    this.draw()
  }
  
}

function generateSphere(a, color, radius) {
  for (let i = 0; i < a; i ++) {
    let x = Math.random() * 600
    let y = Math.random() * 600
    let xV = Math.random() * (5 - 10) + (5)
    let yV = Math.random() * (5 - 10) + (5)
    
    spheres.push(new Sphere(x, y, xV, yV, color, radius))
  }
}
