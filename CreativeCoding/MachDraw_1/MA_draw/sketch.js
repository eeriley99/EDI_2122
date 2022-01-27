function setup() {
  createCanvas(400, 400, SVG);
  noFill();
  background(255);
}

function draw() {
  ellipseGrid ();
  sqGrid ();
  centerEllipse();

  save("OverallPatternSVG.svg");
  print("saved svg");
  noLoop();
}

function ellipseGrid (){
  for (var x = 0; x <= width; x += 80) {
    for (var y = 0; y <= height; y += 80) {
       stroke(200, 100, 100);
       ellipse(x, y, 160, 160);
     }
   }
}

function sqGrid (){
  push();
  translate(15, 15);
  for (ry = 0; ry <= width; ry += 80){
  for (rx = 0; rx <= width; rx += 80){
    rect(rx, ry, 50, 50);
  }
}
pop();
}

function centerEllipse (){
  for (cy = 0; cy <= width; cy += 80){
  for (cx = 0; cx <= width; cx += 80){
  ellipse(cx, cy, 40, 40);
}
}
}
