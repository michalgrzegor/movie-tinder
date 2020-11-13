import React from 'react';
import './App.css';
import ButtonsContainer from './components/buttonsContainer';
import MoviesContextProvider from './contexts/moviesContext';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <MoviesContextProvider>
        <ButtonsContainer />
      </MoviesContextProvider>
    </div>
  );
};

export default App;
