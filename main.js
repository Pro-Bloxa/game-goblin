/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/board.js
class Board {
  constructor(number) {
    this.number = number;
  }
  createBoard() {
    const field = document.querySelector("#field");
    for (let i = 0; i < this.number; i += 1) {
      let tr = document.createElement("tr");
      for (let j = 0; j < this.number; j += 1) {
        let td = document.createElement("td");
        td.classList.add("cell");
        tr.appendChild(td);
      }
      field.appendChild(tr);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/goblin.js
// вариант 4
class Goblin {
  locateGoblin() {
    let cells = Array.from(document.querySelectorAll(".cell"));
    let location = Math.floor(Math.random() * cells.length);
    cells[location].classList.add("goblin");
    setInterval(this.changeCell, 1000, cells);
  }
  changeCell(cells) {
    let tdActive = document.querySelector(".goblin");
    let position = cells.indexOf(tdActive);
    let pos = Math.floor(Math.random() * cells.length);
    if (position !== pos) {
      cells[position].classList.remove("goblin");
      cells[pos].classList.add("goblin");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const board = new Board(4);
const goblin = new Goblin();
board.createBoard();
goblin.locateGoblin();
console.log(board);
console.log(goblin);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map