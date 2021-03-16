const container = document.querySelector(".container");
const rangeInput = document.querySelector("#myRange");

function createGrid(size) {
  
  const singleGrid = `<div style=filter:brightness(100%) class="grid"></div>`
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
  blackGrid();
}

function resizeGrid() {
  rangeInput.addEventListener("change", handleResize);
}

function blackGrid() {
  const allGridBoxes = document.querySelectorAll(".grid");
  for (let box of allGridBoxes) {
    box.addEventListener(("mouseover"), () => {
      box.style.backgroundColor = "#000";
    });
  }
}


// const eraser = document.querySelector('#eraser');
// const darken = document.querySelector('#darken');
// const pickColor = document.querySelector('#pick-color');
// const random = document.querySelector('#random');

let value;

function startGrid() {
  const allButtons = document.querySelectorAll(".btn");
  for (let button of allButtons) {
    button.addEventListener("click", (event) => {
      value = event.target.textContent;
      const allGridBoxes = document.querySelectorAll(".grid");
      for (let box of allGridBoxes) {
        box.addEventListener(("mouseover"), () => {
          switch(value) {
            case "Eraser":
              box.style.filter = "brightness(100%)";
              box.style.backgroundColor = "#fff";
              // console.log("eraser on")
              break;
            case "Darken":
              let brightness = box.style.filter;
              box.style.filter = "brightness(0)"
              let brightnessValue = brightness.match(/[0-9]/g).join('');
              box.style.filter = `brightness(${brightnessValue - 10}%)`;
              // console.log("darken on")
              break;
            case "Random":
              box.style.filter = "brightness(100%)";
              let randomColor = Math.floor(Math.random()*16777215).toString(16);
              box.style.backgroundColor = `#${randomColor}`;
              // console.log("random on")
              break;
          }
        });
      }
    })
  }
}

// function handleRandom() {
//   const allGridBoxes = document.querySelectorAll(".grid");
//   for (let box of allGridBoxes) {
//     box.addEventListener(("mouseover"), () => {
//       let randomColor = Math.floor(Math.random()*16777215).toString(16);
//       box.style.backgroundColor = `#${randomColor}`;
//     });
//   }
// }

// function handleErase() {
//   const allGridBoxes = document.querySelectorAll(".grid");
//     for (let box of allGridBoxes) {
//       box.addEventListener(("mouseover"), () => {
//         box.style.backgroundColor = "#fff";
//       })
//     }
// }

// function handleDarken() {
//   const allGridBoxes = document.querySelectorAll(".grid");
//   for (let box of allGridBoxes) {
//     box.addEventListener(("mouseover"), () => {
//       let brightness = box.style.filter;
//       if (brightness) {
//         let brightnessValue = brightness.match(/[0-9]/g).join('');
//         box.style.filter = `brightness(${brightnessValue - 10}%)`;
//       } else {
//         box.style.filter = "brightness(90)";
//       }
//     })
//   }
// }

// function colorGrid() {
//   random.addEventListener(("click"), handleRandom);
// }

// function eraseGrid() {
//   eraser.addEventListener(("click"), handleErase);
// }

// function darkenGrid() {
//   darken.addEventListener(("click"), handleDarken);
// }


function main() {
  createGrid(16);
  resizeGrid();
  // blackGrid();

  startGrid()

  // colorGrid();
  // eraseGrid();
  // darkenGrid();
}

window.addEventListener('DOMContentLoaded', main);