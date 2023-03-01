const ticTacToe = (() => {
  const startBtn = document.getElementById("start")
  const inputs = document.querySelectorAll("input")
  const form = document.getElementById("form")
  const stats = document.getElementById("stats")
  const board = document.getElementById("board")
  let players = new Array;

  function game() {
    return gameAPI(players)
  }

  function extractNewPlayer(input) {
    const sign = input.nextElementSibling.textContent
    const color = input.nextElementSibling.classList[0]
    let player = { name: input.value, mark: { value: sign, color: color } }

    players.push(player)
  }

  // link DOM elements to API
  function linkBoardToAPI() {
    document.querySelectorAll("tr")
      .forEach((row, index) => {
        [...row.children].forEach((cell, i) => {
          cell.onclick = () => console.log(index, i)
        });
      });
  }

  function setGame() {
    inputs.forEach(input => extractNewPlayer(input));
    board.style.visibility = "visible"
    stats.style.visibility = "visible"
    form.remove()
    linkBoardToAPI()
  }

  startBtn.addEventListener("click", setGame)
  return { game }
})()
