let drawShapeButton, collect
let bgColor = '#4287f5'
let shapeColor = '#e6f542'
let vertexColor = '#ad50fa'
let vertices = []

let drawShape = false
let drawCircles = true
function setup() {
  createCanvas(400, 400);
  pixelDensity(1)
  drawShapeButton = createButton('draw shape')
  collect = createButton('clear vertices')
  drawShapeButton.mousePressed(() => {
    drawShape = true;
    drawCircles = false
  })
  collect.mousePressed(collectVertices)
}

function draw() {
  background(bgColor);
  noStroke()
  // console.log(drawCircles)
   if (drawCircles) {
     drawVertices()
   }
  if (drawShape) {
     createShape()
  }


}

function mousePressed() {
  if (mouseX < 400 && mouseY < 400) {
    vertices.push([mouseX, mouseY])  
  } 
}

function mouseDragged() {
  if (mouseX < 400 && mouseY < 400) {
    vertices.push([mouseX, mouseY])  
  } 
}

function collectVertices() {
 vertices = []
  drawShape = false
  drawCircles = true
}

function createShape() {
 
  fill(shapeColor)
    beginShape();
    for (let i = 0; i < vertices.length; i++) {
  vertex(vertices[i][0], vertices[i][1])
  }
  endShape(CLOSE);
}

function drawVertices() {
  for (let i = 0; i < vertices.length; i++) {
     fill(vertexColor)
  circle(vertices[i][0], vertices[i][1], 10)
  }
}