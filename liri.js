require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");


// how to reference the spotify keys with code line above

var spotifyThis = require("./spotify.js");
var movieThis = require("./movies.js");
var Concert = require("./concert.js");


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
