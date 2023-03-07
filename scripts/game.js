const game = () => {
  function message(status, player = undefined) {
    return `
<div id="flash" class="notification is-12 column is-${player ? player.mark.color.split("-")[2] : ""}">
  <button class="delete"></button>
${player ?
        `
  <strong>${player.name}</strong> congratulations for the winning and face the tough time
`
        :
        `
<strong>${status}</strong>
`
      }
</div>`
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
    const players = [ticTacToe.playerOne, ticTacToe.playerTwo]
    const l = document.getElementById("stats-left")
    const r = document.getElementById("stats-right")
    let states = [l, r]

    states.forEach((state, i) => {
      const player = players[i]

      state.firstElementChild.textContent = player.name
      state.firstElementChild.className = player.mark.color
      state.lastElementChild.textContent = player.score
      state.lastElementChild.className = player.mark.color
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

  function updateTimer() {
    currentPlayer = ticTacToe.currentPlayer()
    const timer = document.getElementById("timer")
    const header = timer.firstElementChild
    const bar = timer.lastElementChild
    let color = currentPlayer.mark.color
    let name = currentPlayer.name

    header.textContent = name + "'s turn"
    header.className = color
    bar.className = `is-${color.split("-")[2]} progress`
    ticTacToe.currentPlayer()
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
    updateTimer()
  }

  return { assign, restart, updateStats, updateTimer }
}
