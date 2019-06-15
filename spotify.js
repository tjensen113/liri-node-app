var fs = require("fs");
var keys = require("./keys");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);



function spotifyThis(userInput){
    var song = userInput;
    if(!song){
        song = "the sign Ace of Base"
    }
    spotify.search({
        type: "track",
        query: "song"
    },function(err, data){
        if (err) {
            return console.log("error:" + err);}
    }
        )
}





module.exports = spotifyThis;