import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

jest.mock('./components/SquarePage', () => () => <div data-testid="mock-square-page">Mocked SquarePage</div>);

test('renders App component with SquarePage', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const squarePageElement = screen.getByTestId('mock-square-page');
  expect(squarePageElement).toBeInTheDocument();
});