const board = () => {
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

  return { rows, reset }
};
