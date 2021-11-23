function setup() { //runs once
  createCanvas(720, 720);
  fill('red');
  strokeWeight(8);
}

function draw() {
  background(220);

  translate(60, 60);
//parts of a for Loop
//declare and initialize the increment variable
//test the conditions
//increment

for (var y = 0; y < 600; y = y + 300){
  for (var x = 0; x < 600; x = x + 300 ){
    quad(x, y,
      x + 300, y,
      x + 300, y + 300,
      x, y + 300);
  }
}





  noLoop ();
}
