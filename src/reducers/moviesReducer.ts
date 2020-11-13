import { MoviesState } from '../interfaces/moviesReducerStateInterface';
import { ACTIONTYPE } from './moviesActions';

const moviesReducer = (state: MoviesState, action: ACTIONTYPE): MoviesState => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: [...action.payload],
        currentId: action.payload[0].id,
      };
    case 'NEXT_MOVIE':
      return {
        ...state,
        currentId:
          state.movies[state.movies.length - 1].id === state.currentId
            ? null
            : state.movies[state.movies.findIndex((m) => m.id === state.currentId) + 1].id,
      };
    case 'SET_MATCH':
      return {
        ...state,
        isMatch: true,
      };
    default:
      return state;
  }
};

export default moviesReducer;
