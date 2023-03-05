const controller = (cell) => {

  function resetDOMBoard() {
    document.querySelectorAll("tr")
      .forEach((row) => {
        [...row.children]
          .forEach((cell) => {
            cell.textContent = "_"
            cell.className = ""
          });
      });
  }

  function gameStatus(currentPlayer) {
    if (newGame.win() === true) {
      console.log(newGame.board)
      console.log(currentPlayer)
      newGame.board.reset()
      resetDOMBoard()
    } else if (newGame.isDraw() === true) {
      console.log('fraw')
      newGame.board.reset()
      resetDOMBoard()
    }
  }

  function assign(index, i) {
    if (newGame.board.rows[index][i] !== "_") return
    let currentPlayer = newGame.currentPlayer()
    let value = currentPlayer.mark.value
    let color = currentPlayer.mark.color

    newGame.board.assign(index, i, currentPlayer)
    cell.textContent = value
    cell.className = color
    gameStatus(currentPlayer)
  }

  return { assign }
}
