
let img;

function preload() {
  img = loadImage('asset/AiBG.gif');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (255, 0, 0);
  noFill ();
}

function draw (){
  translate (60,60);
  for (var y = 0; y < 600; y = y + 300){
      for (var x = 0; x < 600; x = x + 300){
        image(img, x, y);
      }
}

  //noLoop ();
}
