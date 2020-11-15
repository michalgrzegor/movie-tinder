import { MoviesState } from '../interfaces/moviesReducerStateInterface';
import { ACTIONTYPE } from './moviesActions';

const moviesReducer = (state: MoviesState, action: ACTIONTYPE): MoviesState => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: [...action.payload],
      };
    default:
      return state;
  }
};

export default moviesReducer;
