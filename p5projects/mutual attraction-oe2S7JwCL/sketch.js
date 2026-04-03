let movers = [];
let sun 

function setup() {
  colorMode(HSL);
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    const pos = p5.Vector.random2D()
  
    const vel = pos.copy()
    vel.setMag(random(1,10))
    vel.rotate(PI/2)
    pos.setMag(random(100, 200))
    const m = 20
    mover = new Mover(pos.x,pos.y,vel.x,vel.y,m);
    movers.push(mover);
  }
  sun = new Mover(0,0,0,0,300)

}

function draw() {
  background(200, 100, 50, 0.3);
  translate(width/2, height/2)
  
  for (let mover of movers) {
    sun.attract(mover)
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other)
      }
    }
  }
  for (let mover of movers) {
    mover.update();
    mover.show();
  }
  

}
