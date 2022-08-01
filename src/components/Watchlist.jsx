import React, {useContext} from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from '@fortawesome/free-solid-svg-icons'

function Watchlist(){
    const {watchlist, removeMovie, removeAllMovie} = useContext(Context)

    const renderWatchlist = watchlist.map((movie, index) => {
        return (
          <div key={index}>
            <div className="my-14 px-8 md:px-44 gap-x-32 flex flex-col md:flex-row justify-center">
              <img
                src={`${movie.Poster}`}
                className="w-60 md:w-80 h-auto mx-auto object-fit"
                alt="movie poster"
              ></img>

              <div className="w-full">
                <div className="my-4 flex justify-between items-end">
                  <h3 className="text-xl md:text-4xl font-bold">
                    {" "}
                    {movie.Title}
                  </h3>
                  <h4 className="text-xl md:text-4xl"> {movie.Year}</h4>
                  <p className="text-xl md:text-4xl"> ⭐{movie.imdbRating}</p>
                </div>
                <div className="flex justify-between items-end mb-4">
                  <p className="text-xl mr-6 md:text-2xl"> {movie.Runtime}</p>
                  <p className="text-xl md:text-2xl">{movie.Genre}</p>
                  <button
                    className="bg-red-500 hover:bg-red-800 py-2 px-4 mt-3 rounded-lg font-bold"
                    onClick={() => removeMovie(movie.imdbID)}
                  >
                    -
                  </button>
                </div>
                <div className="mt-8">
                  <p className="text-gray-400 text-xl md:text-3xl">
                    {movie.Plot}
                  </p>
                </div>
              </div>
            </div>
            <hr className="w-3/4 mx-auto"></hr>
          </div>
        );
    })


    return (
      <div className="m-0">
        <header className="bg-blue-900 bg-[url('./images/backgroundimage.png')] bg-cover bg-center py-10 px-8 md:px-14">
          <div className="flex justify-center items-end mb-8 justify-between">
            <h1 className="text-4xl md:text-7xl font-bold">My Watchlist</h1>
            <Link to="/">
              <p className="font-bold md:text-2xl text-gray-400">
                Search for Movies
              </p>
            </Link>
          </div>
        </header>
        {watchlist.length > 0 ? (
          <div>
            {renderWatchlist}
            <button
              onClick={() => removeAllMovie()}
              className="block w-3/4 mx-auto bg-red-500 rounded-lg my-8 py-4 px-8 w-2/3 text-white font-bold my-4 hover:px-9 hover:bg-red-900"
            >
              Clear Watchlist
            </button>
          </div>
        ) : (
          <div className="mt-14 flex flex-col justify-center items-center">
            <p className="text-gray-400 text-xl md:text-3xl mb-8">
              Your watchlist is looking a little empty...
            </p>
            <Link to="/">
              <button className="rounded-lg border-4 font-bold border-blue-500 px-3 py-2 hover:bg-indigo-500">
                Let's add some movies
              </button>
            </Link>
          </div>
        )}
      </div>
    );
}

export default Watchlist