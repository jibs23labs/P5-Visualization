console.log("\nThe Living News Bot Initiated..");
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("\nServer Setup Successful. \nFetching News Cell Image..");


var Twit = require('twit');

var tcounter = 1;

var config = require('./config');

var fs = require('fs');
// console.log(config);

var T = new Twit(config);

setInterval(tweetIt, 1000*60);

setTimeout(function(){
    console.log("\nInitiating tweet.. ");
    tweetIt();
}, 20 * 1000);



function tweetIt(){
  tweetimage();
}

  function tweetimage(){
    console.log("\nPreparing the image file..");

    // post a tweet with media
    var ifilename = './public/newsimages/tln_image.png';
    var params = { encoding: 'base64' };
    var b64 = fs.readFileSync(ifilename, params);

    // first we must post the media to Twitter
    T.post('media/upload', { media_data: b64 }, uploaded);

    // getting id of image
    function uploaded(err, data, response){
      console.log("\nImage Ready. Posting tweet..");
      var id = data.media_id_string;

      var tweet = {
        status: 'News Stream#00'+ tcounter +', #RealTime #news #visualization #bot About: https://goo.gl/b8xr5Z ', media_ids: [id]
      }
      tcounter=tcounter+1;
      T.post('statuses/update',tweet,tweeted);
    }

      function tweeted(err, data, response) {
        if(err){
          console.log("Oops.Something is loose.");
        } else {
          console.log("\nTWEET Successful.");
          deleteimage();
        }
      }
    }

    function deleteimage(){
      fs.unlink("public/newsimages/"+"tln_image.png", (err) => {
        if (err) {
            console.log("Failed to remove image file from source:"+err);
        } else {
            console.log('\nDuplicate Image File removed. ReInitating..');
        }
      });
    }
