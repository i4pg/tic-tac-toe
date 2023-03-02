const gameAPI = (players) => {
  let playerOne = newPlayer(players[0].name, players[0].mark)
  let playerTwo = newPlayer(players[1].name, players[1].mark)
  let board = newBoard()

  function isDraw() {
    return board.rows.every(cell => /a/.test(cell))
  }

  function win() {
    return board.rows.some(row => { row[0] === row[1] === row[2] })
      || board.rows[0].some((cell, i) => {
        cell === board.rows[1][i]
          && cell === board.rows[2][i]
      })
  }
  return { playerTwo, playerOne, board, isDraw, win }
}
