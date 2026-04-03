function setup() {
  createCanvas(100, 100);
  stroke(255,0,0)
  for (let x = 0; x < width;x++) {
    for (let y = 0; y < height; y++) {
      point(x,y)
    }
  }
}
