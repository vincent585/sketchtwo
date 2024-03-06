const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");
const resizeBtn = document.querySelector(".resize-btn");

window.addEventListener("load", fillGrid());
resizeBtn.addEventListener("click", resizeGrid);

function fillGrid(size = 16) {
  root.style.setProperty("--grid-size", size);

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    square.addEventListener("mouseenter", colorSquare);
    gridContainer.appendChild(square);
  }
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function resizeGrid() {
  let size = parseInt(prompt("Please enter your desired grid size (max 100): ", 0));
  if (validGridSize(size)) {
    clearGrid();
    fillGrid(size);
  }
}

function validGridSize(size) {
  let valid = false;
  if (typeof size !== "number") {
    alert("I need a number!");
  } else if (size < 1) {
    alert("I can't make a grid from nothing!");
  } else if (size > 100) {
    alert("That's too many squares I'm afraid.");
  } else {
    valid = true;
  }

  return valid;
}

function colorSquare(event) {
  event.target.classList.add("filled");
}