let movers = [];
let attractor, repeller, repeller2;
function setup() {
  colorMode(HSL);
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    const x = random(width);
    const y = random(height);
    mover = new Mover(x, y, 20);
    movers.push(mover);
  }
  attractor = new Attractor(width / 2, height / 2, 60);
  repeller = new Attractor(340, 340, 30);
  repeller2 = new Attractor(60, 60, 30);
}

function draw() {
  background(200, 100, 50, 0.2);

  for (let mover of movers) {
    mover.update();
    mover.show();
    repeller.attract(mover);
    repeller2.attract(mover);
    attractor.attract(mover);
  }
  attractor.show();
  repeller.show();
  repeller2.show();
}
