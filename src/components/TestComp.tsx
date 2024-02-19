import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/Movies")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []); // empty dependency array ensures this effect runs only once

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjUzMzU1YmE2ODVhOGE4NjIzYjRkYmU5NjEyYTg0OCIsInN1YiI6IjY1YzdkMWU2OTQ1MWU3MDE0OTdhMTc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjpJ0DqmIkXkqQpfzID32DuzLL2e6lqQ8cznKZJDwa4",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setData(response);
    })
    .catch((err) => console.error(err));

  return (
    <div>
      <h2>JSON Data</h2>
      {data ? (
        <div>
          <p>Name: {data[0].title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
