<h1>Movie Finder</h1>
Created by Milan Sriananthan with Flask & React

<h3>Problem</h3>
I myself am strong movie buff, and after watching almost every movie on Netflix, it becomes difficult to find a new movie to watch. So I needed some tool to help me find these movies quicker, instead of scouring the web endlessly
for reddit suggestions. I realized that more than most of the time, the movies that I enjoy have a high google user rating (see figure 1). Which is basically a survey done though google to see if somebody liked or disliked the movie. 
So naturally I looked to find a list of movies that have a high google user ratings (90% or higher), but to my luck no such list has been made.

<h3>Solution</h3>
Movie Finder is a React application with a simple Flask backend. That utilizes TMDB (The movie Database) Api to load in movies with their respective image. Then by using the movie title, a seperate python web-scraper searches the movie and graps the
google user rating and displays it on the page along with the movie poster. This is done for every movie and there are filter in place to sort the movies by ratings, release date, genre, etc.
