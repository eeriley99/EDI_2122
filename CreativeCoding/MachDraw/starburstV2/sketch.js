/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

function setup() {
  createCanvas(200, 200); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
background (230);
}


function draw() {

translate (width/2, height/2);
for (var y = -100; y < 100; y = y + 10){
for (var x = -100; x < 100; x = x + 10){
line (0, 0, x, y);
}
}


  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
