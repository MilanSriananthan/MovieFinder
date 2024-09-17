<h1>Movie Finder</h1>
Created by Milan Sriananthan with Flask & React

<h3>Problem</h3>
I myself am strong movie buff, and after watching almost every movie on Netflix, it becomes difficult to find a new movie to watch. So I needed some tool to help me find these movies quicker, instead of scouring the web endlessly
for reddit suggestions. I realized that more than most of the time, the movies that I enjoy have a high google user rating (see figure 1). Which is basically a survey done though google to see if somebody liked or disliked the movie. 
So naturally I looked to find a list of movies that have a high google user ratings (90% or higher), but to my luck no such list has been made.

<h3>Solution</h3>
Movie Finder is a React application with a simple Flask backend. That utilizes TMDB (The movie Database) Api to load in movies with their respective image. Then by using the movie title, a seperate python web-scraper searches the movie and graps the
google user rating and displays it on the page along with the movie poster. This is done for every movie and there are filter in place to sort the movies by ratings, release date, genre, etc.

![Screen Shot 2024-09-17 at 1 13 49 PM](https://github.com/user-attachments/assets/4aa58d22-b171-4e09-973b-2e88e56ea931)
Figure 1: Google User metric

![Screen Shot 2024-09-17 at 1 18 04 PM](https://github.com/user-attachments/assets/5ea2750b-f9a8-4968-b959-0c58635c1f92)
Figure 2: Movie Finder Application


<h3>Improvements</h3>
One performace update that was made was to instead of scraping the web again for the google user ratings for a movie that was already looked at, the application now stores all entries in a mongoDB cluster so when an already scaped movie comes into
view again it pulls the rating from the database instead of web scraping again. This significantly improves the speed at which pages are loaded, especially as the application is used more (since more are in the db). This also enables for a simple generated export list from the DB, which enables other operatons such as sorting.

<h3>Future Improvemen Ideas</h3>
<ul>
  <li>Let users have seperate accounts and like movies they watched</li>
  <li>Create an AI tool that generated movie suggestions based on like history</li>
  <li>Let user sign-in to other streaming services and grab their movie data (e.g Netflix, hulu, etc)</li>
</ul>
