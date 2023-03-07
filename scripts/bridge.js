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

