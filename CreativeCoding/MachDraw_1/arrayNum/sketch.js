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
