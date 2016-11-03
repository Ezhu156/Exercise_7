function Targets() {
  fill(0, 50);
  //rect(137, 2, 75, 75);

  //target 1
  if (((mouseX >= 842) && (mouseX <= 917)) && ((mouseY >= 167) && (mouseY <= 243))) {
    if (mouseIsPressed) {
      image(alien, 880 - (alien.width / 4), 205 - (alien.height / 4), 100, 100);
    } //end if
  } //end mousePressed
  else image(target, 880 - (target.width / 2), 205 - (target.height / 2));


  //target 2
  if (((mouseX >= 612) && (mouseX <= 687)) && ((mouseY >= 312) && (mouseY <= 487))) {
    if (mouseIsPressed) {
      image(alien, 640 - (alien.width / 4), 340 - (alien.height / 4), 100, 100);
    } //end if
  } //end mousePressed
  else image(target, 650 - (target.width / 2), 350 - (target.height / 2));
  // text("2", 635, 310);

  //target 3
  if (((mouseX >= 137) && (mouseX <= 212)) && ((mouseY >= 312) && (mouseY <= 487))) {
    if (mouseIsPressed) {
      image(alien, 170 - (alien.width / 4), 330 - (alien.height / 4), 100, 100);
    } //end if
  } //end mousePressed
  else image(target, 175 - (target.width / 2), 350 - (target.height / 2));
  //text("3", 160, 310);

  //target 4
  if (((mouseX >= 842) && (mouseX <= 917)) && ((mouseY >= 447) && (mouseY <= 522))) {
    if (mouseIsPressed) {
      image(alien, 890 - (alien.width / 4), 470 - (alien.height / 4), 100, 100);
    } //end if
  } //end mousePressed
  else image(target, 880 - (target.width / 2), 485 - (target.height / 2));
  // text("4", 920, 500);

  //target 5
  if (((mouseX >= 12) && (mouseX <= 87)) && ((mouseY >= 547) && (mouseY <= 622))) {
    if (mouseIsPressed) {
      image(alien, 50 - (alien.width / 4), 570 - (alien.height / 4), 100, 100);
    } //end if
  } //end mousePressed
  else image(target, 50 - (target.width / 2), 585 - (target.height / 2));
  // text("5", 90, 583);

  //target6
  if (((mouseX >= 430) && (mouseX <= 505)) && ((mouseY >= 682) && (mouseY <= 757))) {
    if (mouseIsPressed) {
      image(alien, 460 - (alien.width / 4), 700 - (alien.height / 4), 100, 100);
    } //end if
  } //end mousePressed
  else image(target, 468 - (target.width / 2), 720 - (target.height / 2));
  // text("6", 455, 685);


} //end targets