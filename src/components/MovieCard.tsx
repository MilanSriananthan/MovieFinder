import React from "react";

const MovieCard = ({ movie }) => {
  const openInNewTab = () => {
    let url = "https://www.google.com/search?q=";
    let movieName = movie.title.replaceAll(" ", "+").toLowerCase();
    url = url + movieName + "+movie";
    window.open(url, "_blank", "noreferrer");
  };

  const imgUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  return (
    <div className="card movie-Poster">
      <img
        src={imgUrl}
        className="card-img"
        alt="..."
        onClick={() => openInNewTab()}
      />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
