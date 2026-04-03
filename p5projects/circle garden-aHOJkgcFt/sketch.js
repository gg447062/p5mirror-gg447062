let diam = 0
let circles = []
function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 30; i++) {
    const x = round(Math.random() * 400)
    const y = round(Math.random() * 400)
    const velocity = round(Math.random() * (200 - 50) + 50)
    const sizeMult = round(Math.random() * (100 - 25) + 25)
    circles.push(new Circle(x, y, color(0, 210, 210), velocity, sizeMult))
  }
}

function draw() {
  background(0, 0, 255);
  
  circles.forEach((circle) => {
    circle.oscillate()
  })
  
  diam += 1
}

class Circle {
  constructor(x, y, color, velocity, sizeMult){
    
    this.x = x
    this.y = y
    this.color = color
    this.velocity = velocity
    this.sizeMult = sizeMult
  }
 
  reset() {
    const x = round(Math.random() * 400)
    const y = round(Math.random() * 400)
    this.x = x;
    this.y = y
  }
  
  oscillate() {
    stroke(0, 0, 255)
    // noStroke()
    fill(this.color)
    let d = this.sizeMult * sin(diam / this.velocity )
    if (d < 0.5 && d > -0.5) {
      this.reset()
    }

    circle(this.x, this.y, d)
  }
  
}