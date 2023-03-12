const gameEngine = () => {
  const players = [ticTacToe.playerOne, ticTacToe.playerTwo]

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

  function isSinglePlayer() {
    return players.some(player => player.name === "Computer")
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
    let p = ticTacToe.getCurrentPlayer()
    const timer = document.getElementById("timer")
    const header = timer.firstElementChild
    const bar = timer.lastElementChild
    let color = p.mark.color
    let name = p.name

    header.textContent = name + "'s turn"
    header.className = color
    bar.className = `is-${color.split("-")[2]} progress`
  }

  function assign(cell, index, i) {
    if (ticTacToe.board.rows[index][i] !== "_") return
    cell = typeof cell === "number" ? document.querySelectorAll("td")[cell] : cell

    let p = ticTacToe.getCurrentPlayer()
    let value = p.mark.value
    let color = p.mark.color

    ticTacToe.board.assign(index, i, p)
    cell.textContent = value
    cell.className = color
    main(p)
  }

  function update() {
    updateStats()
    updateTimer()
  }

  function isComputer() {
    return ticTacToe.getCurrentPlayer().name === "Computer"
  }

  function main(currentPlayer = undefined) {
    currentPlayer ? checkGameStatus(currentPlayer) : ""

    ticTacToe.switchPlayer()
    update()

    if (isSinglePlayer() && isComputer()) {
      let validMoves = []
      let goodMoves = new Array
      let boardDOMCell = -1

      ticTacToe.board.rows.forEach(
        (row, index) => {
          row.forEach(
            (cell, i) => {
              boardDOMCell++
              cell === "_"
                ? validMoves.push([boardDOMCell, index, i])
                : ""
            });
        });

      validMoves.forEach(move => {
        for (let i = 0; i < 2; i++) {
          ticTacToe.board.rows[move[1]][move[2]] = ticTacToe.getCurrentPlayer()
          if (ticTacToe.isWin()) goodMoves.push(move)
          ticTacToe.board.rows[move[1]][move[2]] = "_"
          ticTacToe.switchPlayer()
        }
      });


      if (goodMoves.length > 0) {
        console.log(...goodMoves[0])
        assign(...goodMoves[0])
      } else {
        assign(...validMoves[0])
      }
    }
  }
  return { update, assign, restart, updateStats, updateTimer }
}
