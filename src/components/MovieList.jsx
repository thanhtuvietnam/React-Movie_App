import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div className="image-container" key={index}>
            <img src={movie.Poster} alt="movie" />
            <div className="text-center">
              <p className="mt-2 mt-2 font-weight-bold">{movie.Title}</p>
              <p className="mt-2">{movie.Year}</p>
            </div>
            <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
