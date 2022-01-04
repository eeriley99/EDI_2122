
function setup() {
  createCanvas(720, 400, SVG);
  background(230);
  frameRate (10);
}

function draw() {

  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(5);
      line (width/2, height/2, mouseX, mouseY);

    }

    if (keyIsPressed === true) {
        save("starburst.png"); // give file name
        print("saved png");
        noLoop ();
    }

}
