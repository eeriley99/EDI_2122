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
for (var y = 0; y < 600; y = y + 300){
  for (var x = 0; x < 600; x = x + 300) {
  image (gif, x, y);
  }
}

}
