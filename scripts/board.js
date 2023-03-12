const Board = () => {
  let rows = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]

  function reset() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rows[i][j] = "_"
      }
    }
  }

  function flatten() {
    return rows.flat()
  }

  function assign(row, column, value) {
    if (rows[row][column] !== "_") return

    rows[row][column] = value
  }

  return { rows, reset, assign, flatten }
};
