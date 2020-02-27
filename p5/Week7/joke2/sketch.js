var myState = 0 ;
var timer = 0 ;

// funciton preload(){
//   // preload goes before setup
// }

function setup() {
  // put setup code here
  createCanvas (800, 800)
}

function draw() {
  // put drawing code here
  background('green') ;
  switch(myState){
    // you can write myState = 1 HERE to test it
    case 0:
    textSize(30)
    text("Why shouldn't you trust atoms?", 100, 100) ;
    timer ++ ;
    if (timer > 200) {
      myState = 1 ;
      timer = 0 ;
    }
    break ;

    case 1:
    textSize(40)
    text("They make up everything!", 100, 100) ;

    timer ++ ;
    if (timer > 200) {
      myState = 0 ;
      timer = 0 ;
    }
    break ;

    // case 2:
    // text("2.", 100, 100) ;
    // break ;
    //
    // case 3:
    // text("3.", 100, 100) ;
    // break ;



  }
}

function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }

}
