import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MoviesContext } from '../contexts/moviesContext';
import { MoviesContextInterface } from '../interfaces/moviesContextInterface';

import './welcomeComponent.css';

const WelcomeComponent: React.FC = () => {
  const {
    moviesState: { movies },
  } = useContext(MoviesContext) as MoviesContextInterface;
  const history = useHistory();

  return (
    <div className="welcomeScreen">
      <h1>Start looking for a perfect match!</h1>
      <button onClick={() => history.push(`/recommendations/${movies[0].id}`)} type="button">
        START
      </button>
    </div>
  );
};

export default WelcomeComponent;
