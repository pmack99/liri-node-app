//require(".env").config();
var fs = require("fs");

var request = require("request");
//var Spotify = require("node-spotify-api");
//var moment = require("moment");
//const db = require("db");
//var keys = require("./keys.js");

// Load exports from keys.js file which has Spotify auth keys
//var spotify = new Spotify(keys.spotify);

// Take argument
// The first will be the command (   * `concert-this`* `spotify-this-song`* `movie-this`* `do-what-it-says`)
// The second will be the query - we are doing this inside the function for each action below 
// node liri.js [ command ] [ query - optional ]
var action = process.argv[2];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
  case "concert-this":
    concertThis();
    break;

  case "spotify-this-song":
    spotify();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhat();
    break;
}

function movieThis() {
  var query = process.argv[3];
  console.log(query);

  if (!query) {
    query = "mr nobody";
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + query + "apikey=trilogy";

  request(queryUrl, function(error, response, body) {
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("The movie's title is: " + JSON.parse(body).Title);
      console.log("The movie's came out in: " + JSON.parse(body).Year + "\r\n");
      console.log(
        "The movie's rating is: " + JSON.parse(body).imdbRating + "\r\n"
      );
      console.log(
        "The movie's Rotton Tomatoes rating is: " +
          JSON.parse(body).tomatoRating +
          "\r\n"
      );
      console.log(
        "The movie's Country of production is: " +
          JSON.parse(body).Country +
          "\r\n"
      );
      console.log(
        "The movie's language is: " + JSON.parse(body).language + "\r\n"
      );
      console.log("The movie's plot is: " + JSON.parse(body).plot + "\r\n");
      console.log(
        "The movie's actors are: " + JSON.parse(body).actors + "\r\n"
      );
    }
  });
}
