import React from 'react';
import ButtonDislike from './buttonDislike';
import ButtonLike from './buttonLike';

import './buttonsContainer.css';

const ButtonsContainer: React.FC = () => {
  return (
    <div className="btnContainer">
      <div>
        <ButtonLike />
        <ButtonDislike />
      </div>
    </div>
  );
};

export default ButtonsContainer;
