var dogs;
var dog2;
var dog3;

function setup() {
  // put setup code here
  createCanvas(800, 800)

  dogs = loadImage("assets/dogs.jpg");
  dog2 = loadImage("assets/dog2.jpg");
  dog3 = loadImage("assets/dog3.jpg");
}

function draw() {
  // put drawing code here
  image(dogs, 0, 0, 200, 200);
  // variable name, position x an y, size
  image(dog2, 0, 200, 200, 200)
  image(dog3, 0, 400, 200, 200)

}
