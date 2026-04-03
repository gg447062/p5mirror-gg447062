let as = []
let cs = []
let ps = []
let weight = 20

function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  background(290, 100, 90)
  
  strokeWeight(weight)
  strokeCap(ROUND)
  strokeJoin(ROUND)
  noFill()
  
  as.push([140, 140])
  as.push([-140, -140])
  cs.push([160, 0])
  cs.push([-160, 0])
  ps.push(new Point(cs[0][0], cs[0][1], 0))
  ps.push(new Point(cs[1][0], cs[1][1], 1))
}

function draw() {
  background(290, 100, 90)
  translate(width/2, height/2) 
  stroke(100, 100, 40)
  
  beginShape()
  vertex(as[0][0], as[0][1])
  bezierVertex(cs[0][0], cs[0][1], cs[1][0],cs[1][1], as[1][0], as[1][1])
  endShape()
  
  stroke(200, 100, 50)
  as.forEach(a => point(a[0], a[1]))
  
  ps.forEach(p => p.display())
}


function mousePressed() {
    ps.forEach(p => p.checkClicked())
}

function mouseDragged() {
  ps.forEach(p => p.update())
}

function mouseReleased() {
  ps.forEach(p => p.release())
}


function Point (x,y, id) {
  this.x = x
  this.y = y
  this.id = id
  this.d = weight
  this.clicked = false
  
  this.display = function () {
    stroke(0,100,50)
    point(this.x, this.y)
  }
  
  this.checkClicked = function() {
 
    let mX = mouseX - width/2
    let mY = mouseY - height/2
      if (dist(mX,mY,this.x,this.y) <= this.d/2) {
        this.clicked = true
    }
  }
  
  this.update = function() {
    if (this.clicked) {
      let mX = mouseX - width/2
      let mY = mouseY - height/2
      this.x = mX
      this.y = mY
      cs[this.id][0] = mX
      cs[this.id][1] = mY
    }
  }
  
  this.release = function() {
    if (this.clicked) this.clicked = false
  }
}
