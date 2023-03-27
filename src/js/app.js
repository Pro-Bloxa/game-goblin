import { Board } from "./board";
import { Goblin } from "./goblin";

const board = new Board(4);
const goblin = new Goblin();

board.createBoard();
goblin.locateGoblin();

console.log(board);
console.log(goblin);
