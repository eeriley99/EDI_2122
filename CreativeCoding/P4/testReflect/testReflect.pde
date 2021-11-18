/**
 * Test reflecting an image on X axis
 EER 11/12/21
 */
PImage img;

 img = loadImage("starry.PNG");

 size(800,800);

 image(img,0,0);
 scale(-1,1);//flip on X axis
 image(img,-img.width,img.height);//draw offset
