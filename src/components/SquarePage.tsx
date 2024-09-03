import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { addSquare, removeSquare } from '../features/squareSlice';
import { RootState } from '../app/store';

const SquarePage: React.FC = () => {
  const dispatch = useDispatch();
  const squares = useSelector((state: RootState) => state.squares.squares);

  return (
    <div>
      <button onClick={() => dispatch(addSquare())}>Add</button>
      <button onClick={() => dispatch(removeSquare())}>Remove</button>
      <div style={{ 
        display: 'flex', 
        overflowX: 'hidden', 
        position: 'relative', 
        height: '20vw' 
      }}>
        <AnimatePresence initial={false}>
          {squares.map((square, index) => (
            <motion.div
              key={square.id}
              layout
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                width: '20vw',
                height: '20vw',
                backgroundColor: square.color,
                position: 'absolute',
                left: `${index * 20}vw`,
                top: 0,
              }}
              data-testid="square"
             />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SquarePage;