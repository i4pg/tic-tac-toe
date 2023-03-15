const Board = () => {
  let rows = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]

  // It seems there is some issue with forEach, I had to use for loop
  function reset() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rows[i][j] = "_"
      }
    }
  }

  function assign(row, column, value) {
    if (rows[row][column] !== "_") return

    rows[row][column] = value
  }

  return { rows, reset, assign }
};
