# Chess Notation Guessing Game 🏆

A stunning, responsive chess notation guessing game built with React, TypeScript, and Python. Test your chess knowledge by identifying squares from algebraic notation in 30 seconds!

## 🎮 Live Demo

**Play Now:** https://manoharreddy252.github.io/chess-notation-game

## ✨ Features

### 🎯 **Game Mechanics**
- **30-second timer** for intense gameplay
- **Real-time scoring** with streak bonuses
- **Performance levels** from Beginner to Grandmaster
- **Accuracy tracking** and statistics

### 🎨 **Stunning UI/UX**
- **Responsive design** for all devices
- **Smooth animations** with Framer Motion
- **Particle background** effects
- **Glass morphism** design elements
- **Chess-themed color scheme**

### 🧠 **Chess Features**
- **Algebraic notation** support
- **All piece types** (King, Queen, Rook, Bishop, Knight, Pawn)
- **Special moves** (castling, captures, promotions)
- **Move disambiguation** for advanced notation

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Framer Motion** for animations
- **Lucide React** for icons
- **Custom CSS** with chess theme
- **Responsive design**

### Backend
- **Python 3** for data generation
- **JSON data** for chess moves
- **Algorithmic notation** parsing

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- Python 3.7+
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/manoharreddy252/chess-notation-game.git
cd chess-notation-game
```

2. **Generate chess data**
```bash
cd backend
python3 chess_generator.py
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Start development server**
```bash
npm start
```

5. **Build for production**
```bash
npm run build
```

6. **Deploy to GitHub Pages**
```bash
npm run deploy
```

## 🎯 How to Play

1. **Start the game** by clicking "Start Game"
2. **Read the chess notation** displayed (e.g., "Nf3", "e4", "O-O")
3. **Click the correct square** on the chess board
4. **Score points** for correct answers (10 points, 15 with streak)
5. **Build streaks** for bonus points
6. **Beat the 30-second timer** and achieve Grandmaster level!

## 🏆 Performance Levels

- **👑 Grandmaster** - 90%+ accuracy
- **🏆 Master** - 80%+ accuracy  
- **⭐ Expert** - 70%+ accuracy
- **📈 Advanced** - 60%+ accuracy
- **🌱 Beginner** - Below 60%

## 📱 Responsive Design

- **Mobile-first** approach
- **Touch-friendly** chess board
- **Adaptive layouts** for all screen sizes
- **Optimized animations** for performance

## 🎨 Design Features

- **Chess board** with proper light/dark squares
- **Hover effects** and click animations
- **Real-time feedback** with color coding
- **Particle background** animation
- **Glass morphism** UI elements
- **Gradient text** effects

## 🔧 Development

### Project Structure
```
chess-notation-game/
├── backend/
│   ├── chess_generator.py    # Python data generator
│   └── chess_data.json      # Generated chess moves
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Utility functions
│   └── public/             # Static assets
└── README.md
```

### Key Components
- **ChessBoard** - Interactive 8x8 chess board
- **GameStats** - Real-time statistics display
- **GameOver** - Results and performance analysis
- **ParticleBackground** - Animated background effects

## 🚀 Deployment

The game is automatically deployed to GitHub Pages using:
```bash
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Chess notation standards
- React and TypeScript communities
- Framer Motion for animations
- Lucide for beautiful icons

---

**Built with ❤️ by Manohar Reddy**

🎯 **Challenge yourself and become a Chess Notation Grandmaster!**