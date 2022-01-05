var pW = 11 //width of paper in inches
var pH = 8.5 //height of paper in inches
var x = 0;
var y = 0;

function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  background (230);
  ellipseMode (CENTER);
  translate (width/2, height/2);

  do{
    ellipse (0, 0, 1 + x, 1 + y);
    x = x + random (5, 15);
    y = y + random (5, 15);
  }
  while (x < 600);

}

function draw() {
  // save("mySVG.svg"); // give file name
  // print("saved svg");
  noLoop(); // we just want to export once
}
