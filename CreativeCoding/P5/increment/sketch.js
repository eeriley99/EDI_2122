/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/
//
// function setup() {
//   createCanvas(200, 200, SVG); // Create SVG Canvas
//   strokeWeight(1); // do 0.1 for laser
//   stroke(255, 0, 0); // red is good for laser
//   noFill(); // better not to have a fill for laser
// }
//
// function draw() {
//   for (x = 0; x < 10; x++) {
//     for (y = 0; y < 10; y++) {
//       rect(x * 10, y * 10, x, y);
//     }
//   }
//   save("mySVG.svg"); // give file name
//   print("saved svg");
//   noLoop(); // we just want to export once
// }
function setup() {
  createCanvas(200, 200, SVG);
  background(230);
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(237, 34, 93);
  }
  line(mouseX - 66, mouseY, mouseX + 66, mouseY);
  line(mouseX, mouseY - 66, mouseX, mouseY + 66);
}
