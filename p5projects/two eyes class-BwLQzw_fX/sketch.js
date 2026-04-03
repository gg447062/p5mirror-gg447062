let pink, green, darkBlue, lightBlue, yellow
let h, w, h2
let cloudArray = []
let colorArray = []
let eyes
let mouse

function setup() {
  createCanvas(600, 400);
  
  h = height
  w = width
  pink = color(245, 112, 250)
  green = color(93, 212, 38)
  darkBlue = color(0, 10, 122)
  lightBlue = color(78, 189, 252)
  yellow = color(237, 219, 21)
  colorArray.push(green,darkBlue,yellow, pink)
  stroke(darkBlue)
  strokeWeight(1.75)
  strokeCap(ROUND)
  
  for (let i = 0; i < 4; i++) {
     const y = random(0.2, 0.8)
      const x = random(-0.6, 0)
    cloudArray.push(new Cloud(x, y))
  }

  eyes = new Eye(20, w/2 - 20, -76, w/2 + 20, w - 20)
  // background(lightBlue);
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

function mouseMoved() {
  mouse = (w/2 - mouseX) / 1800
  console.log(mouse)
}

class Eye {
  constructor (lStart,lEnd,outlineH, rStart, rEnd) {

    this.lStart = lStart
    this.lEnd = lEnd
    this.rStart = rStart
    this.rEnd = rEnd
    this.outlineH = outlineH
    this.s = 50
    this.ratio = 360 / this.s
    this.pupilDiam = 0.3
    this.midPoint = h/2
  }

  
  drawOutline() {
    // fill(pink)
    fill(green)
    beginShape()
      vertex(-1, h+1);
      vertex(w+1, h+1);
      vertex(w+1, -1);
      vertex(-1,-1);
        beginContour()
          vertex(this.lStart, this.midPoint + 10)
          quadraticVertex(5, h * 0.5, this.lStart, this.midPoint - 10)
          quadraticVertex(w*0.25, -this.outlineH * 1.2, this.lEnd, this.midPoint - 10)
          quadraticVertex(w/2-5, this.midPoint, this.lEnd, this.midPoint + 10)
          quadraticVertex(w/4, h + this.outlineH, this.lStart, this.midPoint + 10)
        endContour()
    beginContour()
          vertex(this.rStart, h/2 + 10)
          quadraticVertex(w/2+5, h * 0.5, this.rStart, h / 2 - 10)
          quadraticVertex(w*0.75, -this.outlineH*1.2, this.rEnd, h/2 - 10)
          quadraticVertex(w-5, h/2, this.rEnd, h / 2 + 10)
          quadraticVertex(w*0.75, h + this.outlineH, this.rStart, h/2 + 10)
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
          const x = cos(radians(i * this.ratio)) * h/2*this.pupilDiam;
          const y = sin(radians(i * this.ratio)) * h/2*this.pupilDiam;
          vertex(x+w*(-mouse + 0.25), y+h*0.5);
        }
      endContour()
    beginContour()
        for(let i = 0; i < this.s; i++) {
          const x = cos(radians(i * this.ratio)) * h/2*this.pupilDiam;
          const y = sin(radians(i * this.ratio)) * h/2*this.pupilDiam;
     
          vertex(x+w*(-mouse + 0.75), y+h*0.5);
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
    this.color = pink
  }
  
  
  draw() {
  fill(255, 253, 237)
    // fill(this.color)
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
        this.x += 0.006
      } else {
        this.y = random(0.2, 0.8)
        this.x = floor(random(-2, 0))
        // const i = floor(random(0, colorArray.length))
        // this.color = colorArray[i]
      }
    }
  }
}
