import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';
import dislikeIcon from '../../svg/dislikeIcon.svg';
import likeIcon from '../../svg/likeIcon.svg';

const Button: React.FC<{ btnType: string }> = ({ btnType }: { btnType: string }) => {
  const { dispatch } = useContext(MoviesContext) as MoviesContextInterface;

  return btnType === 'like' ? (
    <button type="button" onClick={() => dispatch({ type: 'SET_MATCH' })}>
      <img src={likeIcon} alt="button icon" />
    </button>
  ) : (
    <button type="button" onClick={() => dispatch({ type: 'NEXT_MOVIE' })}>
      <img src={dislikeIcon} alt="button icon" />
    </button>
  );
};

export default Button;
