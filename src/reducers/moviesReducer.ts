import { MoviesState } from '../interfaces/moviesReducerStateInterface';
import { ACTIONTYPE } from './moviesActions';

const moviesReducer = (state: MoviesState, action: ACTIONTYPE): MoviesState => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        movies: [...action.payload],
        lastId: action.payload[0].id,
      };
    default:
      return state;
  }
};

export default moviesReducer;
