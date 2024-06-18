import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.movies.find((movie) => movie.id === id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container">
      <div className="movie-details">
        <h1>{movie.title}</h1>
        {movie.description && <p>{movie.description}</p>}
        {movie.releaseYear && <p>Release Year: {movie.releaseYear}</p>}
        {movie.genre && <p>Genre: {movie.genre}</p>}
        <p>{movie.watched ? 'Watched' : 'Unwatched'}</p>
        <p>Rating: {movie.rating}</p>
        <p>Review: {movie.review}</p>
        <Link to={`/edit/${movie.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
