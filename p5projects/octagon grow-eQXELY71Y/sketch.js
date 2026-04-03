let size
let weight 
let amount
let octagons = []
let speed = 12
function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  pixelDensity(1)
  size = 50
  weight = 20
  amount = width/size+weight
  
  for (let i = 0; i < amount; i++) {
    const newSize = (i * size)
    const gap = i * 50
     octagons.push(new Octagon(newSize + gap))
  }
}

function draw() {
  background(100,100,70);
 octagons.forEach(octagon => {
   octagon.apply()
   if (frameCount % 8 == 0) {
     octagon.update()
   }
 })
}




class Octagon {
  constructor(s) {
    this.og = 10
    this.s = s
    this.speed = speed
  }
  
  apply() {
  noFill()
  stroke(320,100,80)
  strokeWeight(weight)
  push()
  translate(width/2,height/2)
  beginShape()
  vertex(-this.s*0.3, -this.s*0.6)
  vertex(this.s*0.3, -this.s*0.6)
  vertex(this.s*0.6, -this.s*0.3)
  vertex(this.s*0.6, this.s*0.3)
  vertex(this.s*0.3, this.s*0.6)
  vertex(-this.s*0.3, this.s*0.6)
  vertex(-this.s*0.6, this.s*0.3)
  vertex(-this.s*0.6, -this.s*0.3)
  vertex(-this.s*0.3, -this.s*0.6)
  endShape()
  pop()
}
  
  update() {
    if (this.s >= width) {
      this.s = this.og
     
    } else {
      this.s += this.speed
  
    }
  }
}