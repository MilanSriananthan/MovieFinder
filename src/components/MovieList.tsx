import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieRows from "./MovieRows";

const MovieList = ({ year, genre }) => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  let yearKey = "";
  let genreKey = "";
  if (year != 0) {
    yearKey = "&primary_release_year=" + year;
  }

  if (genre != 0) {
    genreKey = "&with_genres=" + genre;
  }
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
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}${yearKey}&sort_by=popularity.desc${genreKey}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response = chunkArray(response.results, 5);
        setData(response);
      })
      .catch((err) => console.error(err));
  }, [page, yearKey, genreKey]);

  return (
    <div>
      <div className="container text-center">
        {data && data.map((movieRow) => <MovieRows movies={movieRow} />)}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li key="Previous" className="page-item">
            <a
              className="page-link"
              caria-label="Previous"
              onClick={() => setPage(page - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li key={page - 2} className="page-item">
            <a className="page-link" onClick={() => setPage(page - 2)}>
              {page - 2}
            </a>
          </li>
          <li key={page - 1} className="page-item">
            <a className="page-link" onClick={() => setPage(page - 1)}>
              {page - 1}
            </a>
          </li>
          <li key={page} className="page-item">
            <a className="page-link active">{page}</a>
          </li>
          <li key={page + 1} className="page-item">
            <a className="page-link" onClick={() => setPage(page + 1)}>
              {page + 1}
            </a>
          </li>
          <li key={page + 2} className="page-item">
            <a className="page-link" onClick={() => setPage(page + 2)}>
              {page + 2}
            </a>
          </li>
          <li key="Next" className="page-item">
            <a
              className="page-link"
              aria-label="Next"
              onClick={() => setPage(page + 1)}
            >
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
