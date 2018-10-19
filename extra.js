
function concertThis()

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

if (!band) {
  band = "Journey";
}
var queryUrl = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp"
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {

        console.log(band + " are playing the  " + JSON.parse(body).venue.name + "\r\n");
        console.log("The venue is in: " + JSON.parse(body).venue.city+ "\r\n");
        console.log(
          "The date of the event is: " + JSON.parse(body).imdbRating + "\r\n"
        );

        
      }
    });





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
  


