let x1 = 0
let x2 = 600
let y = 0
let ys1 = [0, 80, 160, 240, 320, 400,]
let ys2 = [40, 120, 200, 280, 360, 440]


function setup() {
  createCanvas(600, 480);
   background(255)
}

function draw() {

  if (frameCount % 5 === 0) {
  for (let i = 0; i < ys1.length; i++) {
    if (i % 2 === 0) {
      drawSquare2(ys2[i], 20, y)
      drawSquare1(ys1[i], 10, -y)
      
    } else {
       drawSquare2(ys2[i], 10, -y)
       drawSquare1(ys1[i], 20, y)
    }
  }
  }
  
  if (frameCount % 30 === 0) {
    y -= Math.floor(Math.random() * (75-10) + 10)
  } else if (frameCount % 60 === 0) {
    y -= Math.floor(Math.random() * (100-50) + (50))
  } else if (frameCount % 240 === 0) {
    y += 300
  }   else {
    y += 0
  }
  
  x1 += 1
  x2 -= 2
}

function drawSquare1(y, offsetX, offsetY) {
    stroke(0, 0, 214)
  fill(255)
  square(x1 - offsetX, y + offsetY, 40)
  ellipse(y + offsetY, x1 - offsetX, 20)
  fill(0, 255, 0)
  square(x1, y + offsetY, 40)
  ellipse(y + offsetY, x1, 20)
}

function drawSquare2(y, offsetX, offsetY) {
    stroke(0, 0, 214)
 fill(0, 255, 0)
  square(x2 + offsetX, y + offsetY, 40)
  ellipse(y + offsetY, x2 + offsetX, 20)
  fill(255)
  square(x2, y + offsetY, 40)
  ellipse( y + offsetY, x2, 20)
}