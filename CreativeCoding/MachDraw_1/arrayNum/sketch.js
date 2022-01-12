var nums = Array.from({ length: 100 }, (_, i) => i + 1);

var index = 0;
var num = 0;

function setup() {
  createCanvas(400, 400, SVG);
  frameRate(0.5);
}

function draw() {
  translate (10, 10);
  for (var y = 0; y <= 400; y = y + 40) {
    for (var x = 0; x < 400; x = x + 40) {
      num = ("", index + 1);
      textSize(12);
      textAlign(LEFT, TOP);
      text(num, x, y);

      index = index + 1;
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  if (index == 100 || num >= 100) {
    noLoop();
  }
}





function setup() {
  createCanvas(200, 200, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
      rect(x * 10, y * 10, x, y);
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
