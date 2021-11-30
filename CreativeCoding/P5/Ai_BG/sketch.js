
let img;

function preload() {
  img = loadImage('asset/AiBG.png');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (255, 0, 0);
  image(img, 0, 0);
}

function draw (){
  translate (60,60);
  //For loop parts:
  //1)declare and initialize the increment variable
  //2)test expression
  //3)increment
    for (var y = 0; y < 600; y = y + 300) {//loop to create rows in the y direction

       for (var x = 0; x < 600; x = x + 300) {// loop to create a row of squares in the x direction

    quad(x, y,
      x + 300, y,
      x + 300, y + 300,
      x, y + 300);

    }

    }

    noLoop ();
}
