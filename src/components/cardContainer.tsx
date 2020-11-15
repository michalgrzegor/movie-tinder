import React from 'react';
import { Route, Switch } from 'react-router';
import Card from './cards/card';
import Match from './cards/match';
import NoMoreMovies from './cards/noMoreMovies';

import './cardContainer.css';

const CardContainer: React.FC = () => {
  return (
    <div className="card__container">
      <Switch>
        <Route path="/recommendations/noMoreMovies">
          <NoMoreMovies />
        </Route>
        <Route path="/recommendations/match/:id">
          <Match />
        </Route>
        <Route path="/recommendations/:id">
          <Card />
        </Route>
      </Switch>
    </div>
  );
};

export default CardContainer;
