  function Pipes() {
    this.show = function() {
      //pipe- normal track
      noTint();

      // pipe A
      image(pipe, 110, 220 - (pipe.height));
      //text("A", 445, 215);

      //pipe B
      push();
      translate(800, 0);
      rotate((QUARTER_PI) * 1.3);
      image(pipet, 205, 95);
      pop();
      //text("B", 755, 310);

      //pipe C
      image(pipes, 600 - (pipes.width), 375 - (pipes.height));
      // text("C", 400, 368);

      //pipe I
      push();
      translate(70, 202);
      rotate((QUARTER_PI) * 0.5);
      image(pipet, 100, 145);
      pop();
      // text("I", 90, 475);

      //pipe E
      push();
      translate(242, 345);
      rotate(HALF_PI);
      image(left, 208, 10);
      pop();
      // text("E", 178, 615);

      //pipe D
      image(pipet, 160, 395);
      //  text("D", 170, 490);

      //pipe F
      image(pipes, 596 - (pipes.width), 627 - (pipes.height));
      //  text("F", 400, 620);

      // pipe G
      push();
      translate(967, 633);
      rotate((QUARTER_PI) * 3);
      image(pipet, 205, 95);
      pop();
      //  text("G", 661, 690);

      //pipe H
      image(pipet, 719, 750);
      // text("H", 727, 850);

      //pipe J
      image(pipet, 20, 630);
      // text("J", 35, 730);

      //pipe K
      push();
      translate(445, 590);
      rotate((QUARTER_PI) * 2.85);
      image(pipet, 205, 95);
      pop();
      // text("K", 142, 677);

      //pipe L
      push();
      translate(810, 532);
      rotate(HALF_PI);
      image(pipet, 160, 395);
      pop();
      //text("L", 320, 736);

      //pipe M
      push();
      translate(270, 585);
      rotate((QUARTER_PI) * 0.5);
      image(pipet, 205, 95);
      pop();
      // text("M", 395, 860);

      //pipe N
      push();
      translate(815, 917);
      rotate((QUARTER_PI) * 3.5);
      image(pipet, 205, 95);
      pop();
      //  text("N", 515, 860);

      //pipe O
      push();
      translate(102, 577);
      rotate(HALF_PI);
      image(left, 208, 10);
      pop();
      //   text("O", 35, 847);

      //pipe P
      image(right, 90, 808);
      // text("P", 119, 857);


      //pipes-alternate
      //tint(240, 0, 200);
      //pipe Z
      image(pipet, 860, 265);
      // text("Z", 873, 350);

      //pipe Y
      push();
      translate(1040, 318);
      rotate((QUARTER_PI) * 2.7);
      image(pipet, 205, 95);
      pop();
      //text("Y", 755, 445);

      //pipe X
      image(pipet, 860, 533);
      // text("X", 870, 650);

      //pipe W
      image(left, 838, 699);
      //text("W", 865, 753);

      //pipe V
      push();
      translate(1075, 510);
      rotate((QUARTER_PI) * 3.3);
      image(pipes, 205, 95);
      pop();
      //  text("V", 755, 575);

      //pipe U
      push();
      translate(990, 990);
      rotate((QUARTER_PI) * 4);
      image(left, 138, 199);
      pop();
      // text("U", 791, 770);

      //pipe T
      push();
      translate(859, 577);
      rotate(HALF_PI);
      image(left, 208, 10);
      pop();
      // text("T", 800, 850);

      //pipe S
      image(right, 848, 808);
      // text("S", 870, 852);
    }//end show
  } //end function
