const game = (() => {
  let currentPlayer = newGame.playerOne

  function assign(htmlCell, index, i) {
    if (newGame.board.rows[index][i] !== "_") return

    newGame.board.assign(index, i, currentPlayer.mark.value)
    htmlCell.textContent = currentPlayer.mark.value
    htmlCell.className = currentPlayer.mark.color
  }
  return { assign }
})()
