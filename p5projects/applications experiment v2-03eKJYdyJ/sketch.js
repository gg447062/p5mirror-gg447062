let addTrees, addCloud, addSun, addFlowers, makeStandard, makeModern, makeFancy;
let house, nicerHouse, modernHouse, cistern;
let grass, sky, sun, clouds, trees, flowers, deadTown;
let settings = {
  playing: false,
  dead: false,
  speed: 10,
  level: 100,
  tintMix: 0,
  suns: [],
  trees: 0,
  flowers: 0,
  clouds: [],
  houses: [],
  instructions: [
    "This is an image maker game simulating AI image generation.",
    " Use the prompts to create your image.",
    "Each simulated prompt represents 1000 prompts in the real world",
    "and costs about 10L of water.",
    " You can stop whenever you want and hit “enter” to save the image to the desktop.",
    "Press any key to start",
  ],
};

function preload() {
  loadImages();
}

function setup() {
  createCanvas(windowWidth, windowHeight * 0.9);
  cistern.resize(width * 0.3, 0);
  cloud.resize(width * 0.3, 0);
  trees.resize(width * 0.4, 0);
  deadTown.resize(width, 0);
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

function loadImages() {
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
  deadTown = loadImage("images/dead_town.jpeg");
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
        settings.houses.push("nice");
        break;
      default:
        break;
    }

    settings.level -= settings.speed;
    settings.tintMix += settings.speed;
  } else {
    settings.dead = true;
  }
}

let a = 0;
function draw() {
  if (!settings.playing) {
    instructions();
  } else {
    drawSky();
    drawSuns();
    drawClouds();
    drawTrees();
    drawGrassWithTint();
    town();
    waterTower();
    drawFlowers();
    if (settings.dead) {
      if (a < 255) {
        a += 0.5;
      }
      push();
      tint(255, a);
      image(deadTown, 0, 0);
      pop();
    }
  }
}

function keyPressed() {
  if (settings.playing && key == "Enter") {
    saveCanvas("applications_experiment.png");
  } else {
    settings.playing = true;
  }
}

function instructions() {
  background(100, 200, 255);
  textSize(24);
  textFont("Courier New");
  textAlign(CENTER);
  for (let i = 0; i < settings.instructions.length; i++) {
    let current = settings.instructions[i];
    text(current, width / 2, height / 2 + i * textSize());
  }
}

// ------ SKY -----

function drawSky() {
  image(sky, 0, 0, width, height);

  push();
  let a = map(settings.tintMix, 0, 100, 0, 255);
  tint(128, 20, 8, a);
  image(sky, 0, 0, width, height);
  pop();
}

// ------ SUNS -----

function drawSuns() {
  for (let i = 0; i < settings.suns.length; i++) {
    let s = settings.suns[i];
    image(sun, s[0], s[1]);
  }
}

//  -----  CLOUDS. -----

function drawClouds() {
  for (let i = 0; i < settings.clouds.length; i++) {
    let c = settings.clouds[i];
    image(cloud, c[0], c[1]);
  }
}
//  -----  GRASS TINTED. -----
function drawGrassWithTint() {
  drawGrass();
  push();
  let a1 = map(settings.tintMix, 0, 100, 0, 255);
  tint(245, 132, 66, a1);
  drawGrass();
  pop();
}

//. ----- TREES ------

function drawTrees() {
  for (let i = 0; i < settings.trees; i++) {
    let x = 0;
    image(trees, x + i * trees.width, height * 0.36);
  }
}

// ------- FLOWERS ------

function drawFlowers() {
  for (let i = 0; i < settings.flowers; i++) {
    let x = width * 0.05;
    image(flowers, x + i * flowers.width, height * 0.6);
  }
}

// ----- GRASS NORMAL ----

function drawGrass() {
  image(grass, 0, height * 0.12, width, height);
}

// ------ HOUSES -------

function town() {
  let w = width * 0.1;
  let h = width * 0.1;
  for (let x = 0; x < settings.houses.length; x++) {
    let style = settings.houses[x];
    drawHouse(w * x * 1.1, height * 0.45, w, h, style);
  }
}

// ----- SINGLE HOUSE

function drawHouse(x, y, w, h, style) {
  switch (style) {
    case "standard":
      image(house, x, y, w, h);
      break;
    case "nice":
      image(niceHouse, x, y, w * 1.4, h * 1.4);
      break;
    case "modern":
      image(modernHouse, x, y, w * 1.2, h * 1.2);
      break;
    default:
      image(house, x, y, w, h);
      break;
  }
}

// ------- CISTERN ------

function waterTower() {
  push();
  imageMode(CENTER);
  translate(width * 0.5, height * 0.6);
  stroke(100);

  image(cistern, 0, 0);
  fill(100);

  // here is the water meter, aligned to the cistern position
  rectMode(CORNER);
  let w = cistern.width * 0.38;
  let h = cistern.height * 0.5;
  let x = -w / 2;
  let y = -h / 2;
  rect(x, y, w, h);

  fill(10, 110, 200);

  rectMode(CORNERS); // CORNERS mode allows you to pass the coordinates of one of the corners followed by the opposite corner, so we can draw from bottom right to top left, allowing us to reduce the height from the top down

  let percent = (100 - settings.level) / 100;
  rect(x + w, y + h, x, y + h * percent); // water level reduces with percent
  imageMode(CORNER);
  pop();
}
