var Spotify = require('node-spotify-api');
var fs = require("fs");
var keys = require("./keys");
var axios = require('axios');
var moment = require('moment');
var spotify = new Spotify(keys.spotify);



function spotifyThis(userInput){
    // console.log("Test here")
    var song = userInput;
    if(!song){
        song = "the sign Ace of Base"
    }
    console.log(song + " here is the song")
    spotify.search({
        type: "track",
        query: "song"
    },function(err, data){
        if (err) {
            return console.log("error:" + err);
        
        }
    }
        );
};






module.exports = spotifyThis;