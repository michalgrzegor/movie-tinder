import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { MoviesContext } from '../../../contexts/moviesContext';
import { MoviesContextInterface } from '../../../interfaces/moviesContextInterface';
import dislikeIcon from '../../../svg/dislikeIcon.svg';
import likeIcon from '../../../svg/likeIcon.svg';

import './button.css';

const Button: React.FC<{ btnType: string }> = ({ btnType }: { btnType: string }) => {
  const {
    moviesState: { movies },
  } = useContext(MoviesContext) as MoviesContextInterface;

  const history = useHistory();

  const { id } = useParams<{ id: string }>();

  const getNextParam = () =>
    movies[movies.length - 1].id === id ? 'noMoreMovies' : movies[movies.findIndex((m) => m.id === id) + 1].id;

  return btnType === 'like' ? (
    <button type="button" onClick={() => history.push(`/recommendations/match/${id}`)}>
      <img src={likeIcon} alt="button icon" />
    </button>
  ) : (
    <button type="button" onClick={() => history.push(`/recommendations/${getNextParam()}`)}>
      <img src={dislikeIcon} alt="button icon" />
    </button>
  );
};

export default Button;
