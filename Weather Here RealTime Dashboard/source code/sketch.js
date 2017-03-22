  // Weather Here
  // Concept and Developed By Jibin Varghese
  // March22 2017

  // START

  // APIs

  // Defining API Calls for Machine Learning APIs
  var api_s = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var api_str= 'Bangalore'
  var api_key_s = '&appid=2f8c2e3899d9172f070b310531150d67&units=metric';

  // Defining Variable for Canvas Text
  var n_desc_short = "Weather";
  var n_description = "City weather";
  var n_temp = "23";
  var n_humidity = "89";
  var n_speed = "7";
  var n_city = "City"

  // Defining Variable for Custom Fonts
  var fontLight, fontLItalic,fontRegular,fontBold,fontEBold;

  // Constants
  var Y_AXIS = 1;
  var X_AXIS = 2;
  var b1, b2, c1, c2;
  var x = 0;
  var y = 0;
  var w = 0;
  var h = 0;
  var img = [];
  var ilink;

// Preload Function: Loading Custom Fonts
function preload(){
    fontLight = loadFont("./assets/OpenSans-Light.ttf");
    fontLItalic =loadFont("./assets/OpenSans-LightItalic.ttf");
    fontRegular =loadFont("./assets/OpenSans-Regular.ttf");
    fontBold =loadFont("./assets/OpenSans-Bold.ttf");
    fontEBold =loadFont("./assets/OpenSans-ExtraBold.ttf");
    // Preloading Data
    fetchdata();

}

// Setup Function: Setting up
  function setup(){
    createCanvas(windowWidth,windowHeight);

    // background(255);
    // Setting the refresh interval
    setInterval(fetchdata,4000);

    w = windowWidth;
    h = windowHeight;
    b1 = color(255);
    b2 = color(0);
    c1 = color(50,50,50);
    c2 = color(130,130,130);
  }

  function loadimagesicon(){
    img[0] = loadImage("icons/icon1.svg");
    img[1] = loadImage("icons/icon2.svg");
    img[2] = loadImage("icons/icon3.svg");
    img[3] = loadImage("icons/icon4.svg");
    img[4] = loadImage("icons/icon5.svg");
    img[5] = loadImage("icons/icon6.svg");

    if(n_desc_short=="Clouds"){
      ilink = img[0];
    }
    if(n_desc_short=="Rain"){
      ilink = img[1];
    }
    if(n_desc_short=="Thunderstorm"){
      ilink = img[4];
    }
    if(n_desc_short=="Drizzle"){
      ilink = img[1];
    }
    if(n_desc_short=="Snow"){
      ilink = img[2];
    }
    if(n_desc_short=="Atmosphere"){
      ilink = img[5];
    }
    if(n_desc_short=="Clear"){
      ilink = img[3];
    }
    if(n_desc_short=="Extreme"){
      ilink = img[5];
    }
    if(n_desc_short=="Additional"){
      ilink = img[5];
    }
    if(n_desc_short=="Haze"){
      ilink = img[5];
    }
  }


  function fetchdata(){

    var n_src = new Array("Bangalore","Tokyo","Delhi","Mumbai","New York","Beijing","Sydney","London","Bangkok","Berlin","Kabul","Madrid","Singapore","Baghdad","Moscow","Washington","Paris","Toronto","Chicago","Miami");
    var picker = 0;
    picker=random(19);
    var n = ceil(picker);
    api_str = n_src[n];

    var urls = api_s+api_str+api_key_s;
    loadJSON(urls,gotData);

  }


  // Parsing the JSON file from API
  function gotData(data){
      var tfeed = data;
        var i=0;
        n_desc_short = data.weather[0].main;
        n_description = data.weather[0].description;
        n_temp = data.main.temp;
        n_humidity = data.main.humidity;
        n_speed = data.wind.speed;
        n_city = data.name;
        loadimagesicon();
    // Debbuging API
        // createElement('p',"Main: "+data.weather[0].main);
        // createElement('p',"Desc: "+data.weather[0].description);
        // createElement('p',"Temp: "+data.main.temp+"C");
        // createElement('p',"humidity: "+ data.main.humidity);
        // createElement('p',"Wind Speed: "+ data.wind.speed+"mps");
        // createElement('p',"City: "+ data.name);
        // createElement('p',"City: "+ n_city);

  }

    // Drawing on Canvas
  function draw() {
    // loadimages();


    backgroundclr();
    // loadimages();
    gradient(0,0,windowWidth,windowHeight,c1,c2);


    // Draw: Text Project Name
    fill(255);
    noStroke();
    textFont(fontEBold);
    textAlign(RIGHT);
    textSize(30);
    text("WEATHER\nHERE",windowWidth/1.3,windowHeight/13,windowWidth/6.5,windowHeight/4);
    textFont(fontLight);
    textAlign(RIGHT);
    textSize(8);
    text("BY JIBIN VARGHESE",windowWidth/1.31,windowHeight/5.5,windowWidth/6.5,windowHeight/4);


    // Draw: Name of City
    textFont(fontLight);
    // textFont(fontBold);
    fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(130);
    text(n_city+'\n',windowWidth/10,windowHeight/5,windowWidth/1.5,windowHeight/3);

    // Draw: Weather Description
    textFont(fontLight);
    textSize(50);
    text(n_description.charAt(0).toUpperCase() + n_description.slice(1),windowWidth/6,windowHeight/1.8,windowWidth/2.3,windowHeight/3);
    image(ilink,windowWidth/9,windowHeight/2.2);

    // Draw: Weather Temperature
    textAlign(RIGHT);
    textFont(fontLight);
    textSize(250);
    text(parseInt(n_temp)+"°c"+'\n',windowWidth/1.7,windowHeight/2.1,windowWidth/2.7,windowHeight/3);

    // Draw: Humidity and Wind Speed
    textAlign(LEFT);
    textFont(fontLight);
    textSize(20);
    text("HUMIDITY",windowWidth/8,windowHeight/1.29,windowWidth/6.5,windowHeight/4);
    textSize(60);
    text(n_humidity+'\n',windowWidth/4.9,windowHeight/1.38,windowWidth/2.7,windowHeight/3);
    textSize(20);
    text("WIND SPEED ",windowWidth/3.2,windowHeight/1.29,windowWidth/6.5,windowHeight/4);
    textSize(60);
    text(n_speed+'\n',windowWidth/2.45,windowHeight/1.38,windowWidth/2.7,windowHeight/3);

  }

  // Draw: Weather Background Colour
  function backgroundclr(){
    if(n_desc_short=="Clouds"){
      c1 = color(127,191,255);
      c2 = color(140,146,172);
      ilink = img[0];
    }
    if(n_desc_short=="Thunderstorm"){
      c1 = color(87,77,94);
      c2 = color(28,13,38);
      ilink = img[1];
    }
    if(n_desc_short=="Drizzle"){
      c1 = color(151,189,188);
      c2 = color(95,153,186);
    }
    if(n_desc_short=="Rain"){
      c1 = color(154,165,211);
      c2 = color(96,114,162);
    }
    if(n_desc_short=="Snow"){
      c1 = color(230,210,222);
      c2 = color(155,158,235);
    }
    if(n_desc_short=="Atmosphere"){
      c1 = color(169,90,82);
      c2 = color(111,88,70);
    }
    if(n_desc_short=="Clear"){
      c1 = color(255,190,146);
      c2 = color(255,140,136);
    }
    if(n_desc_short=="Extreme"){
      c1 = color(0);
      c2 = color(200,200,200);
    }
    if(n_desc_short=="Additional"){
      c1 = color(0);
      c2 = color(80,80,80);
    }
  }

// Gradient Colour
 function gradient(x,y,w,h,c1,c2){
   noFill();
   for (var i = x; i <= x+w; i++) {
     var inter = map(i, x, x+w, 0, 1);
     var c = lerpColor(c1, c2, inter);
     stroke(c);
     line(i, y, i, y+h);
   }
 }

  // Cheers.J23
  // END
