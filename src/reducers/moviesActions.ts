import { Movie } from '../interfaces/movie';

export type ACTIONTYPE =
  | { type: 'SET_MOVIES'; payload: Movie[] }
  | { type: 'NEXT_MOVIE' }
  | { type: 'SET_MATCH' }
  | { type: 'RESET_MOVIES' };
