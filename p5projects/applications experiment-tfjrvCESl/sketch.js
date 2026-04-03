let addTrees, addCloud, addSun, addFlowers, makeStandard,makeModern, makeFancy;
let house, nicerHouse, modernHouse, cistern;
let grass, sky, sun, clouds, trees, flowers;
let settings = {
  speed: 10,
  level: 100,
  tintMix: 0,
  suns: [],
  trees: 0,
  flowers: 0,
  clouds: [],
  houses: []
};

function preload() {
  house = loadImage("images/house.png");
  niceHouse = loadImage("images/nicer_house.png");
  modernHouse = loadImage("images/modern_house.png");
  sky = loadImage("images/sky.jpeg");
  sun = loadImage("images/sun.png");
  cloud = loadImage("images/cloud.png");
  grass = loadImage("images/grass.png");
  cistern = loadImage("images/cistern.png");
  trees = loadImage("images/many_trees.png");
  flowers = loadImage("images/many_flowers.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight * 0.9);
  cistern.resize(width * 0.3, 0);
  cloud.resize(width * 0.3, 0);
  trees.resize(width * 0.4, 0);
  // deadTown.resize(width, 0);
  sun.resize(width * 0.1, 0);
  flowers.resize(width * 0.4, height * 0.3);

  makeStandard = createButton("add house");
  makeModern = createButton("add modern house");
  makeFancy = createButton("add fancy house");
  addSun = createButton("add sun");
  addClouds = createButton("add clouds");
  addTrees = createButton("add trees");
  addFlowers = createButton("add flowers");

  makeStandard.mousePressed(() => causeAndEffect("add house"));
  makeModern.mousePressed(() => causeAndEffect("add modern house"));
  makeFancy.mousePressed(() => causeAndEffect("add fancy house"));
  addSun.mousePressed(() => causeAndEffect("add sun"));
  addClouds.mousePressed(() => causeAndEffect("add clouds"));
  addTrees.mousePressed(() => causeAndEffect("add trees"));
  addFlowers.mousePressed(() => causeAndEffect("add flowers"));
}

function causeAndEffect(text) {
  if (settings.level > 0) {
    switch (text) {
      case "add sun":
        let sunX = random(width * 0.2, width * 0.8);
        let sunY = random(0, height * 0.2);
        settings.suns.push([sunX, sunY]);
        break;
      case "add clouds":
        let x = random(width * 0.2, width * 0.8);
        let y = height * random(0, 0.3);
        settings.clouds.push([x, y]);
        break;
      case "add trees":
        settings.trees += 1;
        break;
      case "add flowers":
        settings.flowers += 1;
        break;
         case "add house":
        settings.houses.push("standard");
        break;
      case "add modern house":
        settings.houses.push("modern");
        break;
      case "add fancy house":
        settings.houses.push("nice")
        break;
      default:
        break;
    }

    settings.level -= settings.speed;
    settings.tintMix += settings.speed;
  }
}

function draw() {
  drawSky();
  drawSuns();
  drawClouds();
  drawTrees();
  drawGrass();
  waterTower();
  drawFlowers();
  town();
}

function keyPressed() {
    saveCanvas('applications_experiment.png')
}

function drawSky() {
  image(sky, 0, 0, width, height);

  push();
  let a = map(settings.tintMix, 0, 100, 0, 255);
  tint(128, 20, 8, a);
  image(sky, 0, 0, width, height);
  pop();
}

function drawSuns() {
  for (let i = 0; i < settings.suns.length; i++) {
    let s = settings.suns[i];
    image(sun, s[0], s[1]);
  }
}

function drawClouds() {
  for (let i = 0; i < settings.clouds.length; i++) {
    let c = settings.clouds[i];
    image(cloud, c[0], c[1]);
  }
}

function drawGrass() {
  horizon();
  push();
  let a1 = map(settings.tintMix, 0, 100, 0, 255);
  tint(245, 132, 66, a1);
  horizon();
  pop();
}

function drawTrees() {
  for (let i = 0; i < settings.trees; i++) {
    let x = 0;
    image(trees, x + i * trees.width, height * 0.3);
  }
}

function drawFlowers() {
  for (let i = 0; i < settings.flowers; i++) {
    let x = width * 0.05;
    image(flowers, x + i * flowers.width, height * 0.6);
  }
}

function horizon() {
  image(grass, 0, height * 0.12, width, height);
}

function town() {
  let w = width * 0.1;
  let h = width * 0.1;
  for (let x = 0; x < settings.houses.length; x++) {
    let style = settings.houses[x]
    drawHouse(w * x * 1.1, height * 0.45, w, h,style);
  }
}

function drawHouse(x, y, w, h,style) {
  switch (style) {
    case "standard":
      image(house, x, y, w, h);
      break;
    case "nice":
      image(niceHouse, x, y , w * 1.4, h * 1.4);
      break;
    case "modern":
      image(modernHouse, x, y, w * 1.2, h * 1.2);
      break;
    default:
      image(house, x, y, w, h);
      break;
  }
}

function waterTower() {
  image(cistern, width * 0.7, height * 0.3);
  fill(100);
  rectMode(CORNER);
  let w = cistern.width * 0.1;
  let h = cistern.height * 0.5;
  let x = width * 0.87;
  let y = height * 0.42;
  rect(x, y, w, h);

  fill(10, 110, 200);

  rectMode(CORNERS); // CORNERS mode allows you to pass the coordinates of one of the corners followed by the opposite corner, allowing us to reduce the height from the top down

  let percent = (100 - settings.level) / 100;
  rect(x + w, y + h, x, y + h * percent); // water
}

function prompt(input) {}
