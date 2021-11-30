
let img;

function preload() {
  img = loadImage('asset/AiBG.png');
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (255, 0, 255);
  noFill ();


}

function draw (){


  for (var y = 0; y < 1800; y = y + 150){
      for (var x = 0; x < 1800; x = x + 600){
        image(img, x, y);
      }
}


  noLoop ();
}
