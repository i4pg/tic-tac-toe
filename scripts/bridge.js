// link DOM elements to API
(function linkBoardToAPI() {
  document.querySelectorAll("tr")
    .forEach((row, index) => {
      [...row.children]
        .forEach((cell, i) => {
          cell.onclick = () => game().assign(cell, index, i)
        });
    });
})()

