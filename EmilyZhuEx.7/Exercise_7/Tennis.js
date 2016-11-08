function Tennis() {
  textSize(20);
  //var ms = millis();
  //text("Milliseconds \nrunning: \n" + ms, 95, 40);
  count += 20;
  text("Count: " + count, 5, 120);
  //tennis ball
  if (count >= 1850) {
    push();
    translate(0, -100);
    //rotate(TWO_PI); //make it rotate around origin so it looks like it is rolling
    image(tennis, x, y + 140);
    pop();
  } //end ms1850

  if (value == 1) {
    //Target 1
    //pipe A
    if (count < 17500) x += 1.0;
    //pipe Z
    if ((count >= 17500) && (count <= 28200)) y += 1;
    //pipe W
    if ((count >= 28200) && (count <= 29700)) x -= 1;
    //pipe U
    if ((count >= 29700) && (count <= 31500)) y += 1;
    //pipe T
    if ((count >= 31500) && (count <= 33300)) x += 1;
    //pipecount S
    if ((count >= 33300) && (count <= 35500)) y += 1;

  } else if (value == 2) {
    //Target 2
    //pipe A
    if (count < 17500) x += 1.0;
    //pipe B
    if ((count >= 17500) && (count <= 20500)) x -= 1.53, y += 1;
    //pipe Y
    if ((count >= 20500) && (count <= 23500)) x += 1.55, y += 1;
    //pipe X
    if ((count >= 23500) && (count <= 28200)) y += 1;
    //pipe W
    if ((count >= 28200) && (count <= 29700)) x -= 1;
    //pipe U
    if ((count >= 29700) && (count <= 31500)) y += 1;
    //pipe T
    if ((count >= 31500) && (count <= 33300)) x += 1;
    //pipecount S
    if ((count >= 33300) && (count <= 35500)) y += 1;

  } else if (value == 3) {
    //Target 3
    //pipe A
    if (count < 17500) x += 1.0;
    //pipe B
    if ((count >= 17500) && (count <= 20500)) x -= 1.53, y += 1;
    //pipe C
    if ((count >= 20500) && (count < 30500)) x -= 1;
    //pipe I
    if ((count >= 30500) && (count <= 35000)) x -= .53, y += 1;
    //pipe J
    if ((count >= 35000) && (count <= 40000)) y += 1;
    //pipe O
    if ((count >= 40000) && (count <= 42000)) x += 1;
    //pipe P
    if ((count >= 42000) && (count <= 45500)) y += 1;
  } else if (value==4){
  //pipe A
    if (count < 17500) x += 1.0;
    //pipe Z
    if ((count >= 17500) && (count <= 23000)) y += 1;
    //pipe V
    if ((count >= 23000) && (count <= 27700)) x -= 1.7, y += 1;
    //pipe N
    if ((count >= 27700) && (count <= 33000)) x += .40, y += 1;

  } else if (value == 5) {

    //Target 3 + 5
    //pipe A
    if (count < 17500) x += 1.0;
    //pipe B
    if ((count >= 17500) && (count <= 20500)) x -= 1.53, y += 1;
    //pipe C
    if ((count >= 20500) && (count < 30500)) x -= 1;
    //pipe I
    if ((count >= 30500) && (count <= 35000)) x -= .53, y += 1;
    //pipe K
    if ((count >= 35000) && (count <= 37700)) x += 1.43, y += 1;
    //pipe L
    if ((count >= 37700) && (count <= 42700)) x += 1;
    //pipe N
    if ((count >= 42700) && (count <= 50000)) x += .50, y += 1.3;

  } else if (value == 6) {

    //pipe A
    if (count < 17500) x += 1.0;
    //pipe Z
    if ((count >= 17500) && (count <= 23000)) y += 1;
    //pipe V
    if ((count >= 23000) && (count <= 28000)) x -= 1.7, y += 1;
    //pipe M
    if ((count >= 28000) && (count <= 33000)) x -= .50, y += 1.2;

  } else {
    //original path
    //pipe A
    if (count < 17500) x += 1.0;
    //pipe B
    if ((count >= 17500) && (count < 20500)) x -= 1.53, y += 1;
    //pipe C
    if ((count >= 20500) && (count < 30000)) x -= 1;
    //pipe D
    if ((count >= 30000) && (count < 35000)) y += 1;
    //pipe F
    if ((count >= 35000) && (count < 43300)) x += 1;
    //pipe G
    if ((count >= 43300) && (count < 45500)) x += 1.35, y += 1.2;
    //pipe H
    if ((count >= 45500) && (count <= 50000)) y += 1;
  } //end else 
} //end function
