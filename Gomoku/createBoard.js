export const BOARD_SIZE = 15;

export const X_INDEXES = [];

for (let i = 1; i <= BOARD_SIZE; i++) {
  X_INDEXES.push(i);
}

export const Y_INDEXES = [
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

export const createBoard = () => {
  const mapRootEl = document.querySelector("#map");

  Y_INDEXES.forEach((y) => {
    X_INDEXES.forEach((x) => {
      const newCell = document.createElement("div");
      newCell.setAttribute("class", "map__cell empty");
      newCell.setAttribute("id", `${y}${x}`);

      mapRootEl.appendChild(newCell);
    });
  });
};
