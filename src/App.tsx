import React from 'react';
import './App.css';
import ButtonsContainer from './components/buttons/buttonsContainer';
import CardContainer from './components/card/cardContainer';
import MoviesContextProvider from './contexts/moviesContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__content">
        <MoviesContextProvider>
          <CardContainer />
          <ButtonsContainer />
        </MoviesContextProvider>
      </div>
    </div>
  );
};

export default App;
