import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Clock } from 'lucide-react';

interface GameStatsProps {
  score: number;
  timeLeft: number;
  streak: number;
  accuracy: number;
  gameActive: boolean;
}

const GameStats: React.FC<GameStatsProps> = ({
  score,
  timeLeft,
  streak,
  accuracy,
  gameActive,
}) => {
  const stats = [
    {
      icon: Trophy,
      label: 'Score',
      value: score,
      color: '#fbbf24',
    },
    {
      icon: Clock,
      label: 'Time',
      value: `${timeLeft}s`,
      color: timeLeft <= 10 ? '#ef4444' : '#10b981',
    },
    {
      icon: Zap,
      label: 'Streak',
      value: streak,
      color: '#8b5cf6',
    },
    {
      icon: Target,
      label: 'Accuracy',
      value: `${accuracy}%`,
      color: '#06b6d4',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="glass p-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <stat.icon
            size={24}
            style={{ color: stat.color }}
            className="mx-auto mb-2"
          />
          <div
            className="text-2xl font-bold mb-1"
            style={{ color: stat.color }}
          >
            {stat.value}
          </div>
          <div className="text-sm text-gray-300">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default GameStats;