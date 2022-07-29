import React, { useContext } from "react";
import { Context } from "../Context";
function Home() {
  const {
    movieTitle,
    movieData,
    handleChange,
    handleSubmit,
    watchlist,
    getMovie,
  } = useContext(Context);

  const movies = movieData.map((movie, index) => {
    return (
      <div key={index}>
        <div className="movie-poster-div">
          <img src={`${movie.Poster}`} alt="movie poster"></img>
        </div>
        <div className="movie-info">
          <div className="movie-title-and-rating">
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-rating">⭐{movie.imdbRating}</p>
          </div>
          <div className="general-movie-info">
            <div className="general-movie-info-details">
              <p>{movie.Runtime}</p>
              <p>{movie.Genre}</p>
            </div>
          </div>
          <div className="movie-plot">
            <p className="plot">{movie.Plot}</p>
          </div>
          <button className="add-btn" onClick={()=>{
            getMovie(movie)
            console.log(watchlist);
            }}>Add to watchlist</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          placeholder="Enter movie title"
          value={movieTitle}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
      {movies}
    </div>
  );
}

export default Home;
