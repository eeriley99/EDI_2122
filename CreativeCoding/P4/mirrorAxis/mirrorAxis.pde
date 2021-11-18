/**
 * Use this to start a new sketch
 */
 
//int[] numbers = new int[2];


//numbers[0] = 0;  // Assign value to first element in the array
//numbers[1] = 255; // Assign value to second element in the array

int r = random(0, 255);
int g = random(0, 255);
int b = random(0, 255);
 
void setup() {
  size (800, 800);
  background (0, 0, 0);
}

void draw() {
  fill (r, g, b);
  rect (0,0,50,100);
}