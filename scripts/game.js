const game = () => {

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

  function reset() {
    ticTacToe.board.reset()
    resetDOMBoard()
  }

  function updateStats() {
    // Already initialized in game API as instances of Player
    let players = [ticTacToe.playerOne, ticTacToe.playerTwo]

    Array.from(stats.children).forEach((child, i) => {
      let p = players[i]

      child.firstElementChild.textContent = p.name
      child.firstElementChild.className = p.mark.color
      child.children[1].textContent = p.score
      child.children[1].className = p.mark.color
    })
  }

  function gameStatus(currentPlayer) {
    if (ticTacToe.win()) {
      currentPlayer.score++
      updateStats()
      clear()
    } else if (ticTacToe.isDraw()) {
      clear()
    }
  }

  function assign(cell, index, i) {
    if (ticTacToe.board.rows[index][i] !== "_") return
    let currentPlayer = ticTacToe.currentPlayer()
    let value = currentPlayer.mark.value
    let color = currentPlayer.mark.color

    ticTacToe.board.assign(index, i, currentPlayer)
    cell.textContent = value
    cell.className = color
    gameStatus(currentPlayer)
  }

  return { assign, reset, updateStats }
}
