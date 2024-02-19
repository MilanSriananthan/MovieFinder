import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieRows from "./MovieRows";

const MovieList = () => {
  const [data, setData] = useState<any[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjUzMzU1YmE2ODVhOGE4NjIzYjRkYmU5NjEyYTg0OCIsInN1YiI6IjY1YzdkMWU2OTQ1MWU3MDE0OTdhMTc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjpJ0DqmIkXkqQpfzID32DuzLL2e6lqQ8cznKZJDwa4",
    },
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response = chunkArray(response.results, 5);
        console.log(response);
        setData(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container text-center">
      {data && data.map((movieRow) => <MovieRows movies={movieRow} />)}
    </div>
  );
};

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

export default MovieList;
