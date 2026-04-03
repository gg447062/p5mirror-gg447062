
let stroke_opacity = 0.4
let c_array = []
let c_width
let offset = 0
let amount_x = 9
let rotation = 403

function setup() {
  createCanvas(550, 550);
 
  pixelDensity(1)
  redoArray()
  
}

function draw() {
  background(253, 145, 255)
  angleMode(DEGREES)
  
  c_array.forEach((c, i) => {
    c.update()
    // c.draw()
  })
  
  if (frameCount % 2 === 0) {
    // rotation -= 0.01
    // translate(rotation, rotation)
    // redoArray()
  }
}

class C {
  constructor(x, y, d) {
    this.x = x;
    this.y = y
    this.d = d
    this.direction = 'close'
    this.maxHeight = 0.4
    this.greenMult = this.maxHeight
    // // this.greenMult = 0.76
    this.lastBlink = 0
  }
  
  draw() {
    this.drawTopCircle(this.x, this.y, this.d)
    this.drawBottomCircle(this.x, this.y, this.d)
 
  }
  
   drawBottomCircle(x, y, d) {
   fill(0,225,0)
  stroke(`rgba(255, 0, 255, ${stroke_opacity})`)
     const w = d * 0.74
     const h = d * this.greenMult
  ellipse(x, y, w, h)
  }

  drawTopCircle(x, y, d) {
  fill(250, 245, 142)
   stroke(`rgba(0, 0, 255, ${stroke_opacity})`)
  const mult = 1
  ellipse(x, y, d * mult, d * mult )
  
  }
  
  blink() {
    if (frameCount > this.lastBlink + 220) {
       if (this.direction === 'open') {
        this.greenMult += 0.02
      } else {
        this.greenMult -= 0.02
      }
      if (this.direction == 'open' && this.greenMult >= this.maxHeight) {
       this.lastBlink = frameCount
        this.direction = 'close'
      } else if (this.direction === 'close' && this.greenMult < 0.04) {
      this.direction = 'open'
    }
 
    }
     
  }
  
  update() {
    this.blink()
    this.draw()
  }
}




function redoArray () {
  background(0, 155, 255, 0.9)
  c_array = []
  
  c_width = width / amount_x 
  
  // offset = c_width * 0.5
  
  for (let i = 0; i < amount_x + 4; i++) {
    for (let j = 0; j < amount_x + 2; j++) {
      let posX = i * c_width - offset
      let posY = j * c_width - offset
    c_array.push(new C(posX, posY, c_width / 1.25))
    }
  }
}