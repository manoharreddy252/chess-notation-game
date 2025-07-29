import { useState, useEffect, useCallback } from 'react';
import chessData from '../chess_data.json';

interface Move {
  notation: string;
  square: string;
  piece: string;
  type: string;
}

interface GameState {
  score: number;
  timeLeft: number;
  currentMove: Move | null;
  gameActive: boolean;
  gameOver: boolean;
  streak: number;
  totalQuestions: number;
  correctAnswers: number;
}

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    timeLeft: 30,
    currentMove: null,
    gameActive: false,
    gameOver: false,
    streak: 0,
    totalQuestions: 0,
    correctAnswers: 0,
  });

  const [feedback, setFeedback] = useState<{
    show: boolean;
    correct: boolean;
    square: string;
  }>({
    show: false,
    correct: false,
    square: '',
  });

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameState.gameActive && gameState.timeLeft > 0) {
      interval = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1,
        }));
      }, 1000);
    } else if (gameState.timeLeft === 0 && gameState.gameActive) {
      endGame();
    }

    return () => clearInterval(interval);
  }, [gameState.gameActive, gameState.timeLeft]);

  const getRandomMove = useCallback((): Move => {
    const moves = chessData.moves as Move[];
    return moves[Math.floor(Math.random() * moves.length)];
  }, []);

  const startGame = useCallback(() => {
    const firstMove = getRandomMove();
    setGameState({
      score: 0,
      timeLeft: 30,
      currentMove: firstMove,
      gameActive: true,
      gameOver: false,
      streak: 0,
      totalQuestions: 0,
      correctAnswers: 0,
    });
    setFeedback({ show: false, correct: false, square: '' });
  }, [getRandomMove]);

  const endGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gameActive: false,
      gameOver: true,
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      score: 0,
      timeLeft: 30,
      currentMove: null,
      gameActive: false,
      gameOver: false,
      streak: 0,
      totalQuestions: 0,
      correctAnswers: 0,
    });
    setFeedback({ show: false, correct: false, square: '' });
  }, []);

  const handleSquareClick = useCallback((square: string) => {
    if (!gameState.gameActive || !gameState.currentMove) return;

    const isCorrect = square === gameState.currentMove.square;
    const points = isCorrect ? (gameState.streak >= 5 ? 15 : 10) : 0;

    setFeedback({
      show: true,
      correct: isCorrect,
      square: square,
    });

    setGameState(prev => ({
      ...prev,
      score: prev.score + points,
      streak: isCorrect ? prev.streak + 1 : 0,
      totalQuestions: prev.totalQuestions + 1,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      currentMove: getRandomMove(),
    }));

    // Clear feedback after animation
    setTimeout(() => {
      setFeedback({ show: false, correct: false, square: '' });
    }, 1000);
  }, [gameState.gameActive, gameState.currentMove, gameState.streak, getRandomMove]);

  const accuracy = gameState.totalQuestions > 0 
    ? Math.round((gameState.correctAnswers / gameState.totalQuestions) * 100)
    : 100;

  return {
    gameState,
    feedback,
    accuracy,
    startGame,
    endGame,
    resetGame,
    handleSquareClick,
  };
};