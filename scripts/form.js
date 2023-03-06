const displayController = (() => {
  document.getElementById("new-game").addEventListener("click", () => window.location.reload())

  const startBtn = document.getElementById("start")
  const inputs = document.querySelectorAll("input")
  const form = document.getElementById("form")
  const stats = document.getElementById("stats")
  const board = document.getElementById("board")
  let players = new Array;

  function extractPlayerInfo(input) {
    const sign = input.nextElementSibling.textContent
    const color = input.nextElementSibling.classList[0]
    let player = { name: input.value, mark: { value: sign, color: color } }

    players.push(player)
  }

  function setGame() {
    inputs.forEach(extractPlayerInfo);
    board.style.visibility = "visible"
    stats.style.visibility = "visible"
    form.remove()
    ticTacToe = gameAPI(players)
    game().updateStats()
    restart.addEventListener("click", () => game().restart())
  }



  startBtn.addEventListener("click", setGame)
})()
