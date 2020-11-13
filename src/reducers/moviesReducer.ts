import { Movie } from '../interfaces/movie';
import { ACTIONTYPE } from './moviesActions';

const moviesReducer = (state: Movie[], action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_MOVIES':
      console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
};

export default moviesReducer;
