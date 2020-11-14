import React from 'react';
import Button from './button';

import './buttons.css';

const ButtonsContainer: React.FC = () => {
  return (
    <div className="btnContainer">
      <Button btnType="like" />
      <Button btnType="dislike" />
    </div>
  );
};

export default ButtonsContainer;
