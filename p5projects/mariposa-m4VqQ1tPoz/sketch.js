function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  background(300, 80, 80)
  translate(width/2, height/2)
  stroke(0,0,30)
  strokeWeight(2)
  fill(90, 100, 50)
  
  drawWings()
  drawBody()
  
}

function drawWings() {
     beginShape()
  // left wing bottom
  vertex(-6, 0)
  quadraticVertex(-150,-26, -100, 76)
  quadraticVertex(-50, 150, -6, 0)
  endShape(CLOSE)
  
  beginShape()
  // left wing top
  vertex(-6, -20)
  quadraticVertex(-70, -140, -140, -120)
  quadraticVertex(-160, -100, -140, -20)
  quadraticVertex(-120, 20, -6, 0)

  endShape(CLOSE)

    beginShape()
  // right wing bottom
  vertex(6, 0)
  quadraticVertex(150,-26, 100, 76)
  quadraticVertex(50, 150, 6, 0)
  endShape(CLOSE)
  
  beginShape()
  // right wing top
  vertex(6, -20)
  quadraticVertex(70, -140, 140, -120)
  quadraticVertex(160, -100, 140, -20)
  quadraticVertex(120, 20, 6, 0)

  endShape(CLOSE)
}

function drawBody() {
   // body
  fill(0,0,30)
  beginShape()
  vertex(-2, 40)
  quadraticVertex(-8, 10, -4, 4)
  quadraticVertex(-15, -20, -4, -30)
  quadraticVertex(-10, -35, -3, -40)
  quadraticVertex(0, -42, 3, -40)
  quadraticVertex(10, -35, 4, -30)
  quadraticVertex(14, -20, 4, 4)
  quadraticVertex(8, 10, 2, 40)
  quadraticVertex(0, 50, -2, 40)
  endShape()
 drawAntennae()
}

function drawAntennae() {
   // left
  noFill()
  beginShape()
  vertex(-2, -42)
  quadraticVertex(-10, -100, -32, -100)
  endShape()
  //right
  noFill()
  beginShape()
  vertex(2, -42)
  quadraticVertex(10, -100, 32, -100)
  endShape()
}