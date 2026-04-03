let heightControl = 50
let rightEnd, leftEnd
let rightControl
let pink, green, darkBlue, lightBlue, yellow
let h, w, h2



function setup() {
  createCanvas(600, 400);
  h = height
  w = width
  // pixelDensity(1)
  pink = color(245, 112, 250)
  green = color(93, 212, 38)
  darkBlue = color(0, 10, 122)
  lightBlue = color(78, 189, 252)
  yellow = color(237, 219, 21)

  rightEnd = width - 20
  leftEnd = 20
  
  background(lightBlue);
  drawCloud()
  stroke(darkBlue)
  strokeWeight(1.5)
    strokeCap(ROUND)
  drawPupil()
  drawWhite()
  drawEye()
  // drawBezierEye()
  
}

function drawEye () {
 
  fill(pink)
  beginShape()
  vertex(-1, h+1);
  vertex(w+1, h+1);
  vertex(w+1, -1);
  vertex(-1, -1);
    beginContour()
     vertex(leftEnd, h/2 + 20)
     quadraticVertex(-10, h / 2, leftEnd, h / 2 - 20)
     quadraticVertex(w/2, -heightControl, rightEnd, h/2 - 20)
     quadraticVertex(w + 10, h/2, rightEnd, h / 2 + 20)
     quadraticVertex(w/2, h + heightControl, leftEnd, h/2 + 20)
     
    endContour()
  endShape()
}

function drawBezierEye () {
  stroke(darkBlue)
  strokeCap(ROUND)
  strokeWeight(2)
  fill(pink)
  beginShape()
  vertex(leftEnd, h/2 - 20)
  bezierVertex(w/6, h/2, w/2, -heightControl, rightEnd, h/2 - 20)
  bezierVertex(w/1.5, h/2, w+10, h/2, rightEnd, h/2 + 20)
  // quadraticVertex(w / 2, h + heightControl, leftEnd, h / 2 + 20)
  endShape()
 
}

function drawWhite () {
  const amount = 50
  const ratio = 360 / amount
  fill(yellow)
  // fill(255)
  beginShape()
  vertex(0, h);
  vertex(w, h);
  vertex(w, 0);
  vertex(0, 0);
  beginContour()
  for(let i = 0; i < amount; i++) {
  const x = cos(radians(i * ratio)) * h/3.25;
  const y = sin(radians(i * ratio)) * h/3.25;
  vertex(x+w/2, y+h/2);
}
  endContour()
  endShape()

}

function drawPupil () {
  const amount = 50
  const ratio = 360 / amount
  fill(green)
  beginShape()
  vertex(0, h);
  vertex(w, h);
  vertex(w, 0);
  vertex(0, 0);
  beginContour()
  for(let i = 0; i < amount; i++) {
  const x = cos(radians(i * ratio)) * h/4;
  const y = sin(radians(i * ratio)) * h/4;
  vertex(x+w/2, y+h/2);
}
  endContour()
  endShape()

}

function drawCloud() {
  fill(255)
  noStroke()
  push()
  translate(w*0.5,h*0.5)
  beginShape()
  vertex(-40,10)
  quadraticVertex(-80, 0, -40, -10)
  quadraticVertex(-40, -30, -18, -25)
  quadraticVertex(0, -50, 18, -25)
  quadraticVertex(40, -30, 40, -10)
  quadraticVertex(80, 0, 40, 10)
  quadraticVertex(0, 18, -40, 10)
 
  endShape()
  pop()
}

// function draw() {
//   background(220);
// }