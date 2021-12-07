var randDrawing;

function preload() { // all photos 150 pixel width

    S1 = loadImage('assets/Snowflake1.png');
    S2 = loadImage('assets/Snowflake1.png');

}

function setup() { //runs once
    createCanvas(windowWidth, windowWidth);
    noStroke();
    frameRate(.5);

}

function draw() {

    var num = 8; //variable for the number of squares in the array

    var sideLen = windowWidth / num; //variable for the side length of each square

    for (var y = 0; y < windowWidth; y = y + sideLen) { //loop to create rows in the y direction

        for (var x = 0; x < windowWidth; x = x + sideLen) { // loop to create a row of squares in the x direction

            var pics = [S1, S2];

            quad(x, y,
                x + sideLen, y,
                x + sideLen, y + sideLen,
                x, y + sideLen);
            image(pics[int(random(0, 1))], x + (sideLen / 2 - 75), y + (sideLen / 2 - 75));

        }

    }
    noLoop();
}
