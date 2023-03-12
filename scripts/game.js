const game = () => {
  const players = [ticTacToe.playerOne, ticTacToe.playerTwo]

  function isComputer() {
    return ticTacToe.getCurrentPlayer().name === "Computer"
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
    boardLinkToggle(1)
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

  // link DOM elements to API
  function boardLinkToggle(toggle) {
    document.querySelectorAll("tr").forEach((row, index) => {
      [...row.children].forEach((cell, i) => {
        cell.onclick = () => {
          if (toggle) {
            game().assign(cell, index, i)
          } else {
            restart()
            flash.remove()
          }
        }
      });
    });
  }

  function newRound(player = undefined) {
    insertFlash(player ? player : "")
    flash.addEventListener("click", () => {
      flash.remove()
      restart()
    })
    boardLinkToggle(0)
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


  const computer = (() => {
    function getsValidMoves() {
      let arr = new Array
      let cellIndex = -1

      ticTacToe.board.rows.forEach((row, index) => {
        row.forEach((cell, i) => {
          cellIndex++
          cell === "_" ? arr.push([cellIndex, index, i]) : ""
        });
      });

      return arr
    }

    function getsGoodMoves(moves) {
      let goodMoves = new Array

      moves.forEach(move => {
        for (let i = 0; i < 2; i++) {
          ticTacToe.board.rows[move[1]][move[2]] = ticTacToe.getCurrentPlayer()
          if (ticTacToe.isWin()) goodMoves.push(move)
          ticTacToe.board.rows[move[1]][move[2]] = "_"
          ticTacToe.switchPlayer()
        }
      });

      return goodMoves
    }

    function makeMove() {
      const validMoves = getsValidMoves()
      const goodMoves = getsGoodMoves(validMoves)
      const move = goodMoves.length > 0 ? goodMoves[0] : validMoves[0]

      assign(...move)
    }

    return { makeMove }
  })()

  function main(currentPlayer = undefined) {
    currentPlayer ? checkGameStatus(currentPlayer) : ""
    ticTacToe.switchPlayer()
    update()
    isSinglePlayer() && isComputer() ? computer.makeMove() : ""
  }

  // this is the flash message to congrats the players, status param for win or draw, player param incase of winning
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

  return { update, assign, restart, updateStats, updateTimer, boardLinkToggle }
}
