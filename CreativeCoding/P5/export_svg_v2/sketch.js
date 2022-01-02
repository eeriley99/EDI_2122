/* export SVG
*/

let pWidth = 24; //creating a variable for the paper size width inches
let pHeight = 18; //creating a variable for the paper size height inches

function setup() {
  createCanvas(pWidth * 72, pHeight * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 255); // red is good for laser
  noFill(); // better not to have a fill for laser
  ellipseMode (CORNER);
}

function draw() {
translate (- 75, -75);
for (var y = 0; y < pHeight * 72; y = y + 150){
  for (var x = 0; x < pWidth * 72; x = x + 150) {
  //  line (x, y, 50 + x, 50 + y);
  //  line (x + 50, y, x, y + 50);
    rect (x, y, 120, 120);
    ellipse (x + 75, y + 75, 120, 120);
  }
}



save("mySVG.svg"); // give file name
//print("saved svg");
  noLoop(); // we just want to export once
}
