import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../store';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Movie Watchlist</h1>
      <Link to="/add" className="btn">
        Add Movie
      </Link>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <div className="content">
              <h3>{movie.title}</h3>
              {movie.description && <p>{movie.description}</p>}
              {movie.releaseYear && <p>Release Year: {movie.releaseYear}</p>}
              {movie.genre && <p>Genre: {movie.genre}</p>}
            </div>
            <div className="actions">
              <button onClick={() => dispatch(toggleWatched(movie.id))}>
                {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
              </button>
              <Link to={`/edit/${movie.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
