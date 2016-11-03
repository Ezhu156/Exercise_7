var alien, bucket, bucketTop, tennis, nerf, target, pipe, right, left, pipet;
var vector, pipes, box;
var x, y, rotation;
var a, b; //affects the aliens at the end
var c = 0;
var d = 0;
var font;
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
  //background(255, 201, 239);


} //end setup

function draw() {
  background(190, 229, 255);
  stroke(0);
  strokeWeight(1);
  fill(0);


  Targets();

  //inside/top of bucket
  push();
  translate(100, -100);
  rotate(rotation);
  image(bucketTop, 150, 145);
  pop();

  Tennis();
  //console.log("X is: " + x);
  //console.log("Y is: " + y);

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

  //box 1
  image(box, 375 - (box.width / 2), 1000 - (box.height / 2));
  //box 2
  image(box, 575 - (box.width / 2), 1000 - (box.height / 2));
  //box 3
  image(box, 900 - (box.width / 2), 1000 - (box.height / 2));
  
  //box 4 (original path)
  image(box, 145 - (box.width / 2), 1000 - (box.height / 2));
  if (((x >= 700) && (x <= 800)) && (y >= 869)) {
    image(alien, a - (alien.width / 2), b - (alien.height / 2), c, d);
    noStroke();
    stroke(200, 20, 100);
    textFont(font, 82);
    text("ALIEN", a - (alien.width / 2), b - (alien.height / 2), c, d);
    if (keyIsPressed === true) {
      a = width / 2;
      b = height / 2;
      if ((c <= 750) && (d <= 750)) c += 1, d += 1;
    } //end keypressed
    else {
      a = random(width);
      b = random(height);
    }
  } //end if

  //box 5 (Target 2)
  image(box, 745 - (box.width / 2), 1000 - (box.height / 2));
  if ((x >= 800) && (y >= 869)) {
    for (var e = -50; e <= height; e += 75) {
      for (var f = -50; f <= width; f += 140) {
        image(alien, f, e);
      } //end for e
    } //end for f
  } //end if

  textFont(font, 56);
  text("Aliens: Ooooooooooooooo!", 0, 50);

  //aim
  push();
  tint(0);
  image(aim, mouseX - (aim.width / 2), mouseY - (aim.height / 2));
  pop();
  //nerf bullet
  bob.display(215, 193, 255);
  //nerf gun
  image(nerf, mouseX, 850);

  //movement of the bucket
  rotation += 0.01;
  if (rotation > 1.25) rotation -= 0.01;

} //end draw
