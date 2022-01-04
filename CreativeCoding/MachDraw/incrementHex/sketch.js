let x = 0.25;
let y = 0.25;

function setup() {
  createCanvas(400, 400, SVG);
  //background(220);
  translate(width / 2, height / 2);
  noFill();

  do {
    beginShape();

    vertex(-15 * x, -26 * y);
    vertex(15 * x, -26 * y);
    vertex(30 * x, 0 * y);
    vertex(15 * x, 26 * y);
    vertex(-15 * x, 26 * y);
    vertex(-30 * x, 0 * y);

    endShape(CLOSE);

    x = x + 0.25;
    y = y + 0.25;
  } while (x < 5);
}

function draw() {

  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
