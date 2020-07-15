console.log("The Sketch is Starting..");
  // The Living News
  // Concept and Developed By Jibin Varghese
  // March17 2017

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
  var sortBy= '&sortBy=';
  var sortingValue = 'top';
  var api_key_a = '&apiKey=27459d702a57430caf222701f9db74c8';

  // Defining Variable for Canvas Text
  var name="Real-time new visualization and analysis of news feeds through machine learning based on related to sentiment, subjectivity and content identification.\n\nCOLOUR | Sentiment, Positive, Neutral or Negative news.\nSHAPE | Subjectivity of information, Objective or Subjective.\nLABEL | Category of news based on content analysis.";
  var n_title="";
  var n_url="";
  var n_author="";

  // Defining Variable for Custom Fonts
  var fontLight, fontLItalic,fontRegular,fontBold,fontEBold;

  // Defining Variable for Drawing Generative Art
  var t;
  var count=0;
  var s_color = "neutral";
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
// Preload Function: Loading Custom Fonts
function preload(){
    fontLight = loadFont("./assets/OpenSans-Light.ttf");
    fontLItalic =loadFont("./assets/OpenSans-LightItalic.ttf");
    fontRegular =loadFont("./assets/OpenSans-Regular.ttf");
    fontBold =loadFont("./assets/OpenSans-Bold.ttf");
    fontEBold =loadFont("./assets/OpenSans-ExtraBold.ttf");
    // fetchdata();
    // setInterval(fetchdata(),10);
}


// Setup Function: Setting up
  function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255);
    fetchdata();
    colr.r = random(255);
    colr.g = random(255);
    colr.b = random(255);
    t = 0;
    // reset();
    imga = loadImage("./icons/imga1.png");
    imgb = loadImage("./icons/imga2.png");
    fill(250);
    noStroke();
    rect(0,0,windowWidth/1.8,windowHeight);
  }

  // Draw Function: For drawing the canvas
  // function intro(){
  //   name="Generative Data Visualization of news feeds through machine learning based on data related to sentiment, subjectivity and content identification.\n\nCOLOUR | Sentiment, Positive, Neutral or Negative news.\nSHAPE | Subjectivity of information, Objective or Subjective.\nLABEL: Category of news based on content analysis.";
  //   n_title="The Living News";
  //   n_url="News Link";
  //   n_author="\nSource:newsapi, datumbox\n\nConcept and Developed by: Jibin Varghese, Information and Experience Designer";
  //
  // }

  function draw() {

    // Draw: Header
    fill(255);
    stroke(255);
    stroke(0);
    rect(windowWidth/1.29,windowHeight/16,windowWidth/6.5,windowHeight/4);
    // Draw: Header Title
    fill(100,100,100);
    noStroke();
    textFont(fontEBold);
    textAlign(RIGHT);
    textSize(40);
    text("THE\nLIVING\nNEWS",windowWidth/1.3,windowHeight/13,windowWidth/6.4,windowHeight/4);
    textFont(fontLight);
    textAlign(RIGHT);
    textSize(10);
    text("BY JIBIN VARGHESE",windowWidth/1.32,windowHeight/3.5,windowWidth/6.4,windowHeight/4);

    // Draw: News Header
    fill(255);
    stroke(255);
    rect(windowWidth/1.8,windowHeight/2.3,windowWidth/2.3,windowHeight/1.9);
    // Draw: News Title
    textFont(fontBold);
    textStyle(NORMAL);
    fill(90,90,90);
    noStroke();
    textAlign(LEFT);
    textSize(24);
    text(n_title+'\n',windowWidth/1.75,windowHeight/2.1,windowWidth/2.8,windowHeight/3);
    // Draw: News Description
    textFont(fontLight);
    fill(80,80,80);
    // textLeading(20);
    textSize(14);
    text(name,windowWidth/1.75,windowHeight/1.8,windowWidth/2.9,windowHeight/3);
    // Draw: News Source
    textFont(fontLItalic);
    textSize(12);
    // textLeading(20);
    text(""+n_author,windowWidth/1.75,windowHeight/1.6,windowWidth/2.7,windowHeight/3);
    textFont(fontLight);
    textSize(8);
    // textLeading(20);

    image(imga, windowWidth/1.75,windowHeight/1.15, imga.width/12, imga.height/12);
    text("Subjective",windowWidth/1.73,windowHeight/1.08,windowWidth/2.7,windowHeight/1.1);

    image(imgb, windowWidth/1.60,windowHeight/1.15, imgb.width/12, imgb.height/12);
    text("Objective",windowWidth/1.58,windowHeight/1.08,windowWidth/2.7,windowHeight/1.1);


    fill(0,164,149);
    ellipse(windowWidth/1.42,windowHeight/1.115, 25, 25);
    fill(80,80,80);
    text("Positive",windowWidth/1.44,windowHeight/1.08,windowWidth/2.7,windowHeight/1.1);

    fill(176,30,64);
    ellipse(windowWidth/1.35,windowHeight/1.115, 25, 25);
    fill(80,80,80);
    text("Negative",windowWidth/1.37,windowHeight/1.08,windowWidth/2.7,windowHeight/1.1);

    fill(252,186,78);
    ellipse(windowWidth/1.28,windowHeight/1.115, 25, 25);
    fill(80,80,80);
    text("Neutral",windowWidth/1.30,windowHeight/1.08,windowWidth/2.7,windowHeight/1.1);

    fill(80,80,80);
    textFont(fontLight);
    textAlign(RIGHT);
    textSize(8);
    // textLeading(20);
    text("\n@ithelivingnews \n\n*Beta Version1.0 \nML Anlaysis ~75-85% accuracy.\nExperimental Framework and Bot.",windowWidth/1.85,windowHeight/1.15,windowWidth/2.7,windowHeight/1.1);
    // Draw: Label Text
    stroke(188,188,188);
    fill(188,188,188);
    rect(windowWidth/3.7-1,windowHeight/2.2-1,windowWidth/4+1,windowHeight/17+1);
    fill(250);
    noStroke();
    rect(windowWidth/3.7,windowHeight/2.2,windowWidth/4,windowHeight/17);
    // Draw: Label
    fill(80,80,80);
    noStroke();
    textAlign(CENTER);
    textFont(fontLight);
    textSize(20);
    text(topic.toUpperCase(),windowWidth/3.6,windowHeight/2.12,windowWidth/4,windowHeight/17);

    // Draw: News Visual
    // rotate(PI);
    drawnews();

  }

  function drawnews(){

        noFill();
        stroke(0, 10);
        translate(width/3.65, height/2);

        // Drawing Shape

        beginShape();
        for (var i = 0; i < 360; i++) {
          var mag = 425;
          var ang = map(i, 0, 360, 0, TWO_PI);
          var rad =  mag * noise(i * sub_shape, t * 0.005);
          var x = rad * cos(ang);
          var y = rad * sin(ang);
          rotate(PI/4);
          vertex(x, y);
          if(count > 330){
            if(s_color=="positive"){
              colr.r = random(0);
              colr.g = random(158,163);
              colr.b = random(145,150);
            } else if(s_color=="neutral"){
              colr.r = random(251,255);
              colr.g = random(152,157);
              colr.b = random(0);
            } else if(s_color=="negative"){
              colr.r = random(171,176);
              colr.g = random(21,26);
              colr.b = random(58,63);
            } else if(s_color=="default"){
              colr.r = 180;
              colr.g = 180;
              colr.b = 180;
            }
            stroke(colr.r,colr.g,colr.b);
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
         saveCanvas('tln_image', 'png');
        //  console.log("The Image save is Starting..");
         noLoop();
      }

  }

  // Fetching the News data from API
  function fetchdata(){
    var n_src = new Array("associated-press","bbc-news","the-times-of-india","bloomberg","cnbc","cnn","the-next-web","bbc-sport","national-geographic","reuters","daily-mail","the-hindu","espn-cric-info","");
    var picker = 0;
    picker=random(12);
    var n = ceil(picker);
    source = n_src[n];

    urla = api_a+source+sortBy+sortingValue+api_key_a;
    loadJSON(urla,gotData);

  }

  function gotData(data){
      var tfeed = data.articles;

        var i=0;
        name = tfeed[i].description;
        n_title = tfeed[i].title;
        n_author = data.source;
        n_url = tfeed[i].url;
        // createElement('h1',tfeed[i].title);
        // createElement('h5',tfeed[i].author);
        // createElement('p',tfeed[i].description);
        // createElement('p',tfeed[i].url);
        // createElement('p',"URL "+ tfeed[i].urlToImage);
        // createElement('p',"Published On "+ tfeed[i].publishedAt);
        subAnalysis();
        topAnalysis();
        sentiAnalysis();

  }

  // Fetching the Sentiment
  function sentiAnalysis(){
    // var urls = api_s+api_key_s+name;
    // loadJSON(urls,gotDataS);
  }

  function gotDataS(data){
    var sfeed = data.output;
    s_color = sfeed.result;
    // createElement('p',"Sentiment :"+ sfeed.result);

  }

  // Fetching the Subjectivity
  function subAnalysis(){
    // var urlsu = api_su+api_key_s+name;
    // loadJSON(urlsu,gotDataSu);
  }

  function gotDataSu(data){
    var sufeed = data.output;
    sub_shape=sufeed.result;
    // createElement('p',"Subjectivity :"+ sufeed.result);
    if(sub_shape=="subjective"){
      sub_shape=0.02;
    } else if(sub_shape=="objective"){
      sub_shape=0.005;
    }
  }

  // Fetching the Category
  function topAnalysis(){
    // var urltop = api_top+api_key_s+name;
    // loadJSON(urltop,gotDataTop);
  }

  function gotDataTop(data){
    var topfeed = data.output;
    topic=topfeed.result;
    // createElement('p',"Topic :"+ topfeed.result);
  }


  // Cheers.J23
  // END
