
// fix flower animation
// make each flower a tile with the flower as a cutout,
// make control points and anchors based on tile width

let flowers = []

function setup() {
  createCanvas(600, 400);
  colorMode(HSL)
  background(200, 100, 58)
  noStroke()
  
  let amount = 3
  
  for (let i = 0; i < amount; i++) {
    let w = round(((i + 1 % amount) * 0.3) - 0.1, 2)
    console.log(w)
    const petals = 8
    flowers.push(new Flower(0.8, w, 0.5, petals))}

}

function draw() {
  background(200, 100, 58)

  flowers.forEach(flower => {
    flower.update()
    flower.drawFlower()
  })
   
}


class Flower {
  constructor(mult, posW, posH, petals, ) {
    this.anchors = []
    this.controls = []
    this.centerPoints = []
    this.mult = mult
    this.posW = posW
    this.posH = posH
    this.petals = petals
  }
  
   createAnchors() {
  this.anchors = []
  let vertices = this.petals * 2;
  let spacing = 360 / vertices
  let first = []
  
  for (let i = 0; i < vertices; i++) {
    let angle = i * spacing
    let r = random(52, 54) * this.mult
    let r2 = sin(frameCount) * 1.2 + width/8 * this.mult
   
    let x = cos(radians(angle)) * r2
    let y = sin(radians(angle)) * r2
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
      r = random(40,44) * this.mult
      r2 = sin(frameCount) + width * 0.1 * this.mult
      
    } else {
      r = random(78,82) * this.mult
      r2 = sin(frameCount) + width * 0.2 * this.mult
    }
    
    const x = cos(radians(angle)) * r2
    const y = sin(radians(angle)) * r2
    this.controls.push([x,y])
  }
}

 createCenter() {
  this.centerPoints = []
  const vertices = 60
  const spacing = 360/vertices
  for(let i = 0; i < vertices; i++) {
     let r = random(30,30.4) * this.mult
     let r2 = sin(frameCount) * -1 + 30 * this.mult
  
    const angle = spacing * i
    const x = cos(radians(angle)) * r2
    const y = sin(radians(angle)) * r2
    this.centerPoints.push([x,y])
  }
}

 drawFlower() {
  push()
   translate(width*this.posW, height*this.posH)
   fill(330, 100, 58)

   beginShape()
   for(let i = 0; i < this.anchors.length; i++) {
      let anchor = this.anchors[i]
      let control = this.controls[i]
      if (i === 0) {
        vertex(anchor[0], anchor[1])
      } else {
        quadraticVertex(control[0], control[1], anchor[0], anchor[1])
      }
    }
    endShape()

    fill(46, 100, 58)
    beginShape()
    for(let i = 0; i < this.centerPoints.length; i++) {
      const centerPoint = this.centerPoints[i]
      vertex(centerPoint[0],centerPoint[1])
    }
    endShape()
  pop()

}
  
  update() {
    if (frameCount % 24 === 0) {
      this.createAnchors()
      this.createControls()
      this.createCenter()
      }
  }
 
}

