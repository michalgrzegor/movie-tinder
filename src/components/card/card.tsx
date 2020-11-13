import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextType } from '../../interfaces/moviesContextInterface';

const Card = () => {
  const { moviesState } = useContext(MoviesContext) as MoviesContextType;
  const movie = moviesState.movies.find((m) => m.id === moviesState.currentId);
  return (
    <div className="card">
      <div className="card__img">
        <img src={movie?.imageURL} alt="movie poster" />
      </div>
      <div className="card__header">
        <h1>{movie?.title}</h1>
        <h3>rating: {movie?.rating}</h3>
      </div>
      <div className="card__description">
        <p>{movie?.summary}</p>
      </div>
    </div>
  );
};

export default Card;
