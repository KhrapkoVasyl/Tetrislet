import Board from './board.js';

const gameBoard = new Board();
gameBoard.showState();
gameBoard.refill(4);
gameBoard.drawBoard();
gameBoard.showState();
