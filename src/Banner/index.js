import React, { useState, useEffect } from "react";
import "./index.css";
import instance from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      let randomNumber = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomNumber]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button" type="button">
            Play
          </button>
          <button className="banner__button" type="button">
            My List
          </button>
        </div>
        {/* description */}
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
