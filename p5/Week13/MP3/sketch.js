// [these things are an empty array]
var cars = [];
var frogPos;
var myState = -1;
var maxCars = 8;
var maxTimer = 12 * 60;
//images
var guitar;
var note;
var splash;
var lose;
var won;
var cloud1;
var gamebackground;

let song1;
let song2;
let song3;
let song4;
let song5;

let x, y;

var timer = maxTimer

function preload() {
  song1 = loadSound('assets/mp3sound.mp3');
  song2 = loadSound('assets/lose.wav');
  song3 = loadSound('assets/win.wav');
  song4 = loadSound('assets/note.wav');
  song5 = loadSound('assets/gamesong.wav');

}


function setup() {
  // put setup code here
  createCanvas(800, 800)


  guitar = loadImage("assets/guitar.png");
  note = loadImage("assets/note.png");
  splash = loadImage("assets/splash.png");
  lose = loadImage("assets/lose.png");
  won = loadImage("assets/won-01.png");
  cloud1 = loadImage("assets/cloud1.png")
  gamebackground = loadImage("assets/game.png");


  //spawn cars
  //number of cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 250);

  textAlign(CENTER);

}

function draw() {
  //state machine in draw loop

  switch (myState) {

    case -1:
      song1.loop();
      myState = 0;
      break;

    case 0: //menu
      background(splash);

      // background('red')
      // fill('white')
      // textSize(24) ;
      // text("Welcome to my game!! Click to play", width/2, height/2) ;
      break;

    case 1: // game State

      game();



      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        song5.stop();
        song2.play();
        myState = 3;
      }

      break;

    case 2: //win State

      background(won)



      // background('yellow') ;
      // text("YAY YOU WON", width/2, height/2) ;
      break;

    case 3: //lose


      background(lose);
      // background('purple') ;
      // text("ha YOU LOST", width/2, height/2) ;

      break;

  }



}

function mouseReleased() {
  switch (myState) {
    case 0:
      song1.pause();
      song5.play();
      // song2.play() ;
      myState = 1;
      break;

    case 2: //won!! respawn cars
      //reset timer
      timer = maxTimer;
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0;
      song1.play();
      break;

    case 3: //boo you lose, respawn cars
      //reset timer
      timer = maxTimer;
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 1
      song5.play();
      break;
  }
}

//this is where the game is
function game() {
  background(gamebackground)



  textAlign(CENTER, CENTER);
  // textSize(100);
  // //this is where the countdown / timer is
  // text(timer, 100, 100);
  // if (frameCount % 60 == 0 && timer > 0) {
  //   timer--;
  // }

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    //distance between car and the frog
    if (cars[i].pos.dist(frogPos) < 50) {
      //splice command
      song4.play();
      cars.splice(i, 1);
      //you can put a score here if you DECLARE IT
    }
  }

  if (cars.length == 0) {
    song5.stop();
    song3.play();
    myState = 2
    // song3.stop();
    // song5.play();
  }

  // guitar
  image(guitar, frogPos.x, frogPos.y, 100, 200)



  //fill('green')
  //  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    image(note, this.pos.x, this.pos.y, 50, 50)

    // fill(this.r, this.g, this.b);
    // rect(this.pos.x, this.pos.y, 30, 30);


  }
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

// function preLoad() {
//   splashSound = loadSound("assets/mp3sound.mp3") ;
//   splashSound.loop() ;
//   splashSound.pause() ;
// }


function touchStarted() {
  getAudioContext().resume();
}


// code phrases from video - downers grove and Mrs. Incredible
// code phrase 3 - photography
// code 4 mac n cheese
