// formula for calculating the frequency of a schmitt trigger based relaxation oscillator found here: https://en.wikipedia.org/wiki/Relaxation_oscillator#Frequency_of_oscillation

let R, C, rmult, cmult;
let rInput, cInput, rMultSelect, cMultSelect, calc;
let answer = "";
let resistanceMults = { ohms: 1, k: 1000, M: 1000000 };
let capacitanceMults = { uf: 1e-6, nf: 1e-9, pf: 1e-12 };
let div
let yOff = 20


function setup() {
   createCanvas(windowWidth, windowHeight);

  div = createDiv()
  div.position(40,10)
  div.size(width-40,30)
  
  rInput = createInput();
  rInput.parent(div)
  
  rMultSelect = createSelect();
  rMultSelect.option("ohms");
  rMultSelect.option("k");
  rMultSelect.option("M");
  rMultSelect.parent(div)

  cInput = createInput();
  cInput.parent(div)
  
  cMultSelect = createSelect();
  cMultSelect.option("uf");
  cMultSelect.option("nf");
  cMultSelect.option("pf");
  cMultSelect.parent(div)

  calc = createButton("calculate");
  calc.parent(div)
  
  calc.mousePressed(() => {
    calculateFreq();
  });

  textAlign(CENTER);
  rectMode(CENTER)
 
}

function draw() {
  background(220);
  fill(22)
  rect(width/2,height/2,width-80,height-80)
   fill(0,200,0)
  textSize(36)
  text(answer, width / 2, height/3);
}

function calculateFreq() {
  if (rInput.value() == "" || cInput.value() == "") return;
  rMult = resistanceMults[rMultSelect.value()];
  cMult = capacitanceMults[cMultSelect.value()];
  R = rInput.value() * rMult;
  C = cInput.value() * cMult;

  freq = 1 / (2 * log(3) * R * C);

  answer = `${round(freq, 2)} hz`;
}
