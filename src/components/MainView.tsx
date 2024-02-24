import React, { useState } from "react";
import MovieList from "./MovieList";

const MainView = () => {
  const [year, setYear] = useState(0);
  const [genre, setGenre] = useState(0);
  const possibleYears = Array.from(
    { length: 2024 - 1950 + 1 },
    (_, index) => 1950 + index
  );

  const chosenGenre = () => {};

  const possibleGenres = {
    ALL: 0,
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    "Science Fiction": 878,
    "TV Movie": 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Movie Finder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Year
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  <li key="anyYear">
                    <a className="dropdown-item" onClick={() => setYear(0)}>
                      ALL
                    </a>
                  </li>
                  {possibleYears.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <a
                        className="dropdown-item"
                        onClick={() => setYear(item)}
                      >
                        {item}
                      </a>{" "}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genre
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  {Object.entries(possibleGenres).map(([key, value]) => (
                    <li key={value}>
                      {" "}
                      <a
                        className="dropdown-item"
                        onClick={() => setGenre(value)}
                      >
                        {key}
                      </a>{" "}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MovieList year={year} genre={genre} />
    </div>
  );
};

export default MainView;
