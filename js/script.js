const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");

window.addEventListener("load", fillGrid());

function fillGrid(size = 16) {
  root.style.setProperty("--grid-size", size);

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.className = "grid-square";
    square.addEventListener("mouseenter", colorSquare);
    gridContainer.appendChild(square);
  }
}

function colorSquare(event) {
  event.target.style.backgroundColor = "black";
}