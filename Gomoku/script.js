let activePlayer = true;
const cells = document.querySelectorAll(".empty");
const namePlayer1 = document.querySelector(".player-name--1");
const namePlayer2 = document.querySelector(".player-name--2");
const activeCell = document.querySelector(".menu__hover-cell");
const log = document.querySelector(".log__history");
const exitBtn = document.querySelector(".menu__exit");
const alfabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
];

let mapa = [];

for (let i = 0; i < 15; i++) {
  mapa[i] = [];
}
for (let i = 0; i < 15; i++) {
  for (let j = 1; j <= 15; j++) {
    mapa[i][j - 1] = alfabet[i] + j;
  }
}

function addSymbol(player, koordy) {
  let stringKoordy = koordy.toString();
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (mapa[i][j] === stringKoordy) {
        mapa[i][j] = player;
      }
    }
  }
}
function whoWin(player) {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i][j + 1] === player &&
        mapa[i][j + 2] === player &&
        mapa[i][j + 3] === player &&
        mapa[i][j + 4] === player
      ) {
        alert(player + " won!");
        location.reload();
      }
    }
  }

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i + 1][j] === player &&
        mapa[i + 2][j] === player &&
        mapa[i + 3][j] === player &&
        mapa[i + 4][j] === player
      ) {
        alert(player + " won!");
        location.reload();
      }
    }
  }

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i + 1][j + 1] === player &&
        mapa[i + 2][j + 2] === player &&
        mapa[i + 3][j + 3] === player &&
        mapa[i + 4][j + 4] === player
      ) {
        alert(player + " won!");
        location.reload();
      }
    }
  }

  for (let i = 4; i < 15; i++) {
    for (let j = 0; j < 11; j++) {
      if (
        mapa[i][j] === player &&
        mapa[i - 1][j + 1] === player &&
        mapa[i - 2][j + 2] === player &&
        mapa[i - 3][j + 3] === player &&
        mapa[i - 4][j + 4] === player
      ) {
        alert(player + " won!");
        location.reload();
      }
    }
  }
}

//EXIT BUTTON ---------------------------------------------------------

exitBtn.addEventListener("click", function () {
  location.reload();
});

// DODAWANIE O i X ----------------------------------------------------
// ZMIANA AKTYWNEGO GRACZA---------------------------------------------
cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      if (activePlayer) {
        cell.classList.add("x");
        namePlayer2.classList.add("active");
        namePlayer1.classList.remove("active");
        addSymbol("x", cell.id);
        whoWin("x");
      }
      if (!activePlayer) {
        cell.classList.add("o");
        namePlayer1.classList.add("active");
        namePlayer2.classList.remove("active");
        addSymbol("o", cell.id);
        whoWin("o");
      }
      activePlayer = !activePlayer;
      cell.classList.remove("empty");

      log.innerHTML =
        log.innerHTML +
        "<br>" +
        (activePlayer
          ? "#" + cell.id.toUpperCase() + " Czesław"
          : "#" + cell.id.toUpperCase() + " Henio");
      log.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });
  // DODAWANIE cienia O i X ----------------------------------------------------
  cell.addEventListener("mouseenter", function () {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      if (activePlayer) {
        cell.classList.add("x-shadow");
      }
      if (!activePlayer) {
        cell.classList.add("o-shadow");
      }
    }
    activeCell.innerHTML = "#" + cell.id.toUpperCase();
  });
  // USUWANIE cienia O i X ----------------------------------------------------
  cell.addEventListener("mouseleave", function () {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      if (activePlayer) {
        cell.classList.remove("x-shadow");
      }
      if (!activePlayer) {
        cell.classList.remove("o-shadow");
      }
    }
    activeCell.innerHTML = "#";
  });
});
