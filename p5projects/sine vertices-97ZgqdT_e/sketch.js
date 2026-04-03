let rotation = 0;
let angle = 0

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
}

function draw() {
  background(200, 100, 60);
  noFill();
  stroke(60,100,50);
  translate(200, 200);
  const r = 60
  ellipse(0,0, 2 * r)
//   rotate(rotation);
//   beginShape();
//   g =  map(sin(time), -1, 1, PI, 0.01)

//   for (let i = 0; i < TWO_PI; i += 0.1) {
//     const radius = 100;
//     const angle = i;
//     let r2 = radius + random(-6,6)
//     let x = cos(angle) * r2
//     let y = sin(angle) * r2;
//     vertex(x, y);
//   }

//   endShape(CLOSE);
  const x = cos(angle) * r 
  const y = sin(angle) * r
  let r2= 10
  ellipse(x,y, 2 * r2)
  let x2 = cos(0) * r2
  let y2 = sin(0) * r2
  line(r+x2,r+y2,x2+50, y2)
  angle += 0.01
  // time += 0.01
}
