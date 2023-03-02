const newBoard = () => {
  let rows = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]

  function reset() {
    rows = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ]
  }

  function assign(row, column, value) {
    rows[row][column] = value
  }

  return { rows, reset, assign }
};
