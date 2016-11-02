function Monster(xloc, yloc) {
  var x = xloc;
  var y = yloc;
  this.position = createVector(width / 2, height / 2);
  this.velocity = createVector();
  acceleration = createVector();
  this.topspeed = 10;

  this.move = function() {
      var m = createVector(mouseX, mouseY);
      this.acceleration = p5.Vector.sub(m, this.position);
      var k = acceleration.mag(.8);

      //stops the monster from moving once it has reached the mouse location
      var pause = p5.Vector.sub(acceleration, this.velocity);
      pause.limit(this.topspeed);
      this.acceleration.add(pause);

      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.position.add(this.velocity);
    } //end move

  this.display = function(r, g, b) { //morphed monster
  if (mouseIsPressed){
      x = this.position.x;
      y = this.position.y;
  }else{
    x=mouseX+50;
    y=750;
  }
      // Body
      noStroke();
      fill(r, g, b);
      ellipse(x, y, 25, 25);
    } //end display
} // end monster