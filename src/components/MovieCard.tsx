import React, { useEffect, useState } from "react";

interface Props {
  movie: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    poster_path: string;
    release_date: string;
    title: string;
  };
}

interface serverData {
  members: string[];
}

const MovieCard = ({ movie }: Props) => {
  const [data, setData] = useState<serverData>({ members: ["NO"] });
  const [movieName, setMovieName] = useState("");
  const openInNewTab = () => {
    let url = "https://www.google.com/search?q=";
    let curMovieName = movie.title.replaceAll(" ", "+").toLowerCase();
    url = url + curMovieName + "+movie";
    window.open(url, "_blank", "noreferrer");
  };

  const imgUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;

  useEffect(() => {
    let curMovieName = movie.title.replaceAll(" ", "+").toLowerCase();
    const params = new URLSearchParams({
      // Add your parameters here, for example:
      movieName: curMovieName,
    });

    fetch(`http://localhost:5000/members?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [imgUrl]);

  return (
    <div className="card movie-Poster" key={movie.title}>
      <img
        src={imgUrl}
        className="card-img"
        alt="..."
        onClick={() => openInNewTab()}
      />
      <div className="card-body">
        {typeof data.members == "undefined" ? (
          <p className="card-text">Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p className="card-text" key={i}>
              {" "}
              {member}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieCard;
