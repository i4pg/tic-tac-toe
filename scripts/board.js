const newBoard = () => {
  let parent = this
  let rows = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]

  function reset() {
    parent.rows = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ]
  }

  function assign(row, column, value) {
    if (rows[row][column] !== "_") return

    rows[row][column] = value
  }

  return { rows, reset, assign }
};
