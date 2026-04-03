let pink, green, darkBlue, lightBlue, yellow
let h, w, h2
let cloudArray = []
let eyes

function setup() {
  createCanvas(600, 400);
  
  h = height
  w = width
  pink = color(245, 112, 250)
  green = color(93, 212, 38)
  darkBlue = color(0, 10, 122)
  lightBlue = color(78, 189, 252)
  yellow = color(237, 219, 21)

  stroke(darkBlue)
  strokeWeight(2)
  strokeCap(ROUND)
  
  for (let i = 0; i < 3; i++) {
     const y = random(0.2, 0.8)
      const x = random(-0.6, 0)
    cloudArray.push(new Cloud(x, y))
  }

  eyes = new Eye(20, w - 20, 50)
  
}

function draw() {
  background(lightBlue);
  
  cloudArray.forEach(cloud => {
    cloud.update()
    cloud.draw()
  })
  
  stroke(darkBlue)
  eyes.draw()
  
}


class Eye {
  constructor (l,r,outlineH) {

    this.l = l
    this.r = r
    this.outlineH = outlineH
    this.s = 50
    this.ratio = 360 / this.s
    this.pupilDiam = 0.35
  }

  
  drawOutline() {
    fill(pink)
    beginShape()
      vertex(-1, h+1);
      vertex(w+1, h+1);
      vertex(w+1, -1);
      vertex(-1,-1);
        beginContour()
          vertex(this.l, h/2 + 10)
          quadraticVertex(10, h * 0.5, this.l, h / 2 - 10)
          quadraticVertex(w/2, -this.outlineH * 0.6, this.r, h/2 - 10)
          quadraticVertex(w - 10, h/2, this.r, h / 2 + 10)
          quadraticVertex(w/2, h + this.outlineH * 1.2, this.l, h/2+10)
        endContour()
      endShape()
  }
  
  drawPupil() {
    fill(yellow)
    beginShape()
      vertex(0, h);
      vertex(w, h);
      vertex(w, 0);
      vertex(0, 0);
      beginContour()
        for(let i = 0; i < this.s; i++) {
          const x = cos(radians(i * this.ratio)) * h*this.pupilDiam;
          const y = sin(radians(i * this.ratio)) * h*this.pupilDiam;
          vertex(x+w*0.5, y+h*0.5);
        }
      endContour()
    endShape()
  }
  
  draw() {
    this.drawPupil()
    this.drawOutline()
  }
  
}


class Cloud {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  
  
  draw() {
  fill(255, 253, 237)
  noStroke()
  push()
    translate(w*this.x,h*this.y)
    beginShape()
      vertex(-40,6)
      quadraticVertex(-140, 4, -40, -6)
      quadraticVertex(-28, -28, -10, -22)
      quadraticVertex(0, -50, 18, -42)
      quadraticVertex(48, -80, 100, -42)
      quadraticVertex(140, -40, 132, -18)
      quadraticVertex(268, 2, 118, 6)
    endShape()
  pop()
  }
  
   update() {
    if (frameCount % 2 === 0) {
      if (this.x < 1) {
        this.x += 0.002
      } else {
        this.y = random(0.2, 0.8)
        this.x = random(-1, 0)
      }
    }
  }
}
