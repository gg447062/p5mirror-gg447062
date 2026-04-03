let movers = [];
function setup() {
  colorMode(HSL);
  createCanvas(600, 400);
  pixelDensity(1);
  for (let i = 0; i < 10; i++) {
    launch()
  }
}

function mousePressed() {
  launch();
}

function launch() {
  const m = random(1, 10);
  const v = random(4,12)
  const x = random(0, width)
  const mover = new Mover(x, 0, m, 2);
  movers.push(mover);
}

function draw() {
  background(100, 100, 50);
  fill(200,100,50,0.5)
  rect(0, height/2, width,height/2)
  const gravity = createVector(0, 0.1);
  for (let mover of movers) {
    const weight = p5.Vector.mult(gravity, mover.mass);
    if (mover.pos.y > height/2) {
       mover.drag()
    }
    
    mover.applyForce(weight);

    // mover.friction()
    mover.update();
    mover.edges();
    mover.show();
  }
}
