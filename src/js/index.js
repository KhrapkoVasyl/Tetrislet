import Board from './board.js';
import GameEditor from './gameEditor.js';

// const gameBoard = new Board();
// gameBoard.showState();
// gameBoard.refill(4);
// gameBoard.drawBoard();

const game = new GameEditor();
console.log(game.boardState);
console.log(game.selectRandomFigure());
