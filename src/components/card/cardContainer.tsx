import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';
import Card from './card';
import Match from './match';
import NoMoreMovies from './noMoreMovies';

import './card.css';

const CardContainer: React.FC = () => {
  const { moviesState } = useContext(MoviesContext) as MoviesContextInterface;

  if (moviesState.isMatch) {
    return (
      <div className="card__container">
        <Match />
      </div>
    );
  }
  if (moviesState.noMoreMovies) {
    return (
      <div className="card__container">
        <NoMoreMovies />
      </div>
    );
  }
  return (
    <div className="card__container">
      <Card />
    </div>
  );
};

export default CardContainer;
