import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Square {
  id: number;
  color: string;
}

interface SquareState {
  squares: Square[];
}

const initialState: SquareState = {
  squares: [],
};

const squareSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {
    addSquare: (state) => {
      const newSquare: Square = {
        id: Date.now(),
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      };
      state.squares.unshift(newSquare);
    },
    removeSquare: (state) => {
      state.squares.pop();
    },
  },
});

export const { addSquare, removeSquare } = squareSlice.actions;
export default squareSlice.reducer;