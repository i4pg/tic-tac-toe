const gameAPI = (players) => {
  let playerOne = newPlayer(players[0].name, players[0].mark)
  let playerTwo = newPlayer(players[1].name, players[1].mark)
  let current = playerOne
  let board = newBoard()
  let parent = this

  function resetBoard() {
    parent.board = newBoard()
  }

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

  function win() {
    return board.rows.some(row => {
      return row[0] === row[1]
        && row[0] === row[2]
        && row[0] !== "_"
    })
      || board.rows[0].some((cell, i) => {
        return cell === board.rows[1][i]
          && cell === board.rows[2][i]
          && cell !== "_"
      })
      || board.rows[1][1] !== "_"
      && (board.rows[1][1] === board.rows[0][0]
        && board.rows[1][1] === board.rows[2][2])
      || (board.rows[1][1] === board.rows[0][2]
        && board.rows[1][1] === board.rows[2][0])
      || false
  }

  return { resetBoard, playerTwo, playerOne, currentPlayer, board, isDraw, win }
}
