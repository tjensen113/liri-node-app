var keys = require("./keys.js")
var fs = require("fs");
var axios = require('axios');
var moment = require('moment')


function ConcertThis(userInput){
    this.findshow = function(conSearch){
        axios.get ="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" +keys.bandsInTown.id
        .then (function(response){
            for (var i=0;i<response.data.length;i++){
                var date = moment(response.data[i].datetime).format("MM-DD-YYYY");
                var conData = [
                    "venue: " + response.data[i].venue.city,
                    "\nvenue location: " + response.data[i].venue.city + "," + response.data[i].venue.country,
                    "\ndate: " + date,
                    "\n---------------------------------------------"
                ]
                console.log(date);
                console.log(conData.join(" "));

            }

        });
    }
}

module.exports = ConcertThis;