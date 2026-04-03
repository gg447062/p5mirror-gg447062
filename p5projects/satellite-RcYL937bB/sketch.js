let planet
let singer
let t = 0

function setup() {
  createCanvas(400, 400);
  planet = new Planet(width/2,height/2,100)
  singer = new Singer(width/4,height/2,20)
  singer.orbit(planet)
}

function draw() {
  background(220);
  planet.render()
  singer.update()
  singer.render()
}


class Singer {
  constructor(x, y, w, sound) {
    this.x = x;
    this.y = y;
    this.w = w;
    // this.sound = sound;
    // this.sound.amp(0.5);
    // this.sound.playMode('untilDone');
    this.isIntersecting = false;
    // this.orbitR = dist(this.x, this.y, planetX, planetY);
    this.orbitR = dist(this.x,this.y,planet.pos.x,planet.pos.y)
    this.angle = 0;
    this.angularV = 0;
    this.angularA = 0;
    this.maxV = 0
  }

  orbit(planet) {
    const G = 5;
    let vel = sqrt((G * planet.mass) / this.orbitR);
    let acc = (G * planet.mass) / pow(this.orbitR, 2);
    this.maxV = vel;
    this.angularA = acc;
  }

  update() {
    if (this.angularV < this.maxV) {
       this.angularV += this.angularA;
    }
   
    this.angle += this.angularV/100;
 
  }

  render() {
    push();
    noFill()
    circle(planet.pos.x, planet.pos.y, this.orbitR * 2);
     translate(planet.pos.x,planet.pos.y);
    let x = sin(this.angle) * this.orbitR
    let y = cos(this.angle) * this.orbitR
    
   
    // rotateX(HALF_PI);

    let mult = this.isIntersecting ? 1.1 : 1;
    fill(24)
    translate(x,y)
    circle(0,0,this.w)
    // cylinder(this.w * 0.5 * mult, this.w / 2, 8, 1);
    pop();
  }

  checkIntersect(comets) {
    this.isIntersecting = false;
    for (let comet of comets) {
      if (this.intersects(comet.pos.x, comet.pos.y)) {
        this.sound.play();
        this.isIntersecting = true;
      }
    }
  }

  intersects(x, y) {
    return (
      x > this.x - this.w * 0.5 &&
      x < this.x + this.w * 0.5 &&
      y > this.y - this.w * 0.5 &&
      y < this.y + this.w * 0.5
    );
  }
}

class Planet {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 20;
  }

  getStrength(mover, force) {
    const distanceSq = constrain(force.magSq(), 250, 2500);
    const G = 5;
    const strength = (G * (this.mass * mover.mass)) / distanceSq;
    return strength;
  }

  attract(mover) {
    const force = p5.Vector.sub(this.pos, mover.pos);
    const strength = this.getStrength(mover, force);
    force.setMag(strength);
    mover.applyForce(force);
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(100, 255, 100, 20);
    // rotateY(t * 0.001);
    // sphere(this.r * 2, 20, 20);
    circle(0,0,this.r/2)
    pop();
  }
}