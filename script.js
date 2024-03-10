let grids = [];
let colorName = ['yellow', 'green', 'blue', 'red', 'orange', 'black', 'eraser', 'clear'];
let colorsBtn = [];
let selectedColor = 'rgb(37, 37, 37)';
let isMouseDown = false;

const container = document.querySelector('#container');
const btn16 = document.querySelector('#one');
const btn32 = document.querySelector('#two');
const btn64 = document.querySelector('#three');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');

const gridButtons = [btn16, btn32, btn64];

//Creating a initial grid of size 16x16
createGrid(64);

//Selecting all the color buttons
for(let i = 0; i < colorName.length; i++){
    colorsBtn[i] = document.querySelector('#' + colorName[i]);
}

//Adding a event listener for the the color buttons
colorsBtn.forEach((btn) => {
    btn.addEventListener('click', () =>{
        switch (btn) {
            case yellow:
                selectedColor = 'rgb(243, 243, 81)';
                break;
            case green:
                selectedColor = 'rgb(43, 132, 43)';
                break;
            case blue:
                selectedColor = 'rgb(68, 68, 210)';
                break;
            case red:
                selectedColor = 'rgb(207, 59, 59)';
                break;
            case orange:
                selectedColor = 'rgb(232, 181, 87)';
                break;
            case black:
                selectedColor = 'rgb(37, 37, 37)';
                break;
            case eraser:
                selectedColor = '#F7F6BB';
                break;
            case clear:
                grids.forEach((cell) => {
                    cell.style.backgroundColor = '#F7F6BB';
                })
                break;
        }
    })
})

//Checking the which 'gridBtn' is pressed and calling the 'createGrid' func and giving respective arg
gridButtons.forEach((btn) => {
    btn.addEventListener('click', () =>{
        switch (btn.id) {
            case 'one':
                createGrid(16);
                break;
            case 'two':
                createGrid(32);
                break;
            case 'three':
                createGrid(64);
                break;
        }
    })
})

//function that takes a int parameter and generates a grids according to the parameter(size)
function createGrid(gridSize){
    const cellSize = 512 / gridSize;
    container.innerHTML = '';

    for(let i = 0; i < gridSize*gridSize; i++){
        grids.push(document.createElement('div'));
        grids[i].classList.add('grid');
        grids[i].style.width = `${cellSize}px`;
        grids[i].style.height = `${cellSize}px`; 
        container.appendChild(grids[i]);
        grids.forEach((cell) => {
            cell.style.backgroundColor = '#F7F6BB';
        })
    }
}

grids.forEach((cell) => {
    cell.addEventListener('mousedown',() => {
        isMouseDown = true;
    });
    
    cell.addEventListener('mouseup',() => {
        isMouseDown = false;
    });
    
    cell.addEventListener('mouseenter',() => {
        if(isMouseDown) {
            cell.style.backgroundColor = selectedColor;
        }
    });
});


