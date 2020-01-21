function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  // put drawing code here
  background(28, 165, 214);
  noStroke();

  fill('yellow')
  // sun
  ellipse(130, 160, 200, 200)

  fill ('white')
  // clouds
  ellipse(600, 100, 50, 50)

  fill ('white')
  // clouds
  ellipse(570, 100, 50, 50)

  fill ('white')
  // clouds
  ellipse(610, 120, 50, 50)

  fill ('white')
  // clouds
  ellipse(620, 90, 50, 50)

  fill('green')
  // grass
  rect(0, 300, 720, 400)

  fill(11, 94, 38)
  // backgroun tree
  triangle(350, 85, 300, 340, 380, 340);

  fill(23, 207, 83)
  triangle(270, 25, 220, 360, 320, 360);

  fill(23, 207, 83)
  triangle(450, 25, 350, 360, 550, 360);

  fill(23, 207, 83)
  triangle(150, 25, 100, 360, 200, 360);

  fill(102, 44, 0)
  rect(135, 360, 20, 40 )

  fill(102, 44, 0)
  rect(260, 360, 20, 40 )

  fill(102, 44, 0)
  rect(425, 360, 40, 40 )

  fill(59, 26, 1)
  // backrground tree stump
  rect(325, 340, 20, 40 )




  // fill(204);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102);
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill(255);
  // ellipse(252, 144, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);
  fill(0) ;
  textSize(30) ;
  // THIS HELPS YOU FIND COORDINATES
  text(mouseX + "," + mouseY, 50, 50) ;
}
