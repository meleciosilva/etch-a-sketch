const container = document.querySelector(".container");
const resizeButton = document.querySelector("#resize");

function createGrid(size) {
  
  const singleGrid = `<div class="grid"></div>`
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i < (size * size); i++) {
    container.insertAdjacentHTML("beforeend", singleGrid);
  }
}

function handleResize() {
  const size = prompt("Select a grid size (1-64)");
  container.innerHTML = "";
  createGrid(size);
}

function resizeGrid() {
  resizeButton.addEventListener("click", handleResize);
}


createGrid(16);
resizeGrid();