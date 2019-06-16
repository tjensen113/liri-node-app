var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");

function movieThis(userInput)

var movie = userInput;
var url = "http://www.omdbapi.com/?t=" +
movie + "&y=&plot=short&apikey="+keys.omdb.id;
axios.get(url).then(
    function (response) {
        console.log("movie title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    });


module.exports = movieThis;