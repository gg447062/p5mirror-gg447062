let w, h, maxW, minW, maxH, minH, t,a;
function setup() {
  createCanvas(640, 360);
  colorMode(HSL);
  noStroke();
  w = width;
  h = height;
  minW = w - 50;
  maxW = w + 5;
  minH = h - 10;
  maxH = h + 5;
  t = 0;
  a = 0
}

function draw() {
  background(200, 100, 40);
  fill(0, 0, 0);
  translate(width/2,height/2)
    rotate(a)
  ellipse(0,0, w, h);
  oscillate();
  t+=0.06
}

function oscillate() {
  w = map(sin(t), -1,1,minW, maxW)
  h = map(cos(t), -1,1,minH, maxH)
  // a = map(sin(t), -1,1,-0.5,0.5)

}

function keyPressed() {
  if (key === "s") {
    saveGif("ellipse", 5);
  }
}
