/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/
var pW = 11; // width of paper in inches
var pH = 8.5; // height of the paper in inches


function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser

}

function draw() {
  translate (((pW * 72) - 600) / 2, ((pH * 72) - 600) / 2);
  for (var y = 0; y < 600; y = y + random (100, 50)) {
  for (var x = 0; x < 600; x = x + random (100, 50)) {

    triangle (x,y,random (100, 50),random (100, 50));
  }
  }

save("mySVG.svg"); // give file name
print("saved svg");
  noLoop(); // we just want to export once
}
