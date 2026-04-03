class Flower {
  constructor(size, posX, posY, petals) {
    this.anchors = [];
    this.controls = [];
    this.centerPoints = [];
    this.size = size / 2;
    this.posX = posX;
    this.posY = posY;
    this.petals = petals;
    this.center = 60;
    this.petalColor = 340;
    this.rotation = 0;
  }

  createAnchors() {
    this.anchors = [];
    let vertices = this.petals * 2;
    let spacing = TWO_PI / vertices;
    let first = [];

    for (let i = 0; i < vertices; i++) {
      let angle = i * spacing;
      let r = this.size * 0.6;

      let x = cos(angle) * r;
      let y = sin(angle) * r;
      if (i === 1) {
        first.push(x, y);
      }
      if (i % 2) {
        this.anchors.push([x, y]);
      }
    }
    this.anchors.push([first[0], first[1]]);
  }

  createControls() {
    this.controls = [];
    let vertices = this.petals;
    let spacing = TWO_PI / vertices;

    for (let i = 0; i < vertices + 1; i++) {
      let angle = i * spacing;
      let r = this.size * 1.8;

      const x = cos(angle) * r;
      const y = sin(angle) * r;
      this.controls.push([x, y]);
    }
  }

  render() {
    push();
    let s = 10
    translate(width / 2, height / 2);
    beginShape();
    fill(100, 100, 50);
    vertex(-s, 0);
    vertex(s, 0);
    quadraticVertex(60, height / 2, s, height);
    vertex(-s, height);
    quadraticVertex(40, height / 2, -s, 0);
    endShape();

    fill(this.petalColor, 100, 50);
    push();
    rotate(0.7);
    beginShape();
    for (let i = 0; i < this.anchors.length; i++) {
      let a = this.anchors[i];
      let c = this.controls[i];
      if (i === 0) {
        vertex(a[0], a[1]);
      } else {
        quadraticVertex(c[0], c[1], a[0], a[1]);
      }
    }

    endShape();
    pop();
    fill(this.center, 100, 50);
    noStroke();
    circle(0, 0, this.size * 0.8);

    pop();
  }

  build() {
    this.createAnchors();
    this.createControls();
  }
}
