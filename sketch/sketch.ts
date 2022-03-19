// GLOBAL VARS & TYPES
let numberOfShapesControl: p5.Element;


function setup() {

  const size = min(windowWidth, windowHeight);
  createCanvas(size,size);
  colorMode(RGB,1);
  noStroke();

}

const radius = Math.sqrt(0.5);

// Irational number
const PHI = (1 + Math.sqrt(5)) / 2;
const dotSize = 0.05;

function draw() {
  scale(width,height);
  background(0);
  fill(1);

  const count = 500;
  for (let i=0; i<count; i++){
    const f = i / count;

    //angle to place dots
    // devide by 1 = straight line
    // devide by 4 = plus 
    const a = i / PHI;
    const dist = f * radius;

    const x = 0.5 + cos(a * TWO_PI) * dist;
    const y = 0.5 + sin(a * TWO_PI) * dist;

    const r = f * dotSize;
  
    circle(x,y,r);
  
  }  
}