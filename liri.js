require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var request = require("request");
var consoletable = require("console.table");

// var command = process.argv[2];
// var query = process.argv.slice(3).join(" ");

var liri = function (command, query) {
 var command = process.argv[2];
 var query = process.argv.slice(3).join(" ");

    if (command === "spotify-this-song") {
        var song = query;
        if (song == undefined) {
            song = "The sign by Ace of Base";
        }
        spotify.search({ type: 'track', query: song}, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }

        var array= [];
        for (var i = 0; i < data.tracks.items.length; i++ ) {
            var info = {
                album : data.tracks.items[i].album.name,
                artist : data.tracks.items[i].album.artists[0].name,
                song : data.tracks.items[i].name,
                preview_url : data.tracks.items[i].preview_url 
            }
            array.push(info);
        }
        var table = cTable.getTable(array);
        console.log(table);
    });
    } else if(command === "movie-this") {
        var movieName = query;
        axios.get(queryURL).then(function(response){
        if (movieName == undefined) {
            movieName = "Mr. Nobody";
        }
        request("http://www.omdbapi.com/?&t=" + query + "&apikey=964d1a21", function (error, response, body) {
    
            var result  =  JSON.parse(body);
            console.log("Title :" + result.Title);
            console.log("Year :" + result.Released);
            console.log("IMDB Rating :" + result.imdbRating );
            console.log("Country :" +  result.Country);
            console.log("Movie Plot :" + result.Plot);
            console.log("Actors :" +  result.Actors);
            })
        });
    } else if (command === "concert-this") {
        var artist = query;
        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        
        axios.get(queryURL).then(function(response) {
            console.log(response.data[0]);
            console.log("Venue name " + response.data[0].venue.name);
            console.log("Venue location " + response.data[0].venue.city);
            console.log("Date of Event " +  moment(response.data[0].datetime).format(MM/DD/YYYY));
            }) 
            console.log(artist);
    } else if (command === "do-what-it-says") {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log("Error: " + error);
            }
            var randomTxt = data.split(",");
            var randomCommand = randomTxt[0];
            var randomQuery = randomTxt[1];
            liri(randomCommand, randomQuery);
        });
    }
    };   






