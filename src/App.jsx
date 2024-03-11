import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import axios from 'axios';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToFavourite from './components/AddToFavourite';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b0bbcf15`;
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <div className="container-fluid  text-center movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />.
        <SearchBox 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          getMovieRequest={getMovieRequest} />
      </div>
      <div className="row row-cols-auto">
        <MovieList 
          movies={movies} 
          favouriteComponent={AddToFavourite} 
          handleFavouritesClick={addFavouriteMovie}
        />

      </div>
    </div>
  );
};

export default App;
