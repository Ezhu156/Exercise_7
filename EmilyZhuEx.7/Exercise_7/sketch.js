//the purpose of this program is it allows the user to control the direction of the ball
//when a target is pressed, everything resets and the ball starts its journey again but depending on the
//target the user pressed, the ball will move in a certain direction
//when the ball reaches one of the boxes at the end of the path, a different action is generated

//Overall, there are still a few issues in my code that can be fixed and things that can be fixed so the code runs more efficiently, but it works enough to
//get the idea that the user has control of the end result across
var alien, bucket, bucketTop, tennis, nerf, target, pipe, right, left, pipet;
var vector, pipes, sqaure;
var x, y, rotation; //x and y is the location of the tennis ball and rotation affects the bucket
var a, b; //affects the aliens at the end
var c = 0;
var d = 0;
var font; //font the text is in
var value = 0; //value affects the mouse pressed and path of the tennis ball
var square; //value for the boxes at the end
var path; //the targets that affect the path of the ball
var move; //movement of the tennis ball
var tubes; //the pipes the ball runs through

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
  square = loadImage("pics/box.png");
  font = loadFont("pics/font0.otf");
} //end preload

function setup() {
  createCanvas(950, 1000);
  x = 0;
  y = 150;
  rotation = 0.0;
  bob = new Bullet(mouseX + 50, 750);
  count = 0;
  end = new Boxes();
  path = new Targets();
  move = new Tennis();
  tubes= new Pipes();
  //background(255, 201, 239);
  //var reset = createButton("reset")
  //reset.mousePressed(resetcode);

} //end setup
function resetcode() { //resets the code so that when a target is pressed, the path of the tennis ball will also change
  x = 0;
  y = 150;
  rotation = 0.0;
  bob = new Bullet(mouseX + 50, 750);
  count = 0;
  end = new Boxes();
  path = new Targets();
  move = new Tennis();
  tubes= new Pipes();
}

function draw() {
  background(190, 229, 255);
  stroke(0);
  strokeWeight(1);
  fill(0);

  path.hit()
    //inside/top of bucket
  push();
  translate(100, -100);
  rotate(rotation);
  image(bucketTop, 150, 145);
  pop();

  move.roll();
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

  tubes.show();
  noTint();

  end.show(); //boxes at the end of each path

  fill(0, 50);
  textFont(font, 56);
  text("Aliens: Ooooooooooooooo!", 0, 50);

  //aim (scope of the nerf gun, where the bullet will fire)
  push();
  tint(0);
  image(aim, mouseX - (aim.width / 2), mouseY - (aim.height / 2));
  pop();
  //nerf bullet 
  bob.display();
  //nerf gun
  image(nerf, mouseX, 850);

  //movement of the bucket
  rotation += 0.01;
  if (rotation > 1.25) rotation -= 0.01;

} //end draw

//mouse pressed affects the targets which then affect the movement of the ball
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
