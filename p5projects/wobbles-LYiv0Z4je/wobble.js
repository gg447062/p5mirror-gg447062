class Wobble {
  constructor(fill) {
    this.time = 0;
    this.r = 1;
    this.inc = 0.1;
    this.noiseMax = 1;
    this.fill = fill;
  }

  update() {
    this.r += 0.4;
  }

  show() {
    push();
    translate(width / 2, height / 2);
    stroke(255);
    noStroke();
    fill(this.fill);
    // noFill();
    beginShape();

    for (let a = 0; a < TWO_PI; a += this.inc) {
      let xoff = map(cos(a), -1, 1, 0, this.noiseMax);
      let yoff = map(sin(a), -1, 1, 0, this.noiseMax);
      let r = map(
        noise(xoff, yoff, this.time),
        0,
        1,
        this.r * 0.8,
        this.r * 1.2
      );
      let x = cos(a) * r;
      let y = sin(a) * r;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
    this.time += 0.01;
  }
}
