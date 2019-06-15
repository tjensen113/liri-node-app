require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var keys = require("./keys.js");
var fs = require("fs");

ß
// how to reference the spotify keys with code line above

var spotifyThis = require("./spotify.js");
var movieThis = require("./movies.js");
var Concert = require("./concerts.js");


var userCommand=process.argv[2];
var userInput=process.argv.splice(3,process.argv.length).join(' ');





switch (userCommand){
    case "concert-this":
        Concert(userInput);
        break;
    case "spotify-this":
        spotifyThis(userInput);
        break;
    case "movie-this":
        movieThis(userInput);
        break;
        
    default:
        console.log("try concert-this, spotify-this, or movie-this!!!");    

};
