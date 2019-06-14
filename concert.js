var axios = require('axios');
var moment = require('moment')


function Concert(){
    this.findshow = function(conSearch){
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then (function(response){
            for (var i=0;i<response.data.length;i++){
                var date = moment(response.data[i].datetime).format("MM-DD-YYYY");
                
            }

        }
    }
}