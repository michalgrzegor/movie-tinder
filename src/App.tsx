import React from 'react';
import './App.css';
import ButtonsContainer from './components/buttons/buttonsContainer';
import CardContainer from './components/card/cardContainer';
import MoviesContextProvider from './contexts/moviesContext';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <MoviesContextProvider>
        <CardContainer />
        <ButtonsContainer />
      </MoviesContextProvider>
    </div>
  );
};

export default App;
