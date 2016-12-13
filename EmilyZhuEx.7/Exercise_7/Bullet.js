function Bullet(xloc, yloc) {
  var x = xloc;
  var y = yloc;
  
  this.display = function() { 
  if (mouseIsPressed){ //if the mouse is pressed the the bullet will be where the mouse is
                      //it will also be in the middle of the ner gun scope
      x = mouseX;
      y = mouseY;
  }else{
    x=mouseX+50;
    y=890;
  } //end else
      // the circle that represents the bullet being fired
      noStroke();
      fill(0,100);
      ellipse(x, y, 25, 25);
    } //end display
} // end Bullet
