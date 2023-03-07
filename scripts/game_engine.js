const gameEngine = () => {
  // this is the flash message to congrats the players
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

  function insertFlash(player = undefined) {
    player
      ? middle.insertAdjacentHTML("afterbegin", message("Yay!", player))
      : middle.insertAdjacentHTML("afterbegin", message("Draw!"))
  }

  function newRound(player = undefined) {
    insertFlash(player ? player : "")
    flash.addEventListener("click", () => flash.remove())
    restart()
    updateStats()
  }

  function checkGameStatus(currentPlayer) {
    if (ticTacToe.isWin()) {
      currentPlayer.score++
      newRound(currentPlayer)
    } else if (ticTacToe.isDraw()) {
      newRound()
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
