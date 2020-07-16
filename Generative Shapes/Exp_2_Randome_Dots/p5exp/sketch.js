// Initialization
var ranx = 0;
var rany = 0;
var clr = 0;
var colr = {
        r: 0,
        g: 0,
        b: 0,
};
var x = 0;
var y = 0;
var w = 0;
var h = 0;
var b1, b2, c1, c2;

// Elements and Boundaries
function setup() {
        createCanvas(3000, 1000);
}

// Process
function draw() {
        ranx = random(10, 3000);
        rany = random(10, 3000);
        clr = random(0, 255);
        colr.r = random(255);
        colr.g = random(255);
        colr.b = random(255);
        stroke(0);
        strokeWeight(0.1);
        fill(colr.r, colr.g, colr.b);
        ellipse(ranx, rany, 50, 50);
}
