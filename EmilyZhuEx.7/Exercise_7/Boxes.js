function Boxes() {
  var position;
  var velocity
  
  this.show = function() {
    //box 1
    image(box, 375 - (box.width / 2), 1000 - (box.height / 2));
    if (((x > 100) && (x <= 150)) && (y >= 875)) {
      image(alien, 0, 0, c, d);
      if ((c <= 1000) && (d <= 1000)) c += 1.5, d += 1.5;
    } //end if

    //box 2
    image(box, 575 - (box.width / 2), 1000 - (box.height / 2));
    tint(mouseX, 0, mouseY);
    if (((x > 300) && (x <= 350)) && (y >= 875)) {
      for (var e = -25; e <= width - 25; e += 250) {
        for (var f = -25; f <= height - 25; f += 250) {
          image(alien, e, f)
        }
      }
      for (var g = 100; g <= width - 100; g += 250) {
        for (var h = 100; h <= height - 100; h += 250) {
          image(alien, g, h)
        } //end for e
      } //end for f
    } //end if
    noTint();
    //box 3
    image(box, 900 - (box.width / 2), 1000 - (box.height / 2));
    if (((x > 550) && (x <= 600)) && (y >= 875)) {
      image(alien, 0, 0, c, d);
      if ((c <= 1000) && (d <= 1000)) c += 1.5, d += 1.5;
    } //end if

    //box 4 (original path)
    image(box, 145 - (box.width / 2), 1000 - (box.height / 2));
    if (((x > 700) && (x <= 800)) && (y >= 875)) {
      image(alien, a - (alien.width / 2), b - (alien.height / 2), 100, 100);
      a = random(width)
      b = random(height)
    } //end if

    //box 5 (Target 2)
    image(box, 745 - (box.width / 2), 1000 - (box.height / 2));
    if ((x > 800) && (y >= 875)) {
      for (var e = -25; e <= width - 25; e += 250) {
        for (var f = -25; f <= height - 25; f += 250) {
          image(alien, e, f)
        }
      }
      for (var e = 100; e <= width - 100; e += 250) {
        for (var f = 100; f <= height - 100; f += 250) {
          image(alien, e, f)
        } //end for e
      } //end for f
    } //end if
  }//end show
} //end boxes
