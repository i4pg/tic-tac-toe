const game = () => {
  function message(status, player = undefined) {
    return `
<article id="flash" class="is-12 column message is-${player ? player.mark.color.split("-")[2] : ""}">
  ${player ?
        `
  <div class="message-header">
    <p>${status}</p>
  </div>`
        : ""}
${player ?
        `
  <div class="message-body">
<strong>${player.name}</strong> congratulations for the winning and face the tough time
  </div>
</article>`
        :
        `<div class="message-body">
${status}
  </div>
</article>`
      }
`
  }

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

  function restart() {
    ticTacToe.board.reset()
    resetDOMBoard()
  }

  function updateStats() {
    Array.from(stats.children).forEach((child, i) => {
      let ps = [ticTacToe.playerOne, ticTacToe.playerTwo]
      let p = ps[i]

      child.firstElementChild.textContent = p.name
      child.firstElementChild.className = p.mark.color
      child.children[1].textContent = p.score
      child.children[1].className = p.mark.color
    })
  }

  function checkGameStatus(currentPlayer) {
    if (ticTacToe.isWin()) {
      currentPlayer.score++
      restart()
      middle.insertAdjacentHTML("afterbegin", message("Yay!", currentPlayer))
      flash.addEventListener("click", () => flash.remove())
      updateStats()
    } else if (ticTacToe.isDraw()) {
      middle.insertAdjacentHTML("afterbegin", message("Draw!"))
      flash.addEventListener("click", () => flash.remove())
      restart()
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
    checkGameStatus(currentPlayer)
  }

  return { assign, restart, updateStats }
}
