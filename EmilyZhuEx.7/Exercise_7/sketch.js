var alien, bucket, bucketTop, tennis, nerf, target, pipe, right, left, pipet;
var vector, pipes, box;
var x, y, rotation;
var a, b; //affects the aliens at the end
var c = 0;
var d = 0;
var font;
var value = 0;
//the ball has a set path if none of the targets are pressed
//currently, in order to change the path of the ball, the target must be pressed and held until the ball reaches the end

function preload() {
  alien = loadImage("pics/alien.png");
  bucket = loadImage("pics/bucket.png");
  bucketTop = loadImage("pics/bucketTop.png");
  tennis = loadImage("pics/tennis.png");
  nerf = loadImage("pics/nerfGun.png");
  aim = loadImage("pics/target.png");
  pipe = loadImage("pics/pipe.png");
  right = loadImage("pics/rightpipe.png");
  left = loadImage("pics/leftpipe.png");
  pipet = loadImage("pics/pipet.png");
  target = loadImage("pics/vector.png");
  pipes = loadImage("pics/pipeh.png");
  box = loadImage("pics/box.png");
  font = loadFont("pics/font0.otf");
} //end preload

function setup() {
  createCanvas(950, 1000);
  x = 0;
  y = 150;
  rotation = 0.0;
  bob = new Bullet(mouseX + 50, 750);
  count=0;
  //background(255, 201, 239);
  //var reset = createButton("reset")
  //reset.mousePressed(resetcode);

} //end setup
function resetcode() {
  x = 0;
  y = 150;
  rotation = 0.0;
  bob = new Bullet(mouseX + 50, 750);
  count=0;
}

function draw() {
  background(190, 229, 255);
  stroke(0);
  strokeWeight(1);
  fill(0);

  Targets()
    //inside/top of bucket
  push();
  translate(100, -100);
  rotate(rotation);
  image(bucketTop, 150, 145);
  pop();

  Tennis();
  console.log("X is: " + x);
  console.log("Y is: " + y);

  //bucket
  push();
  translate(100, -100);
  rotate(rotation);
  image(bucket, 150, 150);
  pop();

  //text 
  stroke(0);
  strokeWeight(2);
  textSize(50);

  Pipes();
  noTint();

Boxes();

  fill(0, 50);
  textFont(font, 56);
  text("Aliens: Ooooooooooooooo!", 0, 50);

  //aim
  push();
  tint(0);
  image(aim, mouseX - (aim.width / 2), mouseY - (aim.height / 2));
  pop();
  //nerf bullet
  bob.display(0);
  //nerf gun
  image(nerf, mouseX, 850);

  //movement of the bucket
  rotation += 0.01;
  if (rotation > 1.25) rotation -= 0.01;

} //end draw

function mousePressed() {
  if (((mouseX >= 842) && (mouseX <= 917)) && ((mouseY >= 167) && (mouseY <= 243))) {
    value = 1;
  } else if (((mouseX >= 612) && (mouseX <= 687)) && ((mouseY >= 312) && (mouseY <= 487))) {
    value = 2;
  } else if (((mouseX >= 137) && (mouseX <= 212)) && ((mouseY >= 312) && (mouseY <= 487))) {
    value = 3;
  } else if (((mouseX >= 842) && (mouseX <= 917)) && ((mouseY >= 447) && (mouseY <= 522))) {
    value = 4;
  } else if (((mouseX >= 12) && (mouseX <= 87)) && ((mouseY >= 547) && (mouseY <= 622))) {
    value = 5;
  } else if (((mouseX >= 430) && (mouseX <= 505)) && ((mouseY >= 682) && (mouseY <= 757))) {
    value = 6;
  } else {
    value = 0;
  } //end else
  resetcode();
} //end mousePressed
