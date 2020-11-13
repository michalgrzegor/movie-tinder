import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import { MoviesContextType } from '../interfaces/moviesContextInterface';
import moviesReducer from '../reducers/moviesReducer';

export const MoviesContext = createContext<undefined | MoviesContextType>(undefined);

const MoviesContextProvider = ({ children }: { children: ReactNode }) => {
  const [moviesState, dispatch] = useReducer(moviesReducer, { movies: [], lastId: null });

  useEffect(() => {
    fetch('./movies.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((data) => data.json())
      .then((moviesArray) => dispatch({ type: 'SET_MOVIES', payload: moviesArray }));
  }, []);

  return <MoviesContext.Provider value={{ moviesState, dispatch }}>{children}</MoviesContext.Provider>;
};

export default MoviesContextProvider;
