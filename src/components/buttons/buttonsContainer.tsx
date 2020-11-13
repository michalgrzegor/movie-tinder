import React from 'react';
import Button from './button';

const ButtonsContainer = () => {
  return (
    <div className="btnContainer">
      <Button btnType="like" />
      <Button btnType="dislike" />
    </div>
  );
};

export default ButtonsContainer;
