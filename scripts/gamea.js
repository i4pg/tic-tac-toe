const game = (i) => {
  let board = gameBoard.board
  let cell = gameBoard.board[i]
  if (cell.textContent.match(/[XO]/)) {
    return
  }

  currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne

  console.log(currentPlayer)
  cell.textContent = currentPlayer.mark
  cell.className = currentPlayer.color

  console.log(isDraw())
}

function isDraw() {
  const board = document.querySelectorAll("td")
  boardArr = Array.from(board)
  a = boardArr.every(element => {
    element.textContent.match(/_/)
  });
  console.log(a)
}
