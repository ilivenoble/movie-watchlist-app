import React, { useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  //   useEffect(() => {
  //     localStorage.setItem("watchlist", JSON.stringify(watchlist));
  //   }, [watchlist]);

  function handleChange(e) {
    setMovieTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=201a449d`)
      .then((response) => response.json())
      .then((data) =>
        data.Search.map((movie) => {
          fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=201a449d`)
            .then((response) => response.json())
            .then((data) => setMovieData((prevMovie) => [data, ...prevMovie]));
        })
      )
      .catch((err) => setError(err));
  }

  function getMovie(newMovie) {
       setWatchlist((prev) =>  [newMovie, ...prev]);
  }

  function removeMovie(id){
    setWatchlist((prevMovies) =>
      prevMovies.filter((item) => item.imdbID !== id)
    );
  }

  function removeAllMovie(){
    setWatchlist([])
  }

  return (
    <Context.Provider
      value={{
        movieTitle,
        movieData,
        watchlist,
        handleChange,
        handleSubmit,
        getMovie,
        removeMovie,
        removeAllMovie
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
