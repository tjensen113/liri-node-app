require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var keys = require("./keys.js");
var fs = require("fs");

ß
// how to reference the spotify keys with code line above

var spotifyThis = require("./spotify.js");
var myMovies = require("./movies.js");
var Concert = require("./concerts.js");


var userCommand=process.argv[2];
var userInput=process.argv.splice(3,process.argv.length).join(' ');





switch (userCommand){
    case "concert-this":
        Concert(userInput);
        break;
    case "spotify-this":

}
