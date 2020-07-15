console.log("The Sketch is Starting..");
// The Living News
// Concept and Developed By Jibin Varghese


// START

// APIs
// api_key Machine Learning = '378e4a004099b62a74ce6b92fa8740b3&text=';
// api_key Machine Learning = '50eb2c41bbdd6f74b0fdb7a32f4bc1e6&text=';
// api_key NewOrg= '27459d702a57430caf222701f9db74c8';

// Defining API Calls for Machine Learning APIs
var api_s = ' http://api.datumbox.com/1.0/SentimentAnalysis.json?api_key=';
var api_key_s = '50eb2c41bbdd6f74b0fdb7a32f4bc1e6&text=';

var api_su = ' http://api.datumbox.com/1.0/SubjectivityAnalysis.json?api_key=';

var api_top = 'http://api.datumbox.com/1.0/TopicClassification.json?api_key=';

// Defining API Call for News Feeds
var api_a = 'https://newsapi.org/v1/articles?source=';
var source = 'the-hindu';
var sortBy = '&sortBy=';
var sortingValue = 'top';
var api_key_a = '&apiKey=27459d702a57430caf222701f9db74c8';

// Defining Variable for Canvas Text
var name = "Real-time news visualization and analysis of news feeds through machine learning based on related to sentiment, subjectivity and content identification.\n\nCOLOUR | Sentiment, Positive, Neutral or Negative news.\nSHAPE | Subjectivity of information, Objective or Subjective.\nLABEL | Category of news based on content analysis.";
var n_title = "NLP Based Real Time News Visualization";
var n_url = "";
var n_author = "";

// Defining the content for Izna
var iznavar = "";
var iznawelcome = "Welcome to the Living News";
var iznaAnalysis = "";
var iznaShare = "";
var tag = "";

// Defining Variable for Custom Fonts
var fontLight, fontLItalic, fontRegular, fontBold, fontEBold;

// Defining Variable for Drawing Generative Art
var t;
var count = 0;
var s_color = "neutral";
var izna_sub = "objective"
var sub_shape = 0.005;
// var sub_shape = "subjective";
var topic = "News";
var colr = {
  r: 0,
  g: 0,
  b: 0
};

var imga;
var imgb;
var imgn;

// Preload Function: Loading Custom Fonts
function preload() {
  fontLight = loadFont("./assets/OpenSans-Light.ttf");
  fontLItalic = loadFont("./assets/OpenSans-LightItalic.ttf");
  fontRegular = loadFont("./assets/OpenSans-Regular.ttf");
  fontBold = loadFont("./assets/OpenSans-Bold.ttf");
  fontEBold = loadFont("./assets/OpenSans-ExtraBold.ttf");
  // fetchdata();
  // setInterval(fetchdata(),10);
}


// Setup Function: Setting up
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Change color 255->0;
  background(255);
  fetchdata();
  colr.r = random(255);
  colr.g = random(255);
  colr.b = random(255);
  t = 0;
  // reset();
  imga = loadImage("./icons/imga1.png");
  imgb = loadImage("./icons/imga2.png");
}


function draw() {

  // Draw: Header
  // Change color 255->0
  fill(255);
  noStroke();
  // stroke(0);
  rect(windowWidth / 1.29, windowHeight / 16, windowWidth / 6.5, windowHeight / 4);
  // Draw: Header Title
  // Change color 150->250
  fill(150);
  noStroke();
  textFont(fontEBold);
  textAlign(RIGHT);
  // textLeading(20);
  textSize(35);
  text("THE\nLIVING\nNEWS", windowWidth / 1.3, windowHeight / 13, windowWidth / 6, windowHeight / 4);
  textFont(fontLight);
  textAlign(RIGHT);
  textSize(10);
  text("BY JIBIN VARGHESE", windowWidth / 1.31, windowHeight / 4.3, windowWidth / 6, windowHeight / 4);

  // Draw: News Header
  // Change color 255->0
  fill(255);
  // stroke(0);
  rect(windowWidth / 1.8, windowHeight / 2.3, windowWidth / 2.3, windowHeight / 1.9);
  // Draw: News Title
  textFont(fontBold);
  textStyle(NORMAL);
  // Change color ->250
  fill(90, 90, 90);
  // fill(200);

  noStroke();
  textAlign(LEFT);
  textSize(26);
  // rect(windowWidth/1.75,windowHeight/2.2,windowWidth/2.8,windowHeight/3);
  text(n_title + '\n', windowWidth / 1.72, windowHeight / 2.2, windowWidth / 2.8, windowHeight / 3);
  // Draw: News Description
  // stroke(0);
  // fill(255);
  // rect(windowWidth/1.45,windowHeight/1.7,windowWidth/4.5,windowHeight/3.5);
  textFont(fontLight);
  // Change color ->250
  fill(60);
  // fill(200);
  // textLeading(20);
  textSize(14);
  noStroke();
  text(name, windowWidth / 1.43, windowHeight / 1.7, windowWidth / 4.5, windowHeight / 3.5);
  // Draw: News Source
  textFont(fontLItalic);
  textSize(12);
  // textLeading(20);
  text("" + n_author, windowWidth / 1.43, windowHeight / 1.29, windowWidth / 4.5, windowHeight / 3.5);
  // Color change ->250
  stroke(200);
  strokeWeight(1);
  // Vertical Line
  line(windowWidth / 1.46, windowHeight / 1.75, windowWidth / 1.46, windowHeight / 1.25);
  // Horizontal Line
  // line(windowWidth/1.51,windowHeight/1.75,windowWidth/1.39,windowHeight/1.75);

  textFont(fontLight);
  textSize(10);
  // textLeading(20);

  // stroke(0);
  // fill(255);
  // rect(windowWidth/1.68,windowHeight/1.7,windowWidth/13,windowHeight/3.5);
  noStroke();

  fill(0, 164, 149);
  ellipse(windowWidth / 1.65, windowHeight / 1.66, 13, 13);
  fill(100);
  // fill(200);
  text("Positive", windowWidth / 1.69, windowHeight / 1.61, windowWidth / 2.7, windowHeight / 1.1);

  fill(176, 30, 64);
  ellipse(windowWidth / 1.58, windowHeight / 1.66, 13, 13);
  fill(100);
  // fill(200);
  text("Negative", windowWidth / 1.61, windowHeight / 1.61, windowWidth / 2.7, windowHeight / 1.1);

  fill(252, 186, 78);
  ellipse(windowWidth / 1.51, windowHeight / 1.66, 13, 13);
  fill(100);
  // fill(200);
  text("Neutral", windowWidth / 1.53, windowHeight / 1.61, windowWidth / 2.7, windowHeight / 1.1);


  image(imga, windowWidth / 1.63, windowHeight / 1.53, imga.width / 20, imga.height / 20);
  fill(100);
  // fill(200);
  text("Objective", windowWidth / 1.65, windowHeight / 1.45, windowWidth / 2.7, windowHeight / 1.1);

  image(imgb, windowWidth / 1.54, windowHeight / 1.53, imgb.width / 20, imgb.height / 20);
  fill(100);
  // fill(200);
  text("Subjective", windowWidth / 1.55, windowHeight / 1.45, windowWidth / 2.7, windowHeight / 1.1);



  // color change
  fill(80, 80, 80);
  // fill(200);
  textFont(fontLight);
  textAlign(RIGHT);
  textSize(10);
  // textLeading(20);
  // text("\n@ithelivingnews \n\n*Beta Version1.0 \nML Anlaysis ~75-85% accuracy.\nExperimental Framework and Bot.",windowWidth/1.85,windowHeight/1.15,windowWidth/2.7,windowHeight/1.1);
  // stroke(0);
  // fill(255);
  // rect(windowWidth/1.8,windowHeight/1.35,windowWidth/8,windowHeight/5);
  text("\n@ithelivingnews \n\n*Experimental Framework \nML Anlaysis accuracy ~75-85%", windowWidth / 1.8, windowHeight / 1.38, windowWidth / 8, windowHeight / 5);
  // Draw: Label Text
  stroke(150);
  fill(150);
  rect(windowWidth / 3.7 - 1, windowHeight / 2.2 - 1, windowWidth / 4 + 1, windowHeight / 17 + 1);
  // Change color 255->0
  fill(255);
  noStroke();
  rect(windowWidth / 3.7, windowHeight / 2.2, windowWidth / 4, windowHeight / 17);
  // Draw: Label
  fill(80, 80, 80);
  // color change 250
  // fill(200);
  noStroke();
  textAlign(CENTER);
  textFont(fontLight);
  textSize(20);
  text(topic.toUpperCase(), windowWidth / 3.6, windowHeight / 2.12, windowWidth / 4, windowHeight / 17);

  // image(image_n, 0,0, img.width/4, img.height/4);

  // Draw: News Visual
  // rotate(PI);
  drawnews();

}

function drawnews() {

  noFill();
  // Change color 0->255
  // stroke(255, 10);
  stroke(0, 10);
  translate(width / 3.65, height / 2);

  // Drawing Shape

  beginShape();
  for (var i = 0; i < 360; i++) {
    var mag = 425;
    var ang = map(i, 0, 360, 0, TWO_PI);
    var rad = mag * noise(i * sub_shape, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    rotate(PI / 4);
    vertex(x, y);
    if (count > 330) {
      if (s_color == "positive") {
        colr.r = random(0);
        colr.g = random(158, 163);
        colr.b = random(145, 150);
      } else if (s_color == "neutral") {
        colr.r = random(251, 255);
        colr.g = random(152, 157);
        colr.b = random(0);
      } else if (s_color == "negative") {
        colr.r = random(171, 176);
        colr.g = random(21, 26);
        colr.b = random(58, 63);
      } else if (s_color == "default") {
        colr.r = 180;
        colr.g = 180;
        colr.b = 180;
      }
      stroke(colr.r, colr.g, colr.b);
      strokeWeight(0.1);
      mag += 250;
    }
  }
  endShape(CLOSE);

  t += 1;
  count++;

  //clear the background every 600 frames using mod (%) operator
  if (frameCount % 500 == 0) {
    // Saving the Canvas
    //  saveCanvas('tln_image', 'png');
    //  console.log("The Image save is Starting..");
    noLoop();
  }

}

// Fetching the News data from API
function fetchdata() {
  var n_src = new Array("associated-press", "bbc-news", "the-times-of-india", "bloomberg", "cnbc", "cnn", "the-next-web", "bbc-sport", "national-geographic", "reuters", "daily-mail", "the-hindu", "espn-cric-info", "");
  var picker = 0;
  picker = random(12);
  var n = ceil(picker);
  source = n_src[n];

  urla = api_a + source + sortBy + sortingValue + api_key_a;
  loadJSON(urla, gotData);

}

function gotData(data) {
  var tfeed = data.articles;

  var i = 0;
  name = tfeed[i].description;
  n_title = tfeed[i].title;
  n_author = data.source;
  n_url = tfeed[i].url;
  n_image = tfeed[i].urlToImage;
  // createElement('h1',tfeed[i].title);
  // createElement('h5',tfeed[i].author);
  // createElement('p',tfeed[i].description);
  // createElement('p',tfeed[i].url);
  // createElement('p',"URL "+ tfeed[i].urlToImage);
  // createElement('p',"Published On "+ tfeed[i].publishedAt);
  // speak();
  subAnalysis();
  topAnalysis();
  sentiAnalysis();

}

// Fetching the Sentiment
function sentiAnalysis() {
  var urls = api_s + api_key_s + name;
  loadJSON(urls, gotDataS);
}

function gotDataS(data) {
  var sfeed = data.output;
  s_color = sfeed.result;
  // createElement('p',"Sentiment :"+ sfeed.result);

}

// Fetching the Subjectivity
function subAnalysis() {
  var urlsu = api_su + api_key_s + name;
  loadJSON(urlsu, gotDataSu);
}

function gotDataSu(data) {
  var sufeed = data.output;
  sub_shape = sufeed.result;
  izna_sub = sub_shape;
  // createElement('p',"Subjectivity :"+ sufeed.result);
  if (sub_shape == "subjective") {
    sub_shape = 0.02;
  } else if (sub_shape == "objective") {
    sub_shape = 0.005;
  }
}

// Fetching the Category
function topAnalysis() {
  var urltop = api_top + api_key_s + name;
  loadJSON(urltop, gotDataTop);
}

function gotDataTop(data) {
  var topfeed = data.output;
  topic = topfeed.result;
  // createElement('p',"Topic :"+ topfeed.result);
}

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello (izna) I am *tag': function(tag) {
      alert('hello Izna');
      event.preventDefault();
      var iznaWelcome = "Hello," + tag + ". I am Izna, I am glad to be your, personal information assistant";
      speak(iznaWelcome);
      annyang.start();
    },

    '(izna) what *tag': function() {
      // alert('Story analysis!');
      event.preventDefault();
      speak(n_title);
      iznaAnalysis = "My analysis says, this news story seems to be, " + s_color + ", in sentiments, " + izna_sub + ", in thoughts. And related to," + topic + ".";
      speak(iznaAnalysis);
      iznaShare = "Sharing these news cell to the world.";
      speak(inzaShare);
      annyang.start();
    },

    '(izna please) read *tag': function() {
      // alert('Reading the news');
      event.preventDefault();
      // iznavar = "Jebin, my analysis says this news story seems to be, " + s_color + ", in sentiments, " + izna_sub + ", in thoughts. And related to," +topic;
      speak(name);
      annyang.start();
    }
  };


  // Add our commands to annyang
  annyang.addCommands(commands);
  // Start listening.
  annyang.start();


}



var synth = window.speechSynthesis;
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
}

populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(iznavar) {
  // var utterThis = new SpeechSynthesisUtterance('Hi Jebin, Am Izna, your information assistant.');
  var utterThis = new SpeechSynthesisUtterance(iznavar);
  utterThis.voice = voices[55];
  utterThis.pitch = 1;
  utterThis.rate = 0.8;
  synth.speak(utterThis);
}
// Cheers.J23
// END
//Edit17Oct