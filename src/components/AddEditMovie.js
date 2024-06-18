import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addMovie, editMovie } from '../store';
import './AddEditMovie.css';

const AddEditMovie = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [movieDetails, setMovieDetails] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
  });

  useEffect(() => {
    if (id) {
      const movie = movies.find((movie) => movie.id === id);
      if (movie) {
        setMovieDetails(movie);
      }
    }
  }, [id, movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editMovie({ id, updatedMovie: movieDetails }));
    } else {
      dispatch(addMovie({ ...movieDetails, id: Date.now().toString() }));
    }
    history.push('/');
  };

  return (
    <div className="container">
      <h1>{id ? 'Edit Movie' : 'Add Movie'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input name="title" value={movieDetails.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={movieDetails.description} onChange={handleChange} />
        </div>
        <div>
          <label>Release Year</label>
          <input name="releaseYear" value={movieDetails.releaseYear} onChange={handleChange} />
        </div>
        <div>
          <label>Genre</label>
          <input name="genre" value={movieDetails.genre} onChange={handleChange} />
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={() => history.push('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditMovie;
