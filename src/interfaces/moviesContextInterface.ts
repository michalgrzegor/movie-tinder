import { Movie } from './movie';

export interface MoviesContextType {
  movies: Movie[];
  dispatch: React.Dispatch<any>;
}
