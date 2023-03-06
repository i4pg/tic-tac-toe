const gameAPI = (players) => {
  let playerOne = newPlayer(players[0].name, players[0].mark)
  let playerTwo = newPlayer(players[1].name, players[1].mark)
  let current = playerOne
  let board = newBoard()

  function currentPlayer() {
    return current = current === playerOne ? playerTwo : playerOne
  }

  function isDraw() {
    return board.rows.every(row => {
      return row.every(cell => {
        return typeof cell === "object"
      })
    })
  }

  function isWin() {

    function horizontal() {
      return board.rows.some(row => {
        return row[0] === row[1]
          && row[0] === row[2]
          && row[0] !== "_"
      })
    }

    function vertical() {
      return board.rows[0].some((cell, i) => {
        return cell === board.rows[1][i]
          && cell === board.rows[2][i]
          && cell !== "_"
      })
    }

    function diagnosal1() {
      return board.rows[1][1] !== "_"
        && board.rows[1][1] === board.rows[0][0]
        && board.rows[1][1] === board.rows[2][2]
    }

    function diagnosal2() {
      return board.rows[1][1] !== "_"
        && board.rows[1][1] === board.rows[0][2]
        && board.rows[1][1] === board.rows[2][0]
    }

    if (horizontal()
      || vertical()
      || diagnosal1()
      || diagnosal2()) {
      return true
    }
  }

  return { playerTwo, playerOne, currentPlayer, board, isDraw, isWin }
}
