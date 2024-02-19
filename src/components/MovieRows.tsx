import React from "react";
import MovieCard from "./MovieCard";

const MovieRows = ({ movies }) => {
  console.log("here");
  console.log(movies);

  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col" style={{ padding: "10px" }}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieRows;
