import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';

import './match.css';

const Match: React.FC = () => {
  const {
    moviesState: { movies, currentId },
  } = useContext(MoviesContext) as MoviesContextInterface;
  const movie = movies.find((m) => m.id === currentId);

  return (
    <div className="match">
      <h1>it&apos;s a match</h1>
      <img src={movie?.imageURL} alt="movie poster" />
    </div>
  );
};

export default Match;
