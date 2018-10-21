//require(".env").config();
var fs = require("fs");

var request = require("request");
var Spotify = require("node-spotify-api");
var dotenv = require("dotenv").config();
var moment = require("moment");

var keys = require("./keys.js");

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
    spotifyThis();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhat();
    break;
}

function movieThis() {
  var nodeArgs = process.argv;

  // Create an empty variable for holding the movie name
  var movieName = "";

  // Loop through all the words in the node argument
  // And do a little for-loop magic to handle the inclusion of "+"s
  for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    } else {
      movieName += nodeArgs[i];
    }
  }

  console.log(movieName);

  if (!movieName) {
    movieName = "mr nobody";
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";
  console.log(queryUrl);

  request(queryUrl, function(error, response, body) {
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("The movie's title is: " + JSON.parse(body).Title + "\r\n");
      console.log("The movie's came out in: " + JSON.parse(body).Year + "\r\n");
      console.log(
        "The movie's IMDB rating is: " + JSON.parse(body).imdbRating + "\r\n"
      );
      console.log(
        "The movie's Rotton Tomatoes rating is: " +
          JSON.parse(body).Ratings[1] +
          "\r\n"
      );
      console.log(
        "The movie's Country of production is: " +
          JSON.parse(body).Country +
          "\r\n"
      );
      console.log(
        "The movie's language is: " + JSON.parse(body).Language + "\r\n"
      );
      console.log("The movie's plot is: " + JSON.parse(body).Plot + "\r\n");
      console.log(
        "The movie's actors are: " + JSON.parse(body).Actors + "\r\n"
      );
    }
  });
}

function concertThis() {
  var nodeArgsC = process.argv;

  var band = "";

  // Loop through all the words in the node argument
  // And do a little for-loop magic to handle the inclusion of "+"s
  for (var i = 3; i < nodeArgsC.length; i++) {
    if (i > 3 && i < nodeArgsC.length) {
      band = band + "+" + nodeArgsC[i];
    } else {
      band += nodeArgsC[i];
    }
  }

  console.log(band);

  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    band +
    "/events?app_id=codingbootcamp";

  console.log(queryUrl);

  request(queryUrl, function(error, response) {
    if (!error && response.statusCode === 200) {
      console.log(JSON.parse(response.body).length);

      for (i = 0; i < JSON.parse(response.body).length; i++) {
        //console.log('the value of i is ', i);
        console.log(
          band +
            " is playing the  " +
            JSON.parse(response.body)[i].venue.name +
            "\r\n"
        );
        console.log(
          "The venue is in: " + JSON.parse(response.body)[i].venue.city + "\r\n"
        );
        console.log(
          "The date of the event is: " +
            JSON.parse(response.body)[i].datetime +
            "\r\n"
        );
      }
    }
  });
}



function spotifyThis() {
  var nodeArgsS = process.argv;

  // Create an empty variable for holding the movie name
  var spotifyQuery = "";

  // Loop through all the words in the node argument
  // And do a little for-loop magic to handle the inclusion of "+"s
  for (var i = 3; i < nodeArgsS.length; i++) {
    if (i > 3 && i < nodeArgsS.length) {
      spotifyQuery= spotifyQuery + "+" + nodeArgsS[i];
    } else {
      spotifyQuery += nodeArgsS[i];
    }
    console.log(spotifyQuery);

    spotify.search({ type: 'track', spotifyQuery: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
  }
}
