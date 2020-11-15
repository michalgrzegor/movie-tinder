import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route } from 'react-router';
import Match from '../components/cards/match';
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
let container: Element;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container as Element);
  (container as Element).remove();
});

it('renders Card', () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={['recommendations/match/1and3011']}>
        <Route path="recommendations/match/:id">
          <MoviesContext.Provider value={{ moviesState, dispatch }}>
            <Match />
          </MoviesContext.Provider>
        </Route>
      </MemoryRouter>,
      container,
    );
  });
  expect((container.querySelector('h1') as Element).textContent).toBe("it's a match");

  const img = document.querySelector('img');

  expect((img as HTMLImageElement).src).toBe(
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  );
});
