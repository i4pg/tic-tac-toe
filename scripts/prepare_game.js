const prepareGame = (() => {
  let players = new Array;

  function extractPlayerInfo(input) {
    const sign = input.nextElementSibling.textContent
    const color = input.nextElementSibling.classList[0]
    let player = {
      name: input.value,
      mark: {
        value: sign,
        color: color
      }
    }

    players.push(player)
  }

  function setGame() {
    const inputs = document.querySelectorAll("input")
    const statsLeft = document.getElementById("stats-left")
    const statsRight = document.getElementById("stats-right")
    const timer = document.getElementById("timer")
    const form = document.getElementById("form")

    inputs.forEach(extractPlayerInfo);
    [board, statsLeft, statsRight, restart, timer]
      .forEach(
        element => element.style.visibility = "visible"
      )

    form.remove()
    ticTacToe = gameAPI(players)

    gameEngine().updateStats()
    gameEngine().updateTimer()
  }

  (function addGameButtons() {
    const newGame = document.getElementById("new-game")
    const restart = document.getElementById("restart")
    const start = document.getElementById("start")

    newGame.addEventListener("click", () => window.location.reload())
    restart.addEventListener("click", () => gameEngine().restart())
    start.addEventListener("click", setGame)
  })()
})()
