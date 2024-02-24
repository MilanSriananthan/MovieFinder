import React from "react";
import MovieCard from "./MovieCard";

const MovieRows = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.title} className="col" style={{ padding: "10px" }}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieRows;
