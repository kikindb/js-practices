window.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  let $winner = document.querySelector(".winner");
  let game = [];
  let turn = "X";
  let turnCount = 0;

  const initGame = () => {
    for (let i = 0; i < 9; i++) {
      game.push("");
    }
    console.log(game);
  };

  initGame();

  const detectWinner = (turnCount) => {
    if (turnCount < 4) return;
    let winner = "";
    console.log("Start looking for winner");
    if (
      (game[0] !== "" && game[0] === game[1] && game[0] === game[2]) ||
      (game[3] !== "" && game[3] === game[4] && game[3] === game[5]) ||
      (game[6] !== "" && game[6] === game[7] && game[6] === game[8]) ||
      (game[0] !== "" && game[0] === game[3] && game[0] === game[6]) ||
      (game[1] !== "" && game[1] === game[4] && game[1] === game[7]) ||
      (game[2] !== "" && game[2] === game[5] && game[2] === game[8]) ||
      (game[0] !== "" && game[0] === game[4] && game[0] === game[8]) ||
      (game[2] !== "" && game[2] === game[4] && game[2] === game[6])
    ) {
      winner = "We have a winner, " + turn;
      board.removeEventListener("click", play);
    }
    if (turnCount >= 9) {
      winner = "Tie!";
      board.removeEventListener("click", play);
    }
    console.log(winner);
    $winner.innerHTML = winner;
  };

  function play(e) {
    let btnClicked = e.target;
    let clicked = parseInt(e.target.id);
    console.log(clicked);

    if (btnClicked.textContent === "") {
      game[clicked] = turn;
      console.log(game);
      turn = (turn === "X") ? "O" : "X";
      e.target.textContent = turn;
      turnCount++;
      detectWinner(turnCount);
    }
  }


  board.addEventListener("click", play);
});
