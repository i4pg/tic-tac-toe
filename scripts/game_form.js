const getPlayers = (() => {
  const $startBtn = document.getElementById("start")
  const $inputs = document.querySelectorAll("input")

  $startBtn.addEventListener("click", () => {
    $inputs.forEach(input => {
      const $mark = input.nextElementSibling.firstElementChild
      const p = player(input.value, $mark)
      players.push(p)
    });

    (function toggleElements() {
      const $form = document.getElementById("form")
      const $stats = document.getElementById("stats")
      const $board = document.getElementById("board")
      $board.style.visibility = "visible"
      $stats.style.visibility = "visible"
      $form.remove()
    })()

    game()
  }
  )
})()
