//copied empty example
//copy/paste 2x2 Loop (code varified)
//assets folder with png
//checked color of fill (code varified)
//p5js loadImage reference
//replaced the quad shape with image
// push to GH

let gif;//declare image variable

function preload (){
gif = loadImage ('assets/AiBG.gif');
}

function setup() { //runs once
  createCanvas(720, 720);
  background ('red'),
  fill('red');
  strokeWeight(8);
}

function draw() {


translate (60,60);
//For loop parts:
//1)declare and initialize the increment variable
//2)test expression
//3)increment
  for (var y = 0; y < 600; y = y + 300) {//loop to create rows in the y direction
     for (var x = 0; x < 600; x = x + 300) {// loop to create a row of squares in the x direction0
    image (gif, x, y);
  }
  }
  noLoop ();
}
