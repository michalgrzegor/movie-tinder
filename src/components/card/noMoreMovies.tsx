import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';

import './noMoreMovies.css';

const NoMoreMovies: React.FC = () => {
  const { dispatch } = useContext(MoviesContext) as MoviesContextInterface;

  return (
    <div className="noMoreMovies">
      <h1>no more movies to display</h1>
      <button onClick={() => dispatch({ type: 'NEXT_MOVIE' })} type="button">
        Search again
      </button>
    </div>
  );
};

export default NoMoreMovies;
