/**
 * Creates a design that mirrors across an axis,
 patterns across the canvas in x and y,
 is randomly colored
 EER 11/12/21
 */


int[] rGbV; // Declare RGB value
rGbV = new int[2]; // Create array


size(800, 800);
background (0, 0, 0);

rGbV[0] = 0; // Assign numbers to array
rGbV[1] = 255;


  fill (
  rGbV [int(random(2))],
  rGbV [int(random(2))],
  rGbV [int(random(2))]
  );

  rect (0, 0, 50, 100);
