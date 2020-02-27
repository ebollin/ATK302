var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800)
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  // put drawing code here


  //yellow rectangle
  fill("yellow")
  rect(width/2, height/2, 150, 400)



switch(myState){

  case 0:
  // red light
  fill ("red")
  ellipse(400, 270, 100, 100)


  fill ("black")
  ellipse(400, 400, 100, 100)

  fill ("black")
  ellipse(400, 530, 100, 100)


  timer++ ;
  if (timer > 100) {
    myState = 1 ;
    timer = 0 ;
  }
break ;


  case 1:
  // green light
  fill ("black")
  ellipse(400, 270, 100, 100)


  fill ("black")
  ellipse(400, 400, 100, 100)

  fill ("green")
  ellipse(400, 530, 100, 100)

  timer++ ;
  if (timer > 100) {
    myState = 2 ;
    timer = 0 ;
  }
  break ;


  case 2:
  // yellow light
  fill ("black")
  ellipse(400, 270, 100, 100)


  fill ("yellow")
  ellipse(400, 400, 100, 100)

  fill ("black")
  ellipse(400, 530, 100, 100)

  timer++ ;
  if (timer > 100) {
    myState = 0 ;
    timer = 0 ;
  }
  break ;





}
}
