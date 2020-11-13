import { Movie } from './movie';

export interface MoviesState {
  movies: Movie[];
  lastId: null | string;
}
