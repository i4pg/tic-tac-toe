let players;

const getPlayers = (() => {
  const $startBtn = document.getElementById("start")
  players = new Array

  $startBtn.addEventListener("click", () => {
    $inputs = document.querySelectorAll("input")
    $inputs.forEach(input => {
      let $mark = input.nextElementSibling.firstElementChild
      let p = player(input.value, $mark)
      players.push(p)
    });

    function toggleElements() {
      const $form = document.getElementById("form")
      const $stats = document.getElementById("stats")
      const $board = document.getElementById("board")
      $board.style.visibility = "visible"
      $stats.style.visibility = "visible"
      $form.remove()
    }

    toggleElements()
  }
  )
})()
