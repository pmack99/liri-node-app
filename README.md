# liri-node-app

# This liri-node-app will take in a terminal command and perform search functions. 
  The process.argv method is how we translate the terminal command into a useable argument.
  To do this, we have to first load in the required files. 

![Image of required files](./images/requiredFiles.png)



When we look at the terminal command, node (index [0])  and liri (index [1]) are used to run the js file. 
"Node" is the default way to run the app, "liri" is the name of the file we are running. 
The string in index[3] is the command. The four we have in this exercise is movie-this, concert-this, spotify-this-song and do-what-it-says.
The string in index[4] is the query. 

When the node liri "XXXXXXX" command and "query" is given, a switch case is used to determine the course.
![Image of switch](./images/switch.png)


In the case of movie-this, this is the returned results from the command:
## node liri movie-this Star Wars
![Image of movie-this](./images/movie-This.png)


In the case of concert-this, this is the returned results from the command:
## node liri concert-this Bon Jovi
![Image of concert-this](./images/concert.This.png)


In the case of spotify-this-song, this is the returned results from the command:
## node liri spotify-this-song Dream On
![Image of spotify-this](./images/spotify.png)


The do-what-it-says function is special.
With the require FS function, it will allow you to read an external file (random.txt in this case) to input the parameters of the search. I places a "movie-this" Groundhog Day text that is passed through this last function.
![Image of spotify-this](./images/do_what.png)




