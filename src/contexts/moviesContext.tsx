import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import { MoviesContextInterface } from '../interfaces/moviesContextInterface';
import moviesReducer from '../reducers/moviesReducer';

export const MoviesContext = createContext<undefined | MoviesContextInterface>(undefined);

const MoviesContextProvider: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [moviesState, dispatch] = useReducer(moviesReducer, {
    movies: [],
    currentId: null,
    displayElement: 'card',
  });

  const fetchData = (): Promise<void> =>
    fetch('./movies.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((moviesArray) => dispatch({ type: 'SET_MOVIES', payload: moviesArray }));

  useEffect(() => {
    fetchData();
  }, []);

  return <MoviesContext.Provider value={{ moviesState, dispatch }}>{children}</MoviesContext.Provider>;
};

export default MoviesContextProvider;
