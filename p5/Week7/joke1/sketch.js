var myState = 0 ;

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
    text("What are the 3 unwritten rules of life?", 100, 100) ;
    break ;

    case 1:
    textSize(30)
    text("1.", 100, 100) ;
    text("2.", 100, 200) ;
    text("3.", 100, 300) ;
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
