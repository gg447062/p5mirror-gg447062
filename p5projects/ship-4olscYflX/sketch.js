let ship;
let attractors = [];
function setup() {
  colorMode(HSL);
  createCanvas(400, 400);
  ship = new Mover(200, 200, 60);
  for (let i = 0; i < 1; i++) {
     let x = i * 300 + 50
    let y = i * 300 + 50
    attractors.push(new Attractor(x,y, 40));
  }
  
  document.addEventListener('keydown', (e) => {
   if (e.keyCode == 82) {
     reset()
   }
  })
}

function reset() {
  background(200, 100, 50);
  attractors = [];
  ship = new Mover(200, 200, 60);
  for (let i = 0; i < 2; i++) {
    let x = i * 300 + 50
    let y = i * 300 + 50
    attractors.push(new Attractor(x,y, 40));
  }
}

function draw() {
  background(200, 100, 50, 0.2);

  for (let attractor of attractors) {
    attractor.attract(ship);
    attractor.show();
  }

  ship.edges();
  ship.drag();
  ship.update();
  ship.show();

  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.1);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.1);
  } else if (keyIsDown(90)) {
    ship.thrust();
  } 
}
