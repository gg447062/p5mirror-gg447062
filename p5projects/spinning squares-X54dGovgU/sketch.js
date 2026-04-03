let squares = []
let blue, pink
let amount
function setup() {
  createCanvas(600, 600);
  pixelDensity(1)
  colorMode(HSL)
  pink = color(240, 100, 90)
  blue = color(200, 100, 40)
  amount = 3

  generateSquares()
}

function draw() {
  background(blue);
  
  squares.forEach(square => {
    square.update()
    square.draw()
  }) 
}

function generateSquares() {
  squares = []
  for (let i = 0; i < amount+1; i++) {
    for (let j = 0; j < amount+1; j++) {
      let w = width  / amount 
      let h = height / amount
      let x = i * 2
      let y = j * 2 
      let idVal = i + j
      
      let square = new Square(x, y, w, h,0.4 , idVal)
      // square.update()
      squares.push(square)
      
    }
  }
}

class Square {
  constructor(x,y, w, h, rotation, id) {
    this.x = x;
    this.y = y;
    this.w = w / 2
    this.h = h / 2
    this.rotation = rotation
    this.id = id
  }
  
  update() {
    if (frameCount % 6 == 0) {
      if (this.id % 2) {
        this.rotation -= 0.02
      } else {
        this.rotation += 0.03
      }
      
    }
  }
  
  draw() {
    push()
    const x = this.w * this.x
    const y = this.h * this.y
    translate(x, y)
    rotate(this.rotation)
    noStroke()
    fill(pink)
    rect(-this.w, -this.h, this.w*2, this.h*2)
    pop()
  }
}