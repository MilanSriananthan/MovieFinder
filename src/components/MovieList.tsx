import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieRows from "./MovieRows";

const MovieList = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);

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
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response = chunkArray(response.results, 5);
        console.log(response);
        setData(response);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div>
      <div className="container text-center">
        {data && data.map((movieRow) => <MovieRows movies={movieRow} />)}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" caria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link active">{page}</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => setPage(page + 1)}>
              {page + 1}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => setPage(page + 2)}>
              {page + 2}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
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
