const myPalette = ['#FA6E41', '#E1CA0B', '#5774FA', '#2F9213', '#805041'];

let tileSize;

function setup() {
  createCanvas(600, 600);
  strokeCap(SQUARE);
  tileSize = width / 10;
  background(244);
  makeTiles();
}

function makeTiles() {
  for (let i = 0; i < width / tileSize; i++) {
    for (let j = 0; j < width / tileSize; j++) {
      const x = i * tileSize;
      const y = j * tileSize;
      const variant = floor(random(4));
      push();
      translate(x, y);
      tile(variant);
      pop();
    }
  }
}

function tile(variant) {
  let strokeColor = random(myPalette);

  do {
    fillColor = random(myPalette);
  } while (fillColor == strokeColor);

  strokeWeight(4);
  noStroke();
  fill(fillColor);
  square(0, 0, tileSize);
  noFill();
  stroke(strokeColor);

  switch (variant) {
    case 0:
      arc(0, 0, tileSize + 1, tileSize + 1, 0, HALF_PI);
      arc(tileSize, tileSize, tileSize, tileSize, PI, PI + HALF_PI);
      break;
    case 1:
      arc(0, tileSize, tileSize, tileSize, PI + HALF_PI, 0);
      arc(tileSize, 0, tileSize, tileSize, HALF_PI, PI);
      break;
    case 2:
      arc(0, 0, tileSize, tileSize, 0, HALF_PI);
      arc(tileSize, tileSize, tileSize, tileSize, PI, PI + HALF_PI);
      break;
    case 3:
      arc(0, tileSize, tileSize, tileSize, PI + HALF_PI, 0);
      arc(tileSize, 0, tileSize, tileSize, HALF_PI, PI);
      break;
    default:
      break;
  }
}
