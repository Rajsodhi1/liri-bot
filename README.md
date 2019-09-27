# liri-bot
The LIRI app is similar to the SIRI or ALEXA voice input apps. It takes a predetermined command and a query term and returns the relevant info to you. This all takes place in your terminal/command line without the use of a browser.
Using either "movie-this", "concert-this", and "spotify-this-song" along with what you are seaching for, LIRI will return any specific info pertaining to your search.

This snippet shows links to all the required modules, files, and apis
![screenshot 1](https://github.com/Rajsodhi1/liri-bot/blob/master/screen1.png)

this shows the initial liri function with variables pointing to the user's inputs
![screenshot 2](https://github.com/Rajsodhi1/liri-bot/blob/master/screen2.png)

this shows the spotify command based off of the spotify documentation. it takes the song that the user searched, calls to the api and returns the relevant info. If the user does not input a search, the command defaults to Ace of Base. Using a separate npm module, the results appear in a table
![screen3](https://github.com/Rajsodhi1/liri-bot/blob/master/screen3.png)

using the OMDB API the resulting data is parsed out and we log only the relevant info. If there is no search input the command defaults to Mr. Nobody.
![screen4](https://github.com/Rajsodhi1/liri-bot/blob/master/screen4.png)

Similarly this uses the bands in town api to find concert info and is then logged to the terminal for the use to see.
![screen5](https://github.com/Rajsodhi1/liri-bot/blob/master/screen5.png)

Finally the user tell LIRI to go into a separate text file. It separates all the text into an array, splitting it at the commas. It that take the first 2 indicies of that array and makes them into variables that the LIRI function can use.
![screen6](https://github.com/Rajsodhi1/liri-bot/blob/master/screen6.png)

Technologies used:
Javascript
Node
NodePackageManager
APIs

Link to repository:
https://github.com/Rajsodhi1/liri-bot

-Raj