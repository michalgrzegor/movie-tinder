import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/moviesContext';
import { MoviesContextInterface } from '../../interfaces/moviesContextInterface';
import Button from './button';

import './buttons.css';

const ButtonsContainer: React.FC = () => {
  const {
    moviesState: { displayElement },
  } = useContext(MoviesContext) as MoviesContextInterface;

  return (
    <div className="btnContainer">
      {displayElement === 'card' && (
        <div>
          <Button btnType="like" />
          <Button btnType="dislike" />
        </div>
      )}
    </div>
  );
};

export default ButtonsContainer;
