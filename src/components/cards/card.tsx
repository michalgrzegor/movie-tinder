import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';
import ButtonsContainer from './buttons/buttonsContainer';

import './card.css';

const Card: React.FC = () => {
  const {
    moviesState: { movies },
  } = useContext(MoviesContext) as MoviesContextInterface;
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === id);

  return (
    <div>
      <div className="card container-shadow">
        <div className="card__img">
          <img src={movie?.imageURL} alt="movie poster" />
        </div>
        <div className="card__info">
          <div className="card__header">
            <h1>{movie?.title}</h1>
            <h3>rating: {movie?.rating}</h3>
          </div>
          <div className="card__description">
            <p>{movie?.summary}</p>
          </div>
        </div>
      </div>
      <ButtonsContainer />
    </div>
  );
};

export default Card;
