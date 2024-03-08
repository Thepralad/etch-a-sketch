let grids = [];
let colorName = ['yellow', 'green', 'blue', 'red', 'orange', 'black'];
let colorsBtn = [];
let selectedColor = 'rgb(220, 220, 220)';

const container = document.querySelector('#container');
const btn16 = document.querySelector('#one');
const btn32 = document.querySelector('#two');
const btn64 = document.querySelector('#three');

const gridButtons = [btn16, btn32, btn64];

//Creating a initial grid of size 16x16
createGrid(16);

//Selecting all the color buttons
for(let i = 0; i < colorName.length; i++){
    colorsBtn[i] = document.querySelector('#' + colorName[i]);
}

//Adding a event listener for the the color buttons
colorsBtn.forEach((btn) => {
    btn.addEventListener('click', () =>{
        alert(btn.id);
    })
})

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
    }
}


