function setup() {
  createCanvas(500, 500);
  background(24);
  let graphics = createGraphics(50, 50);
  graphics.pixelDensity(1);
  graphics.noStroke();
  graphics.background(24);
  graphics.fill(34);
  graphics.rect(0, 0, 50, 50);
  graphics.fill(44);
  graphics.beginShape();
  graphics.vertex(0, 0);
  graphics.vertex(50, 0);
  // graphics.vertex(50,30)
  graphics.vertex(0, 50);
  graphics.endShape();
  graphics.fill(14);
  graphics.rect(0, 25, 25, 25);
  
    graphics.filter(BLUR, 1);

  let d = graphics.pixelDensity();
  graphics.loadPixels();

  for (let i = 0; i < graphics.pixels.length; i += 4) {
    let granulateAmount = random(-10);
    graphics.pixels[i] += granulateAmount
    graphics.pixels[i + 1] += granulateAmount;
    graphics.pixels[i + 2] += granulateAmount;
  }
  graphics.updatePixels();

  let rows = 2;
  let cols = 2;
  let w = (width * 0.75) / cols;
  let h = (height * 0.75) / rows;

  let off = width * 0.125;
  


  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      image(graphics, x + off, y + off, w, h);
    }
  }
}
