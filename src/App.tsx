import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import SquarePage from './components/SquarePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SquarePage />
      </div>
    </Provider>
  );
}

export default App;
