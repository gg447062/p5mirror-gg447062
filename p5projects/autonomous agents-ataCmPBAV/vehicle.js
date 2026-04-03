class Vehicle {
  constructor(x, y) {
    this.mass = 1;
    this.max_speed = 2;
    this.max_force = 0.1;
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    this.size = 12;
    this.color = color(100, 100, 50);
    this.thetaOff = 0;
    this.randomOff = 0.6;
    this.wanderRadius = 20
  }

  edges() {
    const offset = this.size * 2;
    if (this.pos.x > width + offset) {
      this.pos.x = -offset;
    } else if (this.pos.x < 0 - offset) {
      this.pos.x = width + offset;
    } else if (this.pos.y > height + offset) {
      this.pos.y = -offset;
    } else if (this.pos.y < 0 - offset) {
      this.pos.y = height + offset;
    }
  }

  flee(target) {
    return this.seek(target).mult(-1);
  }

  seek(target, mode = "seek") {
    const force = p5.Vector.sub(target, this.pos);
    let desired_speed = this.max_speed;

    if (mode == "arrive") {
      let slowRadius = 100;
      let distance = force.mag();
      if (distance < slowRadius) {
        desired_speed = map(distance, 0, slowRadius, 0, this.max_speed);
      }
    }

    force.setMag(desired_speed);
    force.sub(this.vel);
    force.limit(this.max_force);
    return force;
  }

  pursue(vehicle) {
    const target = vehicle.pos.copy();
    const prediction = vehicle.vel.copy().mult(10);
    target.add(prediction);
    return this.seek(target);
  }

  evade(vehicle) {
    const evasion = this.pursue(vehicle).mult(-1);
    return evasion;
  }

  arrive(target) {
    const force = this.seek(target.pos, "arrive");
    return force;
  }
  
  perlinWander() {
    const angle = noise(this.thetaOff) * TWO_PI * 2
    const steering = p5.Vector.fromAngle(angle)
    steering.limit(this.maxForce)
    this.applyForce(steering)
    this.thetaOff += 0.01
  }

  wander() {
    const point = this.vel.copy();
    point.setMag(100);
    point.add(this.pos);
   
    let theta = this.thetaOff + this.vel.heading();
    let x = cos(theta) * this.wanderRadius;
    let y = sin(theta) * this.wanderRadius;

    point.add(x, y);
    const steering = p5.Vector.sub(point, this.pos);
    steering.limit(this.max_force);
    this.applyForce(steering);
    this.thetaOff += random(-this.randomOff, this.randomOff);
    noStroke();
   
    fill(100,100,50);
    circle(point.x + x, point.y + y, 10);
    fill(0, 100, 50);
    circle(point.x, point.y, 14);
    noFill();
    stroke(255);
    circle(point.x, point.y, this.wanderRadius * 2);
  }

  applyForce(force) {
    const f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.max_speed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    noStroke();
    fill(160, 80, 50);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-this.size, -this.size, -this.size, this.size, this.size * 2, 0);
    pop();
  }
}

class Target extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.vel = createVector(0, 0);
    this.stopping_radius = 320;
  }

  show() {
    noStroke();
    push();
    fill(0, 80, 50);
    circle(this.pos.x, this.pos.y, this.size * 2);
    fill(0, 80, 50, 0.5);
    circle(this.pos.x, this.pos.y, this.size * 2 + this.stopping_radius / 2);
    pop();
  }
}
