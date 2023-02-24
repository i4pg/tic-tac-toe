const displayController = (() => {
  const $board = document.querySelectorAll("td")

  $board.forEach((cell, i) => {
    cell.textContent = gameBoard.board[i]
  });
}
)()
