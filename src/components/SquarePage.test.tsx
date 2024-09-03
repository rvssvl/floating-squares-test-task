import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SquarePage from './SquarePage';

const mockStore = configureStore([]);

describe('SquarePage', () => {
  it('renders Add and Remove buttons', () => {
    const store = mockStore({ squares: { squares: [] } });
    render(
      <Provider store={store}>
        <SquarePage />
      </Provider>
    );

    expect(screen.getByText('Add')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('renders correct number of squares', () => {
    const initialState = {
      squares: {
        squares: [
          { id: 1, color: 'red' },
          { id: 2, color: 'blue' }
        ]
      }
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SquarePage />
      </Provider>
    );

    const squares = screen.getAllByTestId('square');
    expect(squares).toHaveLength(2);
  });
});