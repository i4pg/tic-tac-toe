const prepareGame = (() => {
  let players = new Array;
  let computer;

  function addPlayerDetailsToArr(name, sign, color) {
    let player = {
      name: name,
      mark: {
        value: sign,
        color: color
      }
    }

    players.push(player)
  }

  function addComputerDetailsToArr(sign, color) {
    computer = {
      mark: {
        value: sign,
        color: color
      }
    }
  }

  function extractPlayerInfo(input) {
    const sign = input.nextElementSibling.textContent
    const color = input.nextElementSibling.classList[0]

    if (input.value) {
      addPlayerDetailsToArr(input.value, sign, color)
    } else {
      addComputerDetailsToArr(sign, color)
    }
  }

  // link DOM elements to API
  (function linkBoardToAPI() {
    document.querySelectorAll("tr")
      .forEach((row, index) => {
        [...row.children]
          .forEach((cell, i) => {
            cell.onclick = () => {
              gameEngine().assign(cell, index, i)
            }
          });
      });
  })()

  function formValidation(inputs) {
    return [...inputs].some((input) => {
      return input.value
    })
  }

  function setGame(e) {
    const inputs = document.querySelectorAll("input")

    if (!formValidation(inputs)) {
      e.preventDefault()

      Array.from(inputs).forEach(input => {
        klass = "is-danger"

        input.classList.toggle(klass)
        input.parentElement.nextElementSibling.textContent = `At least write one name`
      });

      return
    }

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

  function singleOrMultiPlayer() {
    if (computers.length === 1
      && players.length === 1) {
      cp = Computer(computer)

    }
  }

  (function addGameButtons() {
    const newGame = document.getElementById("new-game")
    const restart = document.getElementById("restart")
    const start = document.getElementById("start")

    newGame.addEventListener("click", () => window.location.reload())
    restart.addEventListener("click", () => gameEngine().restart())
    start.addEventListener("click", e => setGame(e))
  })()
})()
