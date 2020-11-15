import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomeComponent from './components/welcomeComponent';
import MoviesContextProvider from './contexts/moviesContext';
import CardContainer from './components/cardContainer';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <MoviesContextProvider>
        <div className="App">
          <div className="App__content">
            <Switch>
              <Route path="/recommendations">
                <CardContainer />
              </Route>
              <Route path="/">
                <WelcomeComponent />
              </Route>
            </Switch>
          </div>
        </div>
      </MoviesContextProvider>
    </Router>
  );
};

export default App;
