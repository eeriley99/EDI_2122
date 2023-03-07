function setup() {
  createCanvas(2 * windowWidth, 2 * windowHeight);
  stroke (212, 142, 142);
}

function draw() {
  background (250, 207, 207);
  noFill ();
  strokeWeight (1);
  void squ();
  strokeWeight (2);
  void zigzag();
  noLoop ();
}

function windowResized() {
  resizeCanvas(windowWidth * 2, windowHeight * 2);
}

function squ() {
  for (var y = 0; y < windowHeight * 2; y = y + 120){
     for (var x = 0; x < windowWidth * 2; x = x + 120){
     square(80 + x, random (10, 90) + y, random (10, 40));
}
  }

}

  function zigzag() {
    translate(20, 0);
    for (var y = 0; y < windowHeight * 2; y = y + 120) {
      for (var x = 0; x < windowWidth * 2; x = x + 120) {

        line(random (0, 20) + x, random (0, 20) + y, x + 40, y + 40); //1st diagonal

        line(x, y + 40, x + 40, y + 40); //1st horizontal
        line(x, y + 40, x + 40, y + 80); //2nd diagonal
        line(x, y + 80, x + 40, y + 80); //2nd horizontal

        line(x, y + 80, x + random (20, 40), y + random (100, 120)); //3rd diagonal

      }
    }
  }
