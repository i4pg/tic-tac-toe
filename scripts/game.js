const gameAPI = (players) => {
  let playerOne = player(players[0].name, players[0].mark)
  let playerTwo = player(players[1].name, players[1].mark)
  let gameBoard = board()

  function isDraw() {
    return gameBoard.rows.every(cell => /a/.test(cell))
  }

  function win() {
    return gameBoard.rows.some(row => { row[0] === row[1] === row[2] })
      || gameBoard.rows[0].some((cell, i) => {
        cell === gameBoard.rows[1][i]
          && cell === gameBoard.rows[2][i]
      })
  }
  return { playerTwo, playerOne, board, isDraw, win }
}
