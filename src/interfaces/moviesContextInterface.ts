import { MoviesState } from './moviesReducerStateInterface';

export interface MoviesContextType {
  moviesState: MoviesState;
  dispatch: React.Dispatch<any>;
}
