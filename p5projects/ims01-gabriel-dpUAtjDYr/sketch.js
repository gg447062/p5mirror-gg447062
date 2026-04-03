// https://openprocessing.org/sketch/1980771

// By Roni Kaufman
// https://ronikaufman.github.io


// I don't even know where to begin here!
// it's not using WEB_GL mode so it's not 3D but it certainly appears to be
// it also doesn't work on the p5 editor but it does in openprocessing


const M = 4, N = 24;
let path = [], p;
let a, b, l0 = 80;
let brush;

function setup() {
  createCanvas(500, 500);
	imageMode(CENTER);
  
  p = [2*~~random(M/2), 2*~~random(N/2)]; // starting point
	
	a = tan(PI/N)/sqrt(1+sq(tan(PI/N)));
  b = (1+a)/(1-a);
	
	function easeInOutSine(x) {
		return -(Math.cos(Math.PI * x) - 1) / 2;
	}
	
	let palette = ["#abcd5e", "#14976b", "#2b67af", "#62b6de", "#f589a3", "#ef562f", "#fc8405", "#f9d531"];
	//palette = ["#b3dce0", "#62b6de", "#2b67af", "#62b6de"]
	//palette = ["#ef562f", "#fc8405", "#f9d531", "#fc8405"]
  
  // this makes a gradient circle out of arcs -
	brush = createGraphics(width, height);
	brush.noStroke();
	for (let i = 0; i < palette.length; i++) {
		let theta1 = i*TAU/palette.length;
   
		let theta2 = (i+1)*TAU/palette.length;
         console.log(theta2)
		let col1 = palette[i];
		let col2 = palette[(i+1)%palette.length];
		let thetaStep = (theta2-theta1)/50;

		for (let theta = theta1; theta < theta2; theta += thetaStep) {
			let t = map(theta, theta1, theta2, 0, 1);
			let col = lerpColor(color(col1), color(col2), easeInOutSine(t));
			brush.fill(col);
			brush.arc(brush.width/2, brush.height/2, brush.width, brush.height, theta, theta+thetaStep);
		}
  }
  
  	
}

function draw() {
  background(0);

  //translate(-width/2, -height/2);
	drawPath([...path, p], width/2, height/2, M, N, 0.9);
	
	if (path.length < M*N-1) {
		let eventualNeighbors = shuffle(possibleNeighbors(p, M, N));

		let neighbors = [[], []];
		for (let neigh of eventualNeighbors) {
			let projectedPath = [...path, p, neigh];
			let count = countDeadends(projectedPath, possibleNeighbors(neigh, M, N), M, N);
			if (!inArray(neigh, path) && !disjointed(projectedPath, M, N) && count < 2 && !cursedCorners(projectedPath, M, N)) {
				neighbors[count].push(neigh);
			}
		}
		neighbors = neighbors.flat(1);

		while (neighbors.length == 0) {
			// backtracking
			let previous = path.pop();
			p = [previous[0], previous[1]];
			neighbors = previous[2];
		}

		let pNext = neighbors.shift();
		path.push([...p, neighbors]);
		p = pNext;
	}
}

// computing

function possibleNeighbors([i, j], m, n) {
  let possibilities = [];
  if (j < n-1) possibilities.push([i, j+1]);
  if (j > 0) possibilities.push([i, j-1]);
  if (i < m-1) possibilities.push([i+1, j]);
  if (i > 0) possibilities.push([i-1, j]);
  return possibilities;
}

function inArray([i, j], arr) {
  for (let e of arr) {
    if (e[0] == i && e[1] == j) return true;
  }
  return false;
}

// does arr disjoint the m*n grid?
function disjointed(arr, m, n) {
  if (arr.length >= m*n) {
    return false;
  }
  
  // choose initial point
  let p;
  do {
    p = [~~random(m), ~~random(n)];
  } while (inArray(p, arr))
    
  // traverse the m*n grid where arr was removed, through a DFS
  let discovered = [];
  let stack = [p];
  while (stack.length > 0) {
    p = stack.pop();
    if (!inArray(p, discovered)) {
      discovered.push(p);
      let neighbors = possibleNeighbors(p, m, n);
      for (let neigh of neighbors) {
        if (!inArray(neigh, arr)) stack.push(neigh);
      }
    }
  }
  
  return discovered.length != m*n-arr.length;
}

function countDeadends(arr, ignoreMe, m, n) {
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!inArray([i, j], arr) && !inArray([i, j], ignoreMe)) {
        let eventualNeighbors = possibleNeighbors([i, j], m, n);
        let neighbors = [];
        for (let neigh of eventualNeighbors) {
          if (!inArray(neigh, arr)) neighbors.push(neigh);
        }
        if (neighbors.length < 2) {
          count++;
        }
      }
    }
  }
  return count;
}

function cursedCorners(arr, M, N) {
  let corner1 = !inArray([0, 0], arr) && !inArray([1, 0], arr) && !inArray([0, 1], arr) && !inArray([1, 1], arr) && !inArray([2, 0], arr) && !inArray([0, 2], arr) && inArray([2, 1], arr) && inArray([1, 2], arr) && inArray([2, 2], arr);
  let corner2 = !inArray([M-1, 0], arr) && !inArray([M-2, 0], arr) && !inArray([M-1, 1], arr) && !inArray([M-2, 1], arr) && !inArray([M-3, 0], arr) && !inArray([M-1, 2], arr) && inArray([M-3, 1], arr) && inArray([M-2, 2], arr) && inArray([M-3, 2], arr);
  let corner3 = !inArray([M-1, N-1], arr) && !inArray([M-2, N-1], arr) && !inArray([M-1, N-2], arr) && !inArray([M-2, N-2], arr) && !inArray([M-3, N-1], arr) && !inArray([M-1, N-3], arr) && inArray([M-3, N-2], arr) && inArray([M-2, N-3], arr) && inArray([M-3, N-3], arr);
  let corner4 = !inArray([0, N-1], arr) && !inArray([1, N-1], arr) && !inArray([0, N-2], arr) && !inArray([1, N-2], arr) && !inArray([2, N-1], arr) && !inArray([0, N-3], arr) && inArray([2, N-2], arr) && inArray([1, N-3], arr) && inArray([2, N-3], arr);
  
  return corner1 || corner2 || corner3 || corner4;
}

// drawing

function drawPath(path, x0, y0, m, n, ratio) {
	fill(255, 0, 0);
	
  push();
  translate(x0, y0);
  
	for (let k = 0; k < path.length-1; k++) { 
  	let p1 = path[k], p2 = path[k+1];
		
		let c1 = getCircle(p1[0], p1[1], ratio), c2 = getCircle(p2[0], p2[1], ratio);
		if (p1[1] == p2[1]) {
			myLine(c1, c2);
		} else {
			let theta1 = atan2(c1.y, c1.x);
			let theta2 = (p1[1] < p2[1]) ? theta1+2*PI/N : theta1-2*PI/N;
			myArc(c1, c2, theta1, theta2);
		}
	}
  
  pop();
}

function getCircle(i, j, ratio) {
	let l = l0*pow(b, i);
	let x = l*cos((2*j+1)*PI/N);
	let y = l*sin((2*j+1)*PI/N);
	let d = 2*l*a*ratio;
	return {x: x, y: y, d: d};
}

function myLine(c1, c2) {
	for (let t = 0; t <= 1; t += 0.01) {
		let x = c1.x*(1-t)+c2.x*t;
		let y = c1.y*(1-t)+c2.y*t;
		let d = c1.d*(1-t)+c2.d*t;
		useBrush(x, y, d);
	}
}

function myArc(c1, c2, theta1, theta2) {
	let r = dist(0, 0, c1.x, c1.y);
	for (let t = 0; t <= 1; t += 0.01) {
		let theta = theta1*(1-t)+theta2*t;
		let x = r*cos(theta), y = r*sin(theta);
		useBrush(x, y, c1.d);
	}
}

function useBrush(x, y, d) {
	push();
	translate(x, y);
	rotate(frameCount/20);
	image(brush, 0, 0, d, d);
	pop();
}