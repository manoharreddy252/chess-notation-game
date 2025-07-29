import random
import json

class ChessNotationGenerator:
    def __init__(self):
        self.files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        self.ranks = ['1', '2', '3', '4', '5', '6', '7', '8']
        self.pieces = {
            'K': 'King',
            'Q': 'Queen', 
            'R': 'Rook',
            'B': 'Bishop',
            'N': 'Knight',
            '': 'Pawn'
        }
        
    def generate_square(self):
        """Generate a random chess square"""
        file = random.choice(self.files)
        rank = random.choice(self.ranks)
        return f"{file}{rank}"
    
    def generate_move(self):
        """Generate a random chess move in algebraic notation"""
        move_types = [
            self._generate_piece_move,
            self._generate_pawn_move,
            self._generate_capture,
            self._generate_castling,
            self._generate_promotion
        ]
        
        move_generator = random.choice(move_types)
        return move_generator()
    
    def _generate_piece_move(self):
        """Generate a piece move like Nf3, Bd5"""
        piece = random.choice(['K', 'Q', 'R', 'B', 'N'])
        square = self.generate_square()
        
        # Sometimes add disambiguation
        if random.random() < 0.3:
            disambig = random.choice(self.files + self.ranks)
            notation = f"{piece}{disambig}{square}"
        else:
            notation = f"{piece}{square}"
            
        return {
            'notation': notation,
            'square': square,
            'piece': self.pieces[piece],
            'type': 'move'
        }
    
    def _generate_pawn_move(self):
        """Generate pawn moves like e4, d5"""
        square = self.generate_square()
        return {
            'notation': square,
            'square': square,
            'piece': 'Pawn',
            'type': 'move'
        }
    
    def _generate_capture(self):
        """Generate captures like Nxf7, exd5"""
        if random.random() < 0.5:
            # Piece capture
            piece = random.choice(['K', 'Q', 'R', 'B', 'N'])
            square = self.generate_square()
            notation = f"{piece}x{square}"
        else:
            # Pawn capture
            file1 = random.choice(self.files)
            square = self.generate_square()
            notation = f"{file1}x{square}"
            
        return {
            'notation': notation,
            'square': square.replace('x', ''),
            'piece': self.pieces.get(notation[0] if notation[0].isupper() else '', 'Pawn'),
            'type': 'capture'
        }
    
    def _generate_castling(self):
        """Generate castling moves"""
        castling = random.choice(['O-O', 'O-O-O'])
        return {
            'notation': castling,
            'square': 'g1' if castling == 'O-O' else 'c1',
            'piece': 'King',
            'type': 'castling'
        }
    
    def _generate_promotion(self):
        """Generate pawn promotion like e8=Q"""
        file = random.choice(self.files)
        rank = random.choice(['1', '8'])
        piece = random.choice(['Q', 'R', 'B', 'N'])
        notation = f"{file}{rank}={piece}"
        
        return {
            'notation': notation,
            'square': f"{file}{rank}",
            'piece': 'Pawn',
            'type': 'promotion'
        }
    
    def generate_game_data(self, count=100):
        """Generate game data for the frontend"""
        moves = []
        for _ in range(count):
            move = self.generate_move()
            moves.append(move)
        
        return {
            'moves': moves,
            'squares': [f"{f}{r}" for f in self.files for r in self.ranks]
        }

if __name__ == "__main__":
    generator = ChessNotationGenerator()
    game_data = generator.generate_game_data()
    
    with open('chess_data.json', 'w') as f:
        json.dump(game_data, f, indent=2)
    
    print("Chess notation data generated successfully!")