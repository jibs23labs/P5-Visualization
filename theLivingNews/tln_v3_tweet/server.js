var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Running the express file");

console.log("The Bot is Starting..");


var Twit = require('twit');


var config = require('./config');

var fs = require('fs');
// console.log(config);

var T = new Twit(config);

// setInterval(tweetIt, 1000*10)

tweetIt();

function tweetIt(){
  console.log("Tin image..");

  tweetimage();
}

  function tweetimage(){
    console.log("Tin2 image..");

    // post a tweet with media
    var ifilename = './public/newsimages/tln_image.png';
    var params = { encoding: 'base64' };
    var b64 = fs.readFileSync(ifilename, params);

    // first we must post the media to Twitter
    T.post('media/upload', { media_data: b64 }, uploaded);

    // getting id of image
    function uploaded(err, data, response){

      var id = data.media_id_string;

      var tweet = {
        status: 'tweeting first bot image', media_ids: [id]
      }

      T.post('statuses/update',tweet,tweeted);
    }

      function tweeted(err, data, response) {
        if(err){
          console.log("Something is loosened.");
        } else {
          console.log("Working");
        }
      }
    }
