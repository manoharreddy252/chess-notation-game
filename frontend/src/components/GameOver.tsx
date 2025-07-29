import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, Share2 } from 'lucide-react';

interface GameOverProps {
  score: number;
  accuracy: number;
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({
  score,
  accuracy,
  totalQuestions,
  correctAnswers,
  onRestart,
}) => {
  const getPerformanceLevel = () => {
    if (accuracy >= 90) return { level: 'Grandmaster', color: '#fbbf24', emoji: '👑' };
    if (accuracy >= 80) return { level: 'Master', color: '#8b5cf6', emoji: '🏆' };
    if (accuracy >= 70) return { level: 'Expert', color: '#06b6d4', emoji: '⭐' };
    if (accuracy >= 60) return { level: 'Advanced', color: '#10b981', emoji: '📈' };
    return { level: 'Beginner', color: '#6b7280', emoji: '🌱' };
  };

  const performance = getPerformanceLevel();

  const handleShare = () => {
    const text = `I scored ${score} points with ${accuracy}% accuracy in Chess Notation Game! 🏆 Can you beat my score?`;
    if (navigator.share) {
      navigator.share({
        title: 'Chess Notation Game Score',
        text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text + ' ' + window.location.href);
    }
  };

  return (
    <motion.div
      className="game-over glass p-8 max-w-md mx-auto"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="text-6xl mb-4"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {performance.emoji}
      </motion.div>
      
      <h2 className="text-3xl font-bold mb-2" style={{ color: performance.color }}>
        {performance.level}!
      </h2>
      
      <div className="final-score">{score}</div>
      
      <div className="grid grid-cols-2 gap-4 mb-6 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-400">{accuracy}%</div>
          <div className="text-sm text-gray-300">Accuracy</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-400">
            {correctAnswers}/{totalQuestions}
          </div>
          <div className="text-sm text-gray-300">Correct</div>
        </div>
      </div>
      
      <div className="flex gap-3">
        <motion.button
          className="btn btn-primary flex-1 flex items-center justify-center gap-2"
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw size={20} />
          Play Again
        </motion.button>
        
        <motion.button
          className="btn btn-success flex items-center justify-center"
          onClick={handleShare}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameOver;