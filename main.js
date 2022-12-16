const tic = document.querySelectorAll('.cell');
const restart = document.querySelector('.btn');
const player = document.querySelector('.player')
const game = document.querySelector('.game-container');
// Winning condition 
const cell = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [3,5,7],
  [1,5,9]
]
// cells for players
const cellX = [];
const cellO = [];
let running = false;
let playerTurn = 'x';
//cecking winner
function checkWinner() {
  let won;
  let cells = (playerTurn == 'x') ? cellO : cellX;
  for(let i = 0; i < cell.length; i++) {
    won = cell[i].every(item => cells.find(item2 => item === item2))
    if(won) {
      break
    }
  }
  if (cellX.length === 5 && won === false) {
    player.textContent = 'Draw!'
  }
  if (won) {
    player.textContent = cells == cellO ? 'O Wins!' : 'X Wins!';
    // game.style.pointerEvents = 'none';
    // running = true
    running = !running
  }
}
//game starting 
  function gameStart(e) {
  if(!running) {
    if(e.target.textContent) {
      return ;
    } else {
      e.target.textContent = playerTurn
      if (playerTurn === 'x') {
        playerTurn = 'o';
        player.textContent = `O' turn`
        cellX.push(Number(e.target.getAttribute('cell-index')))
        checkWinner();
      } else {
        player.textContent = `X' turn`
        playerTurn = 'x';
        cellO.push(Number(e.target.getAttribute('cell-index')));
        checkWinner();
    }
  }
}
}
//reset button
function restartGame() {
  cellO.length = 0;
  cellX.length = 0;
  running = false;
  tic.forEach(cell => cell.textContent = '')
  playerTurn = 'x'
  player.textContent = `X's turn`;
}

tic.forEach(e => e.addEventListener('click',gameStart));
restart.addEventListener('click',restartGame);