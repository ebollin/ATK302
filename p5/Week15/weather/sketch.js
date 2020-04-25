var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0 ;
var ws = 0 ;
var temp = 0 ;
var clouds ;
var name = 0
var humidity = 0 ;


function setup() {
  createCanvas(800, 800);

  clouds = loadImage("assets/clouds.png");

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=60515,us&units=imperial&';
  var myIDString = 'appid=9bd2577f2c1ded727056fde6f6ec8124'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed ;
  temp = weather.main.temp ;
  name = weather.name ;
  humidity = weather.main.humidity ;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
    //weather info display is here
      background(131, 220, 242);

      fill('red')
      ellipse(775, 770 ,50 ,50) ;

      // parse the weather object and put some text or images using at least 3 different weather data!
      fill('black');
      textSize(30);
      text(weather.main.temp + "°", width/2, 120);
      text("Humidity is " + weather.main.humidity + "%", 180, 700);

//cloud moving with windspeed is here
      fill('white');
      noStroke();
//cloud one
//       ellipse(x, 250, 100, 100);
//       ellipse(x-20, 200, 100, 100);
//       ellipse(x+50, 200, 100, 100);
//       ellipse(x-50, 250, 100, 100);
// //cloud 2
//       ellipse(x, 450, 100, 100);
//       ellipse(x-20, 400, 100, 100);
//       ellipse(x+50, 400, 100, 100);
//       ellipse(x-50, 450, 100, 100);
      fill('white')
      text("Windspeed", x+200, 350)
      text(weather.wind.speed + " MPH", x+200, 250);

      image(clouds, x, 250, 400, 200);
      image(clouds, 10, 350, 400, 200);
      image(clouds, 400, 450, 400, 200);
      image(clouds, 10, 350, 400, 200);
      x = x + ws/4 ;
      if (x > width) x = 0

//thermometers
      fill('white');
      rect(width-40, 10, 30, 780);
      fill('red') ;

      fill('white');
      rect(20, 10, 30, 780);
      fill('red') ;

      //local variable, tmp = temp inside map parameters
      var tmp = 0 ;
      tmp = map(temp, -10, 100, 2, height-10) ;
      rect(width-40, height-10, 30, -tmp) ;

      fill('blue')
      ellipse(35, 774.5, 50, 50) ;
      var hum = 0
      hum = map(humidity, 0, 100, 2, height-10) ;
      rect(20, height-5, 30, -hum) ;

      fill('black') ;
      textSize(10)
      text("100°", 775, 10)
      text("90°", 775, 79.8)
      text("80°", 775, 151.6)
      text("70°", 775, 223.4)
      text("60°", 775, 295.2)
      text("50°", 775, 367)
      text("40°", 775, 438.8)
      text("30°", 775, 510.6)
      text("20°", 775, 582.4)
      text("10°", 775, 654.2)
      text("0°", 775, 726)
      text("-10°", 775, 790)

      fill ('black');
      textSize (50) ;
      textAlign(CENTER);
      text("Downers Grove, IL", 400, 60);

      fill('white')
      text("Windspeed", x+200, 350)

      break;

  }
}
