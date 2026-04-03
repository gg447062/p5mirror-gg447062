let vehicle;
let target;
function setup() {
  createCanvas(600, 600);
  colorMode(HSL);
  vehicle = new Vehicle(100, 100);
  target = new Target(400, 400);
}

function draw() {
  background(240, 60, 40);
  // target.update();
  // target.show();
  vehicle.edges()
  vehicle.perlinWander();
  // vehicle.applyForce(steering);
  vehicle.update();
  vehicle.show();
}
