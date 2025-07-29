import React from 'react';
import { motion } from 'framer-motion';

interface ChessBoardProps {
  onSquareClick: (square: string) => void;
  feedback: {
    show: boolean;
    correct: boolean;
    square: string;
  };
}

const ChessBoard: React.FC<ChessBoardProps> = ({ 
  onSquareClick, 
  feedback
}) => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const getSquareClass = (file: string, rank: string) => {
    const square = `${file}${rank}`;
    const isLight = (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0;
    
    let classes = `chess-square ${isLight ? 'light' : 'dark'}`;
    

    
    if (feedback.show && feedback.square === square) {
      classes += feedback.correct ? ' correct' : ' incorrect';
    }
    
    return classes;
  };

  return (
    <div className="chess-board-wrapper">
      <div className="chess-board-container">
        {/* Rank labels (left side) */}
        <div className="board-labels">
          {ranks.map((rank) => (
            <div key={rank}>{rank}</div>
          ))}
        </div>
        
        {/* Chess board */}
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: (files.indexOf(file) + ranks.indexOf(rank)) * 0.02,
                    duration: 0.3 
                  }}
                />
              );
            })
          )}
        </motion.div>
        
        {/* Rank labels (right side) */}
        <div className="board-labels">
          {ranks.map((rank) => (
            <div key={rank}>{rank}</div>
          ))}
        </div>
      </div>
      
      {/* File labels (bottom) */}
      <div className="board-files">
        {files.map((file) => (
          <div key={file}>{file}</div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;