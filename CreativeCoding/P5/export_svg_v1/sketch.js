/* export SVG
*/
let ix = 24; //paper width in inches
let iy = 18; //paper height in inches

let canvaWidth = ix * 72; //72 pixels per inch(digital resolution)
let canvaHeight = iy * 72;

function setup() {
  createCanvas(canvaWidth, canvaHeight, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  background (0, 255, 0);
  for (x = 0; x < canvaWidth; x++) {
    for (y = 0; y < canvaHeight; y++) {
      rect(x * 10, y * 10, x, y);
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
