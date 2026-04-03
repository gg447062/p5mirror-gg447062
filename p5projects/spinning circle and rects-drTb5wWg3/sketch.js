let t = 0
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  let r = 1000
  noStroke();
  translate(r*0.8,0,0)
  rotateY(t) 
  translate(0, 100, 0);
  rotateX(HALF_PI);

  fill(200,200,244);

  beginShape();
  for (let i = 0; i < 100; i++) {
    let angle = map(i, 0, 100, 0, TWO_PI);
    let radius = r;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    let z = 0;
    vertex(x, y, z);
  }

  endShape();

  let v = 10;
  for (let i = 0; i < v; i++) {
    let angle = map(i, 0, v, 0, TWO_PI);
    let radius = r *0.8;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    let z = 0;
    push();
    translate(x, y, z);
    rotateZ(angle)
    let c = map(sin(angle),-1,1,129,255)
    fill(c,128,200);
    stroke(c,128,0);
    

    box(200,100,500);
    pop();
  }
  t+= 0.008
}
