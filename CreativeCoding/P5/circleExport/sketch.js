/* export SVG
*/

let ix = 24; //paper width in inches
let iy = 18; //paper height in inches

let canvaWidth = ix * 72; //72 pixels per inch(digital resolution)
let canvaHeight = iy * 72;

function setup() {
  ellipseMode (CENTER);
  createCanvas(canvaWidth, canvaHeight, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 255); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {

for (var y = 0; y < canvaHeight; y = y + 100){
  for (var x = 0; x < canvaWidth; x = x + 100){
    ellipse(x, y, 50, 50);
  }
}

  save("circle.svg"); // give file name
  print("saved svg");
  noLoop();
}
