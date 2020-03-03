var myState = 0;
var timer = 0;
var basketball;
var basketball2;
var basketball3;
var basketball4;
var basketball5;
var smoke;


var mic;
var vol;
var y = 0;
// var x = 0;
// var basketball5 ;

var font;


function setup() {
  // put setup code here
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();

  basketball = loadImage("assets/basketball2.jpg");
  basketball2 = loadImage("assets/basketball3.jpg");
  basketball3 = loadImage("assets/basketball4.jpg");
  basketball4 = loadImage("assets/basketballFinal.jpg");
  basketball5 = loadImage("assets/basketball5.jpg");
  smoke = loadImage("assets/smoke.png");
  font = loadFont('assets/Oaklash.ttf'); // find an otf or ttf
  // basketball5 = loadImage("assets/basketball2.jpg")
}

function draw() {
  // put drawing code here

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this
  if (vol > 1) {
    y++;
    if (y > 200) y = 0 ;
  }

  // // move square to random location:
  // if(xPos != rndX && yPos != rndY){
  //   goTo(rndX, rndY);

  switch (myState) {

    case 0:


      // fill('#ED225D');   // SETS the color
      // textFont(font);  // SETS the font
      // image(basketball, 0, 0, 800, 580) ;
      textSize(36); // SETS the size of the font
      text("Click to help me edit!!", 10, 50)


      timer++;
      if (timer > 200) {
        myState = 1;
        timer = 0
      }
      break;

    case 1:
      image(basketball, 0, 0, 800, 580);

      push();
      translate(y, -200);
      image(smoke, 0, 100, 1000, 1000)
      pop();



      break;

    case 2:
      image(basketball5, 0, 0, 800, 580)
      push();
      translate(y, -200);
      image(smoke, 0, 100, 1000, 1000)
      pop();


      break;

    case 3:
      image(basketball2, 0, 0, 800, 580);
      push();
      translate(y, -200);
      image(smoke, 0, 100, 1000, 1000)
      pop();


      break;

    case 4:
      image(basketball3, 0, 0, 800, 580);
      push();
      translate(y, 0);
      image(smoke, 0, 100, 1000, 1000)
      pop();


      break;

    case 5:
      image(basketball4, 0, 0, 800, 580);
      push();
      translate(y, 0);
      image(smoke, 0, 100, 1000, 1000)
      pop();


      break;



  }
noStroke()
fill ("white")
rect(0, 580, 800, 220)

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 5) {
    myState = 0
  }

}

function touchStarted() {
  getAudioContext().resume();
}
