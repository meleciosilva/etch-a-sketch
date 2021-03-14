const container = document.querySelector(".container");
const rangeInput = document.querySelector("#myRange");

function createGrid(size) {
  
  const singleGrid = `<div class="grid"></div>`
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  for (let i = 0; i < (size * size); i++) {
    container.insertAdjacentHTML("beforeend", singleGrid);
  }
}

function handleResize() {
  const size = rangeInput.value;
  container.innerHTML = "";
  createGrid(size);
  colorGrid();
}

function resizeGrid() {
  rangeInput.addEventListener("change", handleResize);
}

function colorGrid() {
  const allGridBoxes = document.querySelectorAll(".grid");
  for (let box of allGridBoxes) {
    box.addEventListener(("mouseover"), () => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      box.style.backgroundColor = `#${randomColor}`;
    });
  }
}

const eraser = document.querySelector('#eraser');
const darken = document.querySelector('#darken');
const pickColor = document.querySelector('#pick-color');
const random = document.querySelector('#random');

function handleEraser() {
  eraser.addEventListener(("click"), () => {
    const allGridBoxes = document.querySelectorAll(".grid");
    for (let box of allGridBoxes) {
      box.addEventListener(("mouseover"), () => {
        box.style.backgroundColor = "#fff";
      })
    }
  })
}

function handleRandom() {
  random.addEventListener(("click"), colorGrid);
}


function main() {
  createGrid(16);
  resizeGrid();
  colorGrid();
  handleEraser();
  handleRandom();
}

window.addEventListener('DOMContentLoaded', main);