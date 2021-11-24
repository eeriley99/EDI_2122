function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill ();
}

function draw() {

    background(191, 49, 0);

  fill (142, 166, 4);
  void squ();
  strokeWeight (1);
  stroke (236, 159, 5);
  void zigzag();

  noLoop ();
}

function squ() {
  for (var y = 0; y < windowHeight; y = y + 120){
     for (var x = 0; x < windowWidth; x = x + 120){
     square(80 + x, random (10, 90) + y, random (10, 40));
}
  }

}

  function zigzag() {
    translate(20, 0);
    for (var y = 0; y < windowHeight; y = y + 120) {
      for (var x = 0; x < windowWidth; x = x + 120) {

        line(random (0, 20) + x, random (0, 20) + y, x + 40, y + 40); //1st diagonal

        line(x, y + 40, x + 40, y + 40); //1st horizontal
        line(x, y + 40, x + 40, y + 80); //2nd diagonal
        line(x, y + 80, x + 40, y + 80); //2nd horizontal

        line(x, y + 80, x + random (20, 40), y + random (100, 120)); //3rd diagonal

      }
    }
  }
