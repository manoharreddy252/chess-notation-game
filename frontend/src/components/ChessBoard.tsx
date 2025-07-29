import React from 'react';
import { motion } from 'framer-motion';

interface ChessBoardProps {
  onSquareClick: (square: string) => void;
  feedback: {
    show: boolean;
    correct: boolean;
    square: string;
  };
  highlightSquare?: string;
}

const ChessBoard: React.FC<ChessBoardProps> = ({ 
  onSquareClick, 
  feedback, 
  highlightSquare 
}) => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const getSquareClass = (file: string, rank: string) => {
    const square = `${file}${rank}`;
    const isLight = (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0;
    
    let classes = `chess-square ${isLight ? 'light' : 'dark'}`;
    
    if (highlightSquare === square) {
      classes += ' highlighted';
    }
    
    if (feedback.show && feedback.square === square) {
      classes += feedback.correct ? ' correct' : ' incorrect';
    }
    
    return classes;
  };

  return (
    <motion.div
      className="chess-board"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {ranks.map((rank) =>
        files.map((file) => {
          const square = `${file}${rank}`;
          return (
            <motion.div
              key={square}
              className={getSquareClass(file, rank)}
              onClick={() => onSquareClick(square)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: (files.indexOf(file) + ranks.indexOf(rank)) * 0.02,
                duration: 0.3 
              }}
            >
              {square}
            </motion.div>
          );
        })
      )}
    </motion.div>
  );
};

export default ChessBoard;