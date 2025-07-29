import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { useGame } from './hooks/useGame';
import ChessBoard from './components/ChessBoard';
import GameStats from './components/GameStats';
import GameOver from './components/GameOver';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  const {
    gameState,
    feedback,
    accuracy,
    startGame,
    resetGame,
    handleSquareClick,
  } = useGame();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ParticleBackground />
      
      {/* Header */}
      <motion.header
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-4"
          style={{
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(251, 191, 36, 0.5)',
          }}
          animate={{
            textShadow: [
              '0 0 30px rgba(251, 191, 36, 0.5)',
              '0 0 50px rgba(251, 191, 36, 0.8)',
              '0 0 30px rgba(251, 191, 36, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          CHESS NOTATION
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Test your chess knowledge! Click the correct square for each notation in 30 seconds.
        </motion.p>
      </motion.header>

      {/* Game Content */}
      <div className="w-full max-w-4xl mx-auto">
        {!gameState.gameActive && !gameState.gameOver && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="glass p-8 mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Info size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">How to Play</h3>
              </div>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• Click the square that matches the chess notation</li>
                <li>• You have 30 seconds to score as many points as possible</li>
                <li>• Correct answers: 10 points (15 with 5+ streak)</li>
                <li>• Build streaks for bonus points!</li>
              </ul>
            </div>
            
            <motion.button
              className="btn btn-primary text-xl px-8 py-4 flex items-center gap-3 mx-auto"
              onClick={startGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={24} />
              Start Game
            </motion.button>
          </motion.div>
        )}

        {gameState.gameActive && (
          <>
            <GameStats
              score={gameState.score}
              timeLeft={gameState.timeLeft}
              streak={gameState.streak}
              accuracy={accuracy}
              gameActive={gameState.gameActive}
            />

            {gameState.currentMove && (
              <motion.div
                className="text-center mb-6"
                key={gameState.currentMove.notation}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="glass p-6">
                  <div className="text-sm text-gray-400 mb-2">
                    Find the square for:
                  </div>
                  <div className="notation glow">
                    {gameState.currentMove.notation}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    {gameState.currentMove.piece} • {gameState.currentMove.type}
                  </div>
                </div>
              </motion.div>
            )}

            <div className="flex justify-center mb-6">
              <ChessBoard
                onSquareClick={handleSquareClick}
                feedback={feedback}
                highlightSquare={gameState.currentMove?.square}
              />
            </div>
          </>
        )}

        {gameState.gameOver && (
          <GameOver
            score={gameState.score}
            accuracy={accuracy}
            totalQuestions={gameState.totalQuestions}
            correctAnswers={gameState.correctAnswers}
            onRestart={resetGame}
          />
        )}
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-8 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p>Built with ❤️ using React, TypeScript & Framer Motion</p>
        <p className="text-sm mt-1">© 2024 Chess Notation Game</p>
      </motion.footer>
    </div>
  );
}

export default App;