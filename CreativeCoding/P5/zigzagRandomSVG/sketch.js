let ix = 8.5; //paper width in inches
let iy = 11; //paper height in inches

let canvaWidth = ix * 72; //72 pixels per inch(digital resolution)
let canvaHeight = iy * 72;

function setup() {
  createCanvas (canvaWidth, canvaHeight, SVG);
  stroke (0);
}

function draw() {
  background (255);
  noFill ();
  stroke (0);
  strokeWeight (1);

var num = 5;
var sideLen = canvaWidth/num;

  squ();
  zigzag();
  save("zzSVG.svg"); // give file name
  print("saved svg");
  noLoop();
}


function squ() {
  for (var y = 0; y < canvaHeight; y = y + 120){
     for (var x = 0; x < canvaWidth; x = x + 120){
     square(80 + x, random (10, 90) + y, random (10, 40));
}
  }

}

function zigzag() {
  for (var y = 0; y < canvaHeight; y = y + 120) {
    for (var x = 0; x < canvaWidth; x = x + 120) {

      line(random (0, 20) + x, random (0, 20) + y, x + 40, y + 40); //1st diagonal

      line(x, y + 40, x + 40, y + 40); //1st horizontal
      line(x, y + 40, x + 40, y + 80); //2nd diagonal
      line(x, y + 80, x + 40, y + 80); //2nd horizontal

      line(x, y + 80, x + random (20, 40), y + random (100, 120)); //3rd diagonal

    }
  }
}
