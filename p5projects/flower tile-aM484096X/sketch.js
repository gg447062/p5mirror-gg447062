
// fix flower animation
// make each flower a tile with the flower as a cutout,
// make control points and anchors based on tile width

let pink, orange, blue, yellow, green, bg
let flowers = []
let canvasDim = 400
let bgL = 38
let reverse = false
let amount

function setup() {
  createCanvas(canvasDim, canvasDim);
  colorMode(HSL)
  pink = color(330, 100, 58)
  orange = color(14, 100, 58)
  blue = color(200, 100, 58)
  yellow = color(46, 100, 58)
  green = color(100, 100, 44)

  noStroke()
  
  bg = color(100, 100, bgL)
  amount = 2
  
  let h = height
  for (let i = 0; i < amount; i++) {
     for (let j = 0; j < amount; j++) {
       const x = i * 2 + 1
       const y = j * 2 + 1
       let petals = 8
       // petals = 8 + j + i
       let color
       let innerColor
       
       if (j % 2 ) {
         color = i % 4 ? orange : pink
       } else {
         color = i % 4 ? pink : orange
       }
       
       innerColor = color === orange ? green : yellow
       
       const newFlower = new Flower(
         h/amount, 
         x, 
         y, 
         petals, 
         color, 
         innerColor
       )
       newFlower.update()
       flowers.push(newFlower)
      
       
     }
  }

}

function draw() {
   oscillateBg()
   background(bg)


  flowers.forEach(flower => {
    flower.update()
    flower.drawFlower()
  })
   
}

function oscillateBg() {

  let speed = 0.25
  
  if (bgL > 70 && !reverse) {
    reverse = true
  } else if (bgL < 38 && reverse) {
    reverse = false
  }
  
  if (reverse) {
    bgL-= speed
  } else {
    bgL+= speed
  }
  bg = color(300, 100, bgL)
 
}


class Flower {
  constructor(size, posX, posY, petals, color, innerColor) {
    this.anchors = []
    this.controls = []
    this.centerPoints = []
    this.size = size / 2
    this.posX = posX
    this.posY = posY
    this.petals = petals
    this.color = color
    this.innerColor = innerColor
    this.rotation = 0
  }
  
   createAnchors() {
  this.anchors = []
  let vertices = this.petals * 2;
  let spacing = 360 / vertices
  let first = []
  
  for (let i = 0; i < vertices; i++) {
    let angle = i * spacing
    let r = this.size / 1.06
    
    let x = cos(radians(angle)) * r
    let y = sin(radians(angle)) * r
    if (i === 1) {
      first.push(x,y)
     
    }
      if (i % 2) {
        this.anchors.push([x,y])
    } 
    
  }
  this.anchors.push([first[0], first[1]])
  
}

 createControls() {
  this.controls = []
  let vertices = this.petals;
  let spacing = 360 / vertices
  
  for (let i = 0; i < vertices + 1; i++) {
    let angle = i * spacing
    let r 
    let r2
    
    if (i % 2) {
      r = this.size / 4
     
      
    } else {
      r = this.size / 8
    }
    
    const x = cos(radians(angle)) * r
    const y = sin(radians(angle)) * r
    this.controls.push([x,y])
  }
}

 createCenter() {
  this.centerPoints = []
  const vertices = 60
  const spacing = 360/vertices
  for(let i = 0; i < vertices; i++) {
     let r = this.size / 3
  
    const angle = spacing * i
    const x = cos(radians(angle)) * r
    const y = sin(radians(angle)) * r
    this.centerPoints.push([x,y])
  }
}

 drawFlower() {
  push()
   const transX = this.size * this.posX
   const transY = this.size * this.posY
   translate(transX, transY)
   rotate(this.rotation)

   fill(this.color)
   rect(-this.size, -this.size, this.size * 2)
   fill(blue)
   beginShape()
    vertex(-this.size, this.size);
      vertex(this.size, this.size);
      vertex(this.size, -this.size);
      vertex(-this.size,-this.size);
      beginContour()
   
   for(let i = 0; i < this.anchors.length; i++) {
      let anchor = this.anchors[i]
      let control = this.controls[i]
      if (i === 0) {
        vertex(anchor[0], anchor[1])
      } else {
        quadraticVertex(control[0], control[1], anchor[0], anchor[1])
      }
    }
     endContour()
    endShape()

    fill(this.innerColor)
    beginShape()
    for(let i = 0; i < this.centerPoints.length; i++) {
      const centerPoint = this.centerPoints[i]
      vertex(centerPoint[0],centerPoint[1])
    }
    endShape()
  pop()

}
  
  update() {
    if (frameCount % 6 === 0) {
      this.createAnchors()
      this.createControls()
      this.createCenter()
      // this.rotation += 0.05
      }
  }
 
}

