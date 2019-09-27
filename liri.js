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






}





