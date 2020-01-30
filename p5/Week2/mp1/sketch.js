function setup() {
  // put setup code here
  createCanvas(1080, 720)
  // rectMode(CENTER)
}

function draw() {
  background(122, 101, 207);
  fill(0);

  if (mouseIsPressed) {
    noStroke()
    // background lights
    fill(72, 38, 128)
    quad(0, 0, 320, 0, 500, 500, 0, 500)
    fill(72, 38, 128)
    quad(760, 0, 1080, 0, 1080, 500, 580, 500,)
    // stage
    ellipse(50, 50, 50, 50);
    fill(90)
    rect(0, 500, 1080, 720);
    // tom drum
    fill(39, 29, 122)
    rect(380, 375, 95, 110);
    fill(184, 169, 116);
    ellipse(427, 380, 100, 50);
    // back of head hair
    fill(140, 27, 10)
    triangle(537, 170, 577, 239, 503, 239)
    // stick
    fill('black')
    triangle(540, 220, 484, 348, 580, 348)
    // person
    fill('black')
    triangle(465, 172, 531, 252, 526, 261)
    triangle(605, 172, 549, 260, 549, 248)
    fill(245, 209, 162)
    ellipse(538, 180, 90, 90)
    ellipse(465, 172, 20, 20)
    ellipse(605, 172, 20, 20)

    // face
    fill('black')
    arc(537, 201, 30, 20, 0, (radians(180)))
    ellipse(520, 176, 10, 10)
    ellipse(552, 176, 10, 10)
    // hair
    fill(140, 27, 10)
    arc(530, 180, 90, 90, 116, (radians(300)))

    // bass drum and high toms
    fill(184, 169, 116);
    ellipse(630, 250, 100, 50);
    fill(39, 29, 122);
    ellipse(540, 400, 200, 200);
    fill(184, 169, 116);
    ellipse(540, 400, 185, 185);
    fill(110, 101, 70);
    arc(540, 400, 185, 185, 0, PI + QUARTER_PI, CHORD);
    fill(39, 29, 122)
    rect(403, 245, 95, 65);
    fill(184, 169, 116);
    ellipse(450, 250, 100, 50);
    fill(39, 29, 122)
    rect(583, 245, 95, 65);
    fill(184, 169, 116);
    ellipse(630, 250, 100, 50);


  } else {
    noStroke()
    // background lights
    fill(152, 121, 227)
    quad(0, 0, 320, 0, 500, 500, 0, 500)
    fill(152, 121, 227)
    quad(760, 0, 1080, 0, 1080, 500, 580, 500,)
    fill(90)
    rect(0, 500, 1080, 720);
    // back of head hair
    fill(140, 27, 10)
    triangle(537, 170, 577, 239, 503, 239)
    // stick
    fill('black')
    triangle(540, 220, 484, 348, 580, 348)
    // person
    fill('black')
    triangle(452, 192, 531, 252, 526, 261)
    triangle(617, 191, 549, 260, 549, 248)
    fill(245, 209, 162)
    ellipse(538, 180, 90, 90)
    ellipse(454, 191, 20, 20)
    ellipse(620, 191, 20, 20)

    // face
    fill('black')
    arc(537, 201, 30, 20, 0, (radians(180)))
    ellipse(520, 176, 10, 10)
    ellipse(552, 176, 10, 10)
    // hair
    fill(140, 27, 10)
    arc(530, 180, 90, 90, 116, (radians(300)))
    // tom drum
    fill(179, 9, 9)
    rect(380, 375, 95, 110);
    fill(247, 228, 181);
    ellipse(427, 380, 100, 50);

    // bass drum and high toms
    fill(247, 228, 181);
    ellipse(630, 250, 100, 50);
    fill(179, 9, 9);
    ellipse(540, 400, 200, 200);
    fill(247, 228, 181);
    ellipse(540, 400, 185, 185);
    fill(250, 235, 200);
    arc(540, 400, 185, 185, 0, PI + QUARTER_PI, CHORD);
    fill(179, 9, 9)
    rect(403, 245, 95, 65);
    fill(247, 228, 181);
    ellipse(450, 250, 100, 50);
    fill(179, 9, 9)
    rect(583, 245, 95, 65);
    fill(247, 228, 181);
    ellipse(630, 250, 100, 50);





  }

  print(mouseIsPressed) ;
  fill(0) ;
  textSize(30) ;
  // THIS HELPS YOU FIND COORDINATES
  text(mouseX + "," + mouseY, 50, 50) ;

}

// function mouseReleased () {
//   console.log(mouseX.toFixed(0) + ", " + mouseY.toFixed(0)) ;
