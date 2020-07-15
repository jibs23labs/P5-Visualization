var ranx = 0;
var rany = 0;
var clr = 0;

function setup() {
  // createCanvas(windowWidth,windowHeight);
  createCanvas(1000,1000);

}

function draw() {
  ranx = random(100,900);
  rany = random(100,900);
  clr = random(0,255);
  stroke(0);
  fill(clr);
  ellipse(ranx,rany,50,50);

}
