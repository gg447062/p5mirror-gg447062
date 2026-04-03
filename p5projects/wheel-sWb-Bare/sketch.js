let rotation = 0;
let angle = 0

function setup() {
  createCanvas(600, 400);
  colorMode(HSL);
}

function draw() {
  background(200, 100, 60);
  noFill();
  stroke(60,100,50);
  translate(100, 200);
  const r = 60
  ellipse(0,0, 2 * r)
  const x = cos(angle) * r 
  const y = sin(angle) * r
  let r2= 10
  ellipse(x,y, 2 * r2)
  line(x,y,160, y)
  square(160, y-60, 60)
  let y2 = map(y, -r, r, -1.5 * r, 1.5 * r)
  ellipse(210, y-10, 20)
  line(210, y-10, 340, y2)
  push()
  translate(-50, -10)
  rect(340, y2,100,20)
  pop()
  angle += 0.1
  rotation += 0.001
  // time += 0.01
}
