function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  //background(0);
  //stroke(255);
  noFill();
  drawCircle(windowWidth / 2, windowHeight / 2, 300);
}

function draw() {
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once

}

function drawCircle(x,y,d) {
  ellipse(x,y,d);
  var r = random(0.3, 0.5);
  var z = random(0.3, 0.5);
  if(d > 18){
   drawCircle(x + d * r, y, d * r);
   drawCircle(x - d * r, y, d * r);
   drawCircle(x, y + d * z, d * z);
   drawCircle(x, y - d * z, d * z);
  }

}
