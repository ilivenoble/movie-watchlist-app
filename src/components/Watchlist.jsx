import React, {useContext} from "react";
import { Context } from "../Context";

function Watchlist(){
    const {watchlist, removeMovie, removeAllMovie} = useContext(Context)

    const renderWatchlist = watchlist.map((movie, index) => {
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
                <button
                  className="remove-btn"
                  onClick={() => removeMovie(movie.imdbID)}
                >
                  Remove
                </button>
              </div>
              <div className="movie-plot">
                <p className="plot">{movie.Plot}</p>
              </div>
            </div>
            <hr></hr>
          </div>
        );
    })


    return (
      <div className="watchlist">
        {renderWatchlist}
        <button onClick={() => removeAllMovie}>Remove All</button>
      </div>
    );
}