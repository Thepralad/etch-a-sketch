let grids = [];
const container = document.querySelector('#container');
const btn16 = document.querySelector('#one');
const btn32 = document.querySelector('#two');
const btn64 = document.querySelector('#three');

createGrid(16);
btn16.addEventListener('click', () => {
    alert(btn16.id);
    createGrid(16); 
});

btn32.addEventListener('click', () => {
    alert(btn32.id);
    createGrid(32); 
});

btn64.addEventListener('click', () => {
    alert(btn64.id);
    createGrid(64); 
});

function createGrid(gridSize){
    const cellSize = 512 / gridSize; // Assuming the container width is 512px

    container.innerHTML = '';
    for(let i = 0; i < gridSize*gridSize; i++){
        grids.push(document.createElement('div'));
        grids[i].classList.add('grid');
        grids[i].style.width = `${cellSize}px`;
        grids[i].style.height = `${cellSize}px`; 
        container.appendChild(grids[i]);
    }
}
