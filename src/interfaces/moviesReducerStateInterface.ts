import { Movie } from './movie';

export interface MoviesState {
  movies: Movie[];
  currentId: null | string;
  isMatch: boolean;
  noMoreMovies: boolean;
}
