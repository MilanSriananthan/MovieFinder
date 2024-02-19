import React from "react";

const MovieCard = ({ movie }) => {
  const openInNewTab = () => {
    let url = "https://www.google.com/search?q=";
    let movieName = movie.title.replaceAll(" ", "+").toLowerCase();
    url = url + movieName + "+movie";
    window.open(url, "_blank", "noreferrer");
  };

  console.log(movie);
  const imgUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  return (
    <div className="card text-bg-dark movie-Poster">
      <img
        src={imgUrl}
        className="card-img"
        alt="..."
        onClick={() => openInNewTab()}
      />
    </div>
  );
};

export default MovieCard;
