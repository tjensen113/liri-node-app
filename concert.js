var axios = require('axios');
var moment = require('moment')
var keys = requre("./keys.js")

function Concert(){
    this.findshow = function(conSearch){
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=bandsInTown ")
        .then (function(response){
            for (var i=0;i<response.data.length;i++){
                var date = moment(response.data[i].datetime).format("MM-DD-YYYY");
                var conData = [
                    "venue: " + response.data[i].venue.name,
                    "\nvenue location: " + response.data[i].venue.city + "," + response.data[i].venue.country,
                    "\ndate: " + date,
                    "\n---------------------------------------------"
                ]
                console.log(date);
                console.log(conData.join(" "));

            }

        })
    }
}

module.exports = Concert;