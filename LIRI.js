var keys = require("./keys.js");

var fs = require("fs");
var dotenv = require("dotenv").config("./.env");
var request = require("request");
var twitterModule = require("twitter");
// var Spotify = require('node-spotify-api');

// console.log(keys);

// var spotify = new Spotify(keys.spotify);
var client = new twitterModule(keys.twitter);

// console.log(spotify);
console.log(client);

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  console.log(response);
});

// client.get("statuses/lookup", params, function(error, tweets, response) {
//   if (error) {
//     // console.log(error);
//   }

  // The favorites.
  // console.log(tweets);

  // Raw response object.
  // console.log(response);

  // // trying to print response to a file to read.
  // fs.writeFile("tweetsInfo.txt", tweets, function(err) {

  //   // If the code experiences any errors it will log the error to the console.
  //   if (err) {
  //     return console.log(err);
  //   }

  //   // Otherwise, it will print: "movies.txt was updated!"
  //   console.log("tweetsInfo.txt was updated!");

  // });
// });
