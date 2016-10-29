var img, img2, img3, img4, img5, img6;
var x, y, rotation;
var a, b;

function preload() {
  img = loadImage("pics/alien.png");
  img2 = loadImage("pics/bucket.png");
  img3 = loadImage("pics/bucketTop.png");
  img4 = loadImage("pics/tennis.png");
  img5 = loadImage("pics/nerfGun.png");
  img6 = loadImage("pics/target.png");
} //end preload

function setup() {
  createCanvas(900, 900);
  x = 0;
  y = 150;
  rotation = 0.0;

} //end setup

function draw() {
  background(255, 201, 239);
  var ms = millis();
  text("Milliseconds \nrunning: \n" + ms, 5, 40);
  //alien
  image(img, 725, 735);

  //inside/top of bucket
  push();
  translate(100, -100);
  rotate(rotation);
  image(img3, 150, 145);
  pop();

  //tennis ball
  if (ms >= 1850) {
    push();
    translate(0, -100);
    //rotate(TWO_PI); //make it rotate around origin so it looks like it is rolling
    image(img4, x, y + 140);
    pop();
  } //end ms1850

  //bucket
  push();
  translate(100, -100);
  rotate(rotation);
  image(img2, 150, 150);
  pop();

  image(img5, mouseX, 710);
  image(img6, mouseX - (img6.width / 2), mouseY - (img6.height / 2));

  rotation += 0.01;
  if (rotation > 1.25) rotation -= 0.01;
  if (ms < 14500) x += 1.0;
  if (ms > 30000) {
    if (ms < 41500) {
      x += 1.0;
    } //end if
  } //end if

  if (ms >= 14500) {
    if (ms < 17000) {
      x -= 1;
      y += 1;
    } //end if
  } //end if

  if (ms >= 17000) {
    if (ms < 28000) {
      x -= 1;
    } //end if
  } //end if

  if (ms >= 28000) {
    if (ms < 30000) {
      x += 1;
      y += 1;
    } //end if
  } //end if

  if (ms >= 41500) {
    if (ms < 43000) {
      x -= 1;
      y += 1;
    } //end if
  } //end if

  if (ms >= 43000) {
    if (ms < 55000) {
      x -= 1;
    } //end if
  } //end if
} //end draw