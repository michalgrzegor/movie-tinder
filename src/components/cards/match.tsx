import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';

import './match.css';

const Match: React.FC = () => {
  const {
    moviesState: { movies },
  } = useContext(MoviesContext) as MoviesContextInterface;
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const movie = movies.find((m) => m.id === id);

  return (
    <div className="match">
      <h1>it&apos;s a match</h1>
      <img src={movie?.imageURL} alt="movie poster" />
      <button className="btn-again" onClick={() => history.push(`/recommendations/${movies[0].id}`)} type="button">
        Search again
      </button>
    </div>
  );
};

export default Match;
