var alien, bucket, bucketTop, tennis, nerf, target, pipe, right, left, pipet;
var vector, pipes;
var x, y, rotation;
var a, b;

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
} //end preload

function setup() {
  createCanvas(950, 950);
  x = 0;
  y = 150;
  rotation = 0.0;
  bob = new Monster(mouseX + 50, 750);
  //background(255, 201, 239);

} //end setup

function draw() {
  background(255, 201, 239);
  stroke(0);
  strokeWeight(1);
  fill(0);


  textSize(20);
  var ms = millis();
  text("Milliseconds \nrunning: \n" + ms, 5, 40);
  //alien
  //image(alien, 725, 735);

  //inside/top of bucket
  push();
  translate(100, -100);
  rotate(rotation);
  image(bucketTop, 150, 145);
  pop();

  //tennis ball
  if (ms >= 1850) {
    push();
    translate(0, -100);
    //rotate(TWO_PI); //make it rotate around origin so it looks like it is rolling
    image(tennis, x, y + 140);
    pop();
  } //end ms1850

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
  console.log("X= " + mouseX);
  console.log("Y= " + mouseY)
    //pipe- normal track
  noTint();

  // pipe A
  image(pipe, 110, 220 - (pipe.height));
  text("A", 445, 215);

  //pipe B
  push();
  translate(800, 0);
  rotate((QUARTER_PI) * 1.3);
  image(pipet, 205, 95);
  pop();
  text("B", 755, 310);

  //pipe C
  image(pipes, 600 - (pipes.width), 375 - (pipes.height));
  text("C", 400, 368);

  //pipe D
  push();
  translate(420, 415);
  rotate((QUARTER_PI) * 3);
  image(pipet, 205, 95);
  pop();
  text("D", 110, 467);

  //pipe E
  image(pipes, 580 - (pipes.width), 545 - (pipes.height));
  text("E", 390, 538);

  // pipe F
  push();
  translate(950, 550);
  rotate((QUARTER_PI) * 3);
  image(pipet, 205, 95);
  pop();
  text("F", 645, 608);

  //pipe G
  image(pipet, 705, 670);
  text("G", 712, 770);

  //pipes-alternate
  tint(240, 0, 200);
  //pipe H
  image(pipet, 860, 265);
  text("H", 873, 350);

  //pipe I
  push();
  translate(1040, 318);
  rotate((QUARTER_PI) * 2.7);
  image(pipet, 205, 95);
  pop();
  text("I", 760, 440);

  //pipe J
  image(pipet, 860, 533);
  text("J", 873, 650);
  
  //pipe K
  image(left,838,700);
  text("K",865,755);


  noTint();
  //targets
  //target 1
  image(target, 880 - (target.width / 2), 205 - (target.height / 2));
  text("1", 865, 165);

  //target 2
  image(target, 650 - (target.width / 2), 350 - (target.height / 2));
  text("2", 635, 310);

  //target 3
  image(target, 150 - (target.width / 2), 350 - (target.height / 2));
  text("3", 135, 310);

  //target 4
  image(target, 880 - (target.width / 2), 485 - (target.height / 2));
  text("4", 920, 500);

  //target 5
  image(target, 80 - (target.width / 2), 575 - (target.height / 2));
  text("5", 65, 535);

  //target6
  image(target, 500 - (target.width / 2), 875 - (target.height / 2));
  text("6", 485, 835);

  //nerf gun and aim
  image(nerf, mouseX, 710);
  image(aim, mouseX - (aim.width / 2), mouseY - (aim.height / 2));

  //nerf bullet
  //if (mouseIsPressed) {
  bob.display(215, 193, 255);
  bob.move();
  //} // end mouseIsPressed


  //location of the tennis ball
  rotation += 0.01;
  if (rotation > 1.25) rotation -= 0.01;
  if (ms < 14500) x += 1.0;
  if (ms > 30000) {
    if (ms < 41500) {
      x += 1.0;
    } //end if
    if (ms > 60000) {
      if (ms < 68000) {
        x += 1.0;
      } //end if
    } //end if
  }

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

  if (ms >= 55000) {
    if (ms < 60000) {
      x += 1;
      y += 1;
    } //end if
  } //end if

} //end draw
