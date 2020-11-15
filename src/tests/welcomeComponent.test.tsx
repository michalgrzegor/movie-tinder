import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import WelcomeComponent from '../components/welcomeComponent';
import { MoviesContext } from '../contexts/moviesContext';

const moviesState = {
  movies: [
    {
      id: '1and3011',
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Inferno',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, quam sed tristique vestibulum, enim sem fermentum neque, id maximus augue ipsum quis leo. Morbi gravida sit amet lorem ac facilisis.',
      rating: 5.3,
    },
  ],
};
const dispatch = jest.fn();
const history = createMemoryHistory();
let container: Element;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container as Element);
  (container as Element).remove();
});

it('renders WelcomeComponent', () => {
  act(() => {
    render(
      <MoviesContext.Provider value={{ moviesState, dispatch }}>
        <WelcomeComponent />
      </MoviesContext.Provider>,
      container,
    );
  });
  expect((container.querySelector('h1') as Element).textContent).toBe('Start looking for a perfect match!');
});

it('button functionality', () => {
  act(() => {
    render(
      <Router history={history}>
        <MoviesContext.Provider value={{ moviesState, dispatch }}>
          <WelcomeComponent />
        </MoviesContext.Provider>
      </Router>,
      container,
    );
  });
  const button = document.querySelector('button');
  expect((button as Element).innerHTML).toBe('START');

  act(() => {
    (button as Element).dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(history.location.pathname).toBe('/recommendations/1and3011');
});
