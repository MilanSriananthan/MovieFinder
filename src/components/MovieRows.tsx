import React from "react";
import MovieCard from "./MovieCard";

interface Props {
  movies: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    poster_path: string;
    release_date: string;
    title: string;
  }[];
}

const MovieRows = ({ movies }: Props) => {
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
