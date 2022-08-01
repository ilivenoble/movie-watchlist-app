import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import cover from "../images/cover.webp"
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
        <div className="my-14 px-8 md:px-44 gap-x-32 flex flex-col md:flex-row justify-center">
          <img
            src={`${movie.Poster}`}
            alt="movie poster"
            className="w-60 md:w-80 h-auto mx-auto object-fit"
          ></img>

          <div className="w-full">
            <div className="my-4 flex justify-between items-end">
              <h3 className="text-xl md:text-4xl font-bold"> {movie.Title}</h3>
              <h4 className="text-xl md:text-4xl">{movie.Year}</h4>
              <p className="text-xl md:text-4xl">⭐{movie.imdbRating}</p>
            </div>
            <div className="flex justify-between items-end mb-4">
              <p className="text-xl md:text-4xl"> {movie.Runtime}</p>
              <p className="text-xl md:text-4xl">{movie.Genre}</p>
            </div>
            <div className="movie-plot">
              <p className="text-gray-400 text-xl md:text-2xl">{movie.Plot}</p>
            </div>
            <div className="flex justify-center items-center md:justify-start">
              <button
                className="flex justify-center items-center  bg-blue-500 rounded-lg py-2 px-8 w-2/3 text-white font-bold my-4 hover:px-9 hover:bg-green-500"
                onClick={() => {
                  getMovie(movie);
                }}
              >
                {watchlist.includes(movie) ? "Added" : "Add to Watchlist"}
              </button>
            </div>
          </div>
        </div>
        <hr className="w-3/4 mx-auto"></hr>
      </div>
    );
  });

  return (
    <div className="mt-0">
      <header className="bg-[url('./images/backgroundimage.png')] bg-cover bg-center bg-opacity-75 bg-slate-500 py-10 px-8 md:px-14 ">
        <div className="flex justify-center items-end mb-8 justify-between">
          <h1 className="text-4xl md:text-7xl font-bold">Find your film</h1>
          <Link to="/watchlist">
            <p className="font-bold md:text-2xl text-blue-200">
              View watchlist
            </p>
          </Link>
        </div>
        <div className="relative top-16">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-center items-center "
          >
            <input
              className="bg-gray-200 focus:bg-blue-200 border border-gray-300 text-gray-900 text-sm  rounded-lg md:rounded-l-lg w-full sm:w-2/4 h-10 text-4xl py-6 text-center"
              type="text"
              name="movieTitle"
              placeholder="Enter movie title"
              value={movieTitle}
              onChange={handleChange}
            />
            <button
              className="relative bottom-0 bg-white h-12 text-blue-800 px-4 py-2 my-3 rounded-lg sm:rounded-r-lg font-bold"
              type="submit"
            >
              Search Movie
            </button>
          </form>
        </div>
      </header>
      {movieData.length > 0 ? (
        <div>{movies}</div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-14">
          <img src={cover} className="w-1/4 h-1/4"></img>
          <p className="text-lg font-bold mt-8 text-gray-400">
            Start Exploring
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
