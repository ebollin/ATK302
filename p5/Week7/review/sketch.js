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
    text("Why did the chicken cross the road?", 100, 100) ;
    break ;

    case 1:
    text("to get to the other side hahaha", 100, 100) ;
    break ;

  }
}

function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }

}
