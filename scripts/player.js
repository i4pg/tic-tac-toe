const Player = (name, mark) => {
  let score = 0
  name = name || "Computer"

  return { name, mark, score }
}
