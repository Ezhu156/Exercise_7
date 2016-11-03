function Bullet(xloc, yloc) {
  var x = xloc;
  var y = yloc;
  
  this.display = function(r, g, b) { 
  if (mouseIsPressed){
      x = mouseX;
      y = mouseY;
  }else{
    x=mouseX+50;
    y=890;
  }
      // Body
      noStroke();
      fill(r, g, b);
      ellipse(x, y, 25, 25);
    } //end display
} // end Bullet