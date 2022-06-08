const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let size = DEFAULT_SIZE;
let mode = DEFAULT_MODE;
let color = DEFAULT_COLOR;

const grid = document.querySelector(".grid-container");



function createGrid(size) {
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.cssText += "border: 2px solid black;"
    for(i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor);
        grid.appendChild(square);
    }
}

function changeColor(event) {
    if (event.type === 'mouseover' && event.type === 'mousedown') return;
    if (mode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } 
    else if (mode === 'color') {
        event.target.style.backgroundColor = color;
    } 
    else if (mode === 'eraser') {
        event.target.style.backgroundColor = '#fefefe';
    }
}

createGrid(16)