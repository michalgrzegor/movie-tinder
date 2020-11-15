import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';

import './noMoreMovies.css';

const NoMoreMovies: React.FC = () => {
  const {
    moviesState: { movies },
  } = useContext(MoviesContext) as MoviesContextInterface;
  const history = useHistory();

  return (
    <div className="noMoreMovies">
      <h1>no more movies to display</h1>
      <button className="btn-again" onClick={() => history.push(`/recommendations/${movies[0].id}`)} type="button">
        Search again
      </button>
    </div>
  );
};

export default NoMoreMovies;
