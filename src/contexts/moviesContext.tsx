import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import { MoviesContextType } from '../interfaces/moviesContextInterface';
import moviesReducer from '../reducers/moviesReducer';

export const MoviesContext = createContext<undefined | MoviesContextType>(undefined);

const MoviesContextProvider = ({ children }: { children: ReactNode }) => {
  const [moviesState, dispatch] = useReducer(moviesReducer, { movies: [], currentId: null, isMatch: false });

  const fetchData = (): Promise<any> =>
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
