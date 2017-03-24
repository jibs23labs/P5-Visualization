var t=0;
var count=0;
var colr = {
  r: 0,
  g: 0,
  b: 0
};
function setup() {
  createCanvas(800, 800);
  stroke(255,237,191);
  strokeWeight(0.1);
  noFill();
  colr.r = random(255);
  colr.g = random(255);
  colr.b = random(255);
}
function draw() {
  beginShape();
  var x1 = width * noise(t + 100);
  var x2 = width * noise(t + 150);
  var x3 = width * noise(t + 200);
  var x4 = width * noise(t + 250);
  var y1 = height * noise(t + 300);
  var y2 = height * noise(t + 320);
  var y3 = height * noise(t + 340);
  var y4 = height * noise(t + 360);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  if(count >= 300){
    stroke(colr.r,colr.g,colr.b);
    strokeWeight(0.1);
  }
  count+=1;
  endShape(CLOSE);
  t += 0.003;
  if (frameCount % 500 == 0) {
  saveCanvas('tqln_image', 'png');
  noLoop();
  }
}
function newcolor(){
  colr.r = random(255);
  colr.g = random(255);
  colr.b = random(255);
}
