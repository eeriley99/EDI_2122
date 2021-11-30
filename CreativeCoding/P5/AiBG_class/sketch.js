let img; //declaring the image variable

function preload (){
  img = loadImage ('assets/AiBGsingle.png');

function setup() { //runs once
    createCanvas(720, 720);
    // fill('yellow');
    // strokeWeight(8);
  }

function draw() {
  background(220);
  for (var y = 0; y < 600; y = y + 300){
    for (var x = 0; x < 600; x = x + 300 ){
    image(img, x, y);
    }
//  }
// translate (60,60);
// //For loop parts:
// //1)declare and initialize the increment variable
// //2)test expression
// //3)increment
//   for (var y = 0; y < 600; y = y + 300) {//loop to create rows in the y direction
//      for (var x = 0; x < 600; x = x + 300) {// loop to create a row of squares in the x direction0
//   quad(x, y,//this makes a 300x300 pixel square
//     x + 300, y,
//     x + 300, y + 300,
//     x, y + 300);
//   }
//   }
//   noLoop ();
}
}
