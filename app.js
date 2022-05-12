const reset = document.querySelector('#reset')
defaultGrid();


function generateGrid(size) {
    const container = document.querySelector('#container')
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`

    let gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        let myDivs = document.createElement("div");
        myDivs.style.border = 'thin solid blue'
        myDivs.innerHTML = i;
        container.appendChild(myDivs);
        // adds event to change background of divs when moused over
        myDivs.addEventListener("mouseover", function () {
            myDivs.style.backgroundColor = 'green';
        });
        // resets grid when button is clicked
        reset.addEventListener('click', function () {
            myDivs.style.backgroundColor = 'white';
        })

    }

}


//refresh 
function newSize(input) {
    generateGrid(input);

}

function defaultGrid() {
    generateGrid(16);
}

function changeGridSize(){
    let input = prompt('how big would you like the new grid?')
    if (input > 100 || input <16){
        defaultGrid();
        alert('grid cannot be less than 16 or greater than 100')
    } else{
        newSize(input)
    }
}