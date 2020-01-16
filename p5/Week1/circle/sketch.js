function setup() {
  // put setup code here
  createCanvas(1000, 500);
  background(1,100,120)
}

function draw() {
  // put drawing code here
  fill(mouseY);
  ellipse(mouseX, mouseY, 100, 100) ;
}
