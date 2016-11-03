function Tennis() {
  var target = 0;
  var z = 15500;

  textSize(20);
  var ms = millis();
//  text("Milliseconds \nrunning: \n" + ms, 5, 40);
  //tennis ball
  if (ms >= 1850) {
    push();
    translate(0, -100);
    //rotate(TWO_PI); //make it rotate around origin so it looks like it is rolling
    image(tennis, x, y + 140);
    pop();
  } //end ms1850
  //  if (target === 0) {
  //original path
  //pipe A
  if (ms < z) x += 1.0;
  //pipe B
  if ((ms >= z) && (ms < z + 2600)) x -= 1.53, y += 1;
  //pipe C
  if ((ms >= z + 2600) && (ms < z + 10700)) x -= 1;
  //pipe D
  if ((ms >= z + 10700) && (ms < z + 15100)) y += 1;
  //pipe F
  if ((ms >= z + 15100) && (ms < z + 22900)) x += 1;
  //pipe G
  if ((ms >= z + 22900) && (ms < z + 24200)) x += 1.15, y += 1;
  //pipe H
  if ((ms >= z + 24200) && (ms <= z + 28500)) y += 1;
  //  } //end stage 0

  /*
   // else if (target == 1) {
      //Target 1
      //pipe A
      if (ms < 15500) x += 1.0;
      //pipe Z
      if ((ms >= 15500) && (ms <= 25000)) y += 1;
      //pipe W
      if ((ms >= 25000) && (ms <= 26400)) x -= 1; //1400
      //pipe U
      if ((ms >= 26400) && (ms <= 28000)) y += 1; //1600
      //pipe T
      if ((ms >= 28000) && (ms <= 29600)) x += 1; //1600
      //pipe S
      if ((ms >= 29600) && (ms <= 32000)) y += 1; //2400
   // } else if (target == 2) {
      //Target 2
      //pipe A
      if (ms < 15500) x += 1.0;
      //pipe B
      if ((ms >= 15500) && (ms <= 18100)) x -= 1.55, y += 1;
      //pipe Y
      if ((ms >= 18100) && (ms <= 20700)) x += 1.55, y += 1;
      //pipe X
      if ((ms >= 20700) && (ms <= 25000)) y += 1;
      //pipe W
      if ((ms >= 25000) && (ms <= 26400)) x -= 1;
      //pipe U
      if ((ms >= 26400) && (ms <= 28000)) y += 1;
      //pipe T
      if ((ms >= 28000) && (ms <= 29600)) x += 1;
      //pipe S
      if ((ms >= 29600) && (ms <= 32000)) y += 1;
  //  } else if (target == 3) {
      //Target 3
      //pipe A
      if (ms < 15500) x += 1.0;
      //pipe B
      if ((ms >= 15500) && (ms <= 18100)) x -= 1.55, y += 1;
      //pipe C
      if ((ms >= 18100) && (ms <= 27000)) x -= 1;
      //pipe I
      if ((ms >= 27000) && (ms <= 30600)) x -= .55, y += 1;
      //pipe J
      if ((ms >= 30600) && (ms <= 36000)) y += 1;
      //pipe T
      if ((ms >= 36000) && (ms <= 37600)) x += 1;
      //pipe S
      if ((ms >= 37600) && (ms <= 40000)) y += 1;
      */
  // }
  /*
    //Target 3 + 5
    //pipe A
    if (ms < 15500) x += 1.0;
    //pipe B
    if ((ms >= 15500) && (ms <= 18100)) x -= 1.53, y += 1;
    //pipe C
    if ((ms >= 18100) && (ms <= 27200)) x -= 1;
    //pipe I
    if ((ms >= 27200) && (ms <= 31300)) x -= .53, y += 1;
      //pipe K
    if ((ms >= 31300) && (ms <= 34000)) x += 1.43, y += 1;
    //pipe L
    if ((ms >= 34000) && (ms <= 38700)) x += 1;
    //pipe N
    if ((ms >= 38700) && (ms <= 43700)) x += .50, y += 1;
    */
  /*
  //Target 3+5+6
  //pipe A
  if (ms < 15500) x += 1.0;
  //pipe B
  if ((ms >= 15500) && (ms <= 18100)) x -= 1.53, y += 1;
  //pipe C
  if ((ms >= 18100) && (ms <= 27200)) x -= 1;
  //pipe I
  if ((ms >= 27200) && (ms <= 31300)) x -= .53, y += 1;
    //pipe K
  if ((ms >= 31300) && (ms <= 34000)) x += 1.43, y += 1;
  //pipe L
  if ((ms >= 34000) && (ms <= 38400)) x += 1;
    //pipe M
  if ((ms >= 38400) && (ms <= 43500)) x -= .50, y += 1;
  */
  /*
  //Target 1+4+6
  //pipe A
  if (ms < 15500) x += 1.0;
  //pipe Z
  if ((ms >= 15500) && (ms <= 20700)) y += 1;
  //pipe V
  if ((ms >= 20700) && (ms <= 25000)) x -= 1.7, y += 1;
  //pipe N
  if ((ms >= 25000) && (ms <= 29000)) x += .50, y += 1;
*/
  /*
    //Target 1+4
      //Target 1+4+6
    //pipe A
    if (ms < 15500) x += 1.0;
    //pipe Z
    if ((ms >= 15500) && (ms <= 20700)) y += 1;
    //pipe V
    if ((ms >= 20700) && (ms <= 25200)) x -= 1.7, y += 1;
    //pipe M
    if ((ms >= 25200) && (ms <= 29000)) x -= .50, y += 1;
    */
  /*
  //Target 2+4
  //pipe A
  if (ms < 15500) x += 1.0;
  //pipe B
  if ((ms >= 15500) && (ms <= 18100)) x -= 1.55, y += 1;
  //pipe Y
  if ((ms >= 18100) && (ms <= 20700)) x += 1.55, y += 1;
  //pipe V
  if ((ms >= 20700) && (ms <= 25000)) x -= 1.7, y += 1;
  //pipe N
  if ((ms >= 25000) && (ms <= 29000)) x += .50, y += 1;
  */
  //Target 2+4+6
  //pipe A
  /*
  if (ms < 15500) x += 1.0;
//pipe B
 if ((ms >= 15500) && (ms <= 18100)) x -= 1.55, y += 1;
 //pipe Y
 if ((ms >= 18100) && (ms <= 20700)) x += 1.55, y += 1;
//pipe V
 if ((ms >= 20700) && (ms <= 25000)) x -= 1.7, y += 1;
 //pipe M
 if ((ms >= 25000) && (ms <= 29000)) x -= .50, y += 1;
*/
}
/*
function mouseClicked() {
  //target 1
  if ((mouseX >= 880) && (mouseX <= 880 + target.width)) {
    if ((mouseY >= 205) && (mouseX <= 205 + target.height)) {
      target = 1;
    } //end x
  } //end y

  //target 2
  if ((mouseX >= 650) && (mouseX <= 650 + target.width)) {
    if ((mouseY >= 350) && (mouseX <= 350 + target.height)) {
      target = 2;
    } //end x
  } //end y

  //target 3
  if ((mouseX >= 175) && (mouseX <= 175 + target.width)) {
    if ((mouseY >= 350) && (mouseX <= 350 + target.height)) {
      target = 3;
    } //end x
  } //end y
}
*/