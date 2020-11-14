import { ACTIONTYPE } from '../reducers/moviesActions';
import { MoviesState } from './moviesReducerStateInterface';

export interface MoviesContextInterface {
  moviesState: MoviesState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}
