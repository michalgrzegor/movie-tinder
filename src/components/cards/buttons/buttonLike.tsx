import React from 'react';
import { useHistory, useParams } from 'react-router';
import likeIcon from '../../../svg/likeIcon.svg';

import './button.css';

const ButtonLike: React.FC = () => {
  const history = useHistory();

  const { id } = useParams<{ id: string }>();

  // const sendAccept = () => {
  //   fetch(`${URL}/recommendations/${id}/accept`, { method: 'PUT' })
  //     .then( change route )
  //     .catch( display error );
  // };

  return (
    <button type="button" onClick={() => history.push(`/recommendations/match/${id}`)}>
      <img src={likeIcon} alt="button icon" />
    </button>
  );
};

export default ButtonLike;
