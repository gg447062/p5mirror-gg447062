let wobbles = [];
let colors = []
let index = 0;
let amount = 10

function setup() {
  createCanvas(600, 400);
  colorMode(HSL)
  for (let i = 0; i < amount; i++) {
    let h = map(i, 0, amount, 50, 200 )
    colors.push(color(h, 100, 50, 0.5))
  }
}

function draw() {
  // background(0,100,50);
  if (frameCount % 120 == 0) {
    let newFill = colors[index];
    wobbles.push(new Wobble(newFill));
    index = (index + 1) % colors.length;
  }
  for (let wobble of wobbles) {
    wobble.update();
    wobble.show();
    if (wobble.r > width * 0.9) {
      wobbles.shift();
    }
  }

  // noLoop()
}
