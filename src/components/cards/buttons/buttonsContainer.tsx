import React from 'react';
import Button from './button';

import './buttonsContainer.css';

const ButtonsContainer: React.FC = () => {
  return (
    <div className="btnContainer">
      <div>
        <Button btnType="like" />
        <Button btnType="dislike" />
      </div>
    </div>
  );
};

export default ButtonsContainer;
