class Pixel {
  constructor(x, y, size, rgbArray) {
    this.x = x;
    this.y = y;
    this.size = size; // size
    this.home = [x, y]; // save the home coordinates
    this.rgbArray = rgbArray;
    this.speed = null;
    this.a = 255;
    this.h = null;


    if (rgbArray.r > 128) {
      this.speed = random(-10, -5);
      this.h = color(rgbArray[0], 128, 255 - rgbArray[2]);
    } else {
      this.speed = random(5, 10);
      this.h = color(255 - rgbArray[0], 128, rgbArray[2]);
    }
  }

  display() {
    fill(this.rgbArray);
    rect(this.x, this.y, this.size, this.size);
  }

  edges() {
    if (this.y < 0) {
      this.y = this.s;
    } else if (this.y > height) {
      this.y = height - this.s;
    }
  }

  fadeOut() {
    this.rgbArray[3] -= 5;
  }

   fadeIn() {
    this.rgbArray[3] += 5;
  }

  update() {
    if (this.rgbArray[3] > 0) {
     this.fadeOut();
    }
   
    // if (frameCount < 120) {
    //   this.fade();
    // } else {
    //   this.y += this.speed;
    //   this.edges();
    // }
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(2));
    this.r = random(15, 35);
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.x > smallCanvas.width || this.pos.x < 0) {
      this.vel.mult(-1, 1);
    } else if (this.pos.y > smallCanvas.height || this.pos.y < 0) {
      this.vel.mult(1, -1);
    }
  }

  show() {
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}

