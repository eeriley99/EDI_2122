var randDrawing;

function preload() { // all photos 150 pixel width

    arm = loadImage('assets/Snowflake1.png');
    shirt = loadImage('assets/Snowflake2.png');
    hose = loadImage('assets/Snowflake3.png');
    hand = loadImage('assets/Snowflake4.png');
    feather = loadImage('assets/Snowflake5.png');
    cans = loadImage('assets/Snowflake6.png');
    firewood = loadImage('assets/Snowflake7.png');


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

            var pics = [arm, shirt, hose, hand, feather, cans, firewood, crib, caterpillar, bird];

            quad(x, y,
                x + sideLen, y,
                x + sideLen, y + sideLen,
                x, y + sideLen);
            image(pics[int(random(0, 6))], x + (sideLen / 2 - 75), y + (sideLen / 2 - 75));

        }

    }
    noLoop();
}
