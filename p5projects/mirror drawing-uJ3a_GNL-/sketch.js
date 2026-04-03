let prevX = null;
let prevY = null;
let currentX = null;
let currentY = null;
let brushColor;
let brushShape = "circle";
let button,
  buttonOrange,
  buttonBlue,
  buttonPink,
  buttonCircle,
  buttonSquare,
  sliderSize;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  background(100, 100, 50);
  brushColor = [200, 100, 50];
  buttonClear = createButton("clear");
  buttonOrange = createButton("orange");
  buttonBlue = createButton("blue");
  buttonPink = createButton("pink");
  buttonSquare = createButton("square");
  buttonCircle = createButton("circle");
  sliderSize = createSlider(1, 100, 50);
  buttonClear.position(0,450)
  buttonOrange.position(50,450)
  buttonBlue.position(112,450)
  buttonPink.position(158,450)
  buttonSquare.position(204, 450)
  buttonCircle.position(266,450)
  sliderSize.position(320, 450)
  buttonClear.mousePressed(clearPoints);
  buttonOrange.mousePressed(() => {
    setColor("orange");
  });
  buttonBlue.mousePressed(() => {
    setColor("blue");
  });
  buttonPink.mousePressed(() => {
    setColor("pink");
  });
  buttonSquare.mousePressed(() => {
    setShape("square");
  });
  buttonCircle.mousePressed(() => {
    setShape("circle");
  });
}

function clearPoints() {
  background(100, 100, 50);
}

function setColor(color) {
  switch (color) {
    case "blue":
      brushColor = [200, 100, 50];
      break;
    case "orange":
      brushColor = [40, 100, 50];
      break;
    case "pink":
      brushColor = [0, 100, 80];
  }
}

function setShape(shape) {
  brushShape = shape;
}

function mouseMoved() {
  currentX = mouseX - width / 2;
  currentY = mouseY - width / 2;
  prevX = currentX;
  prevY = currentY;
}

function mouseDragged() {
  currentX = mouseX - width / 2;
  currentY = mouseY - width / 2;
  push();
  translate(width / 2, height / 2);
  fill(brushColor);
  drawLine();
  pop();
}

function drawLine() {
  if (prevX == null || prevY == null) {
    prevX = currentX;
    prevY = currentY;
    return;
  }
  strokeWeight(sliderSize.value());
  stroke(brushColor);
  line(prevX, prevY, currentX, currentY);
  line(-prevX, -prevY, -currentX, -currentY);
  line(-prevX, prevY, -currentX, currentY);
  line(prevX, -prevY, currentX, -currentY);
  prevX = currentX;
  prevY = currentY;
}

// function drawPoint() {
//   noStroke();
//   if (brushShape == "circle") {
//     circle(currentX, currentY, sliderSize.value());
//     circle(-currentX, currentY, sliderSize.value());
//     circle(currentX, -currentY, sliderSize.value());
//     circle(-currentX, -currentY, sliderSize.value());
//   } else if (brushShape == "square") {
//     square(currentX, currentY, sliderSize.value());
//     square(-currentX, currentY, sliderSize.value());
//     square(currentX, -currentY, sliderSize.value());
//     square(-currentX, -currentY, sliderSize.value());
//   }
// }
