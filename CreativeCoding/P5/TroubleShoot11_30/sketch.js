
// copied from Empty example
// 2x2Loop sketch.js copy/paste (code varified)
// copy/paste works (code varified)
// tested new fill (works)
// loadImage reference
//       let img;
//       function preload() {
//         img = loadImage('assets/laDefense.jpg');
//       }
//       function setup() {
//         image(img, 0, 0);
//       }
// took assets folder from class example
// commented entire contents of draw function
// image worked
// replaced quad with image
// replaced hard-coded 0,0 with x,y
// pushed to GitHub
// success!

let img;

function preload (){
img = loadImage ('assets/AiBGsingle.png');
}

function setup() { //runs once
  createCanvas(720, 720);
  fill('red');
  strokeWeight(8);
}

function draw() {

background(220);

translate (60,60);
//For loop parts:
//1)declare and initialize the increment variable
//2)test expression
//3)increment
  for (var y = 0; y < 600; y = y + 300) {//loop to create rows in the y direction
     for (var x = 0; x < 600; x = x + 300) {// loop to create a row of squares in the x direction0
image (img, x, y);
  }
  }
  noLoop ();
}
