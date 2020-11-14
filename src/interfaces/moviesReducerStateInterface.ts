import { Movie } from './movie';

export interface MoviesState {
  movies: Movie[];
  currentId: null | string;
  displayElement: 'card' | 'noMoreMovies' | 'match';
}
