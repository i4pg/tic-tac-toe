const gameAPI = (players) => {
  let playerOne = Player(players[0].name, players[0].mark)
  let playerTwo = Player(players[1].name, players[1].mark)
  let currentPlayer = playerOne
  let board = Board()

  const getCurrentPlayer = () => currentPlayer;

  function switchPlayer() {
    return currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
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

    function diagonal1() {
      return board.rows[1][1] !== "_"
        && board.rows[1][1] === board.rows[0][0]
        && board.rows[1][1] === board.rows[2][2]
    }

    function diagonal2() {
      return board.rows[1][1] !== "_"
        && board.rows[1][1] === board.rows[0][2]
        && board.rows[1][1] === board.rows[2][0]
    }

    if (horizontal()
      || vertical()
      || diagonal1()
      || diagonal2()) {
      return true
    }
  }

  return { playerTwo, playerOne, switchPlayer, board, isDraw, isWin, getCurrentPlayer }
}
