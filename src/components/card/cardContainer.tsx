import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';
import Card from './card';
import Match from './match';
import NoMoreMovies from './noMoreMovies';

import './card.css';

const CardContainer: React.FC = () => {
  const {
    moviesState: { displayElement },
  } = useContext(MoviesContext) as MoviesContextInterface;

  const getElement = (): JSX.Element => {
    switch (displayElement) {
      case 'noMoreMovies':
        return <NoMoreMovies />;
      case 'match':
        return <Match />;
      default:
        return <Card />;
    }
  };

  return <div className="card__container">{getElement()}</div>;
};

export default CardContainer;
