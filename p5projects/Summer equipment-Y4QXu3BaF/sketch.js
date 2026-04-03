function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(0)
  noStroke()
  fill(0, 255, 0)
  ellipse(200, 200, 100)
  push()
  rotate(-45)
  rect(-13, 160, 25, 100)
  pop()
  push()
  rotate(45)
  rect(270, -120, 25, 100)
 pop()
  ellipse(120, 120, 50)
  ellipse(300, 100, 50)
  
}