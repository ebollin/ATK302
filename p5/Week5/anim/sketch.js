var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(400, 400) ;
}

function draw() {
  // put drawing code here
  background('blue') ;

  // rect(x, 100, 100, 100)
  fill('black') ;
  textSize(40) ;
  text("PARASITE", x, 100) ;

  x = x + 1 ;
  // loop
  if (x > width)
    x = 0 ;
}
