const reset = document.querySelector('#reset')
generateGrid(4);

function generateGrid(size) {
    const container = document.querySelector('#container')
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`

    let gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        let myDivs = document.createElement("div");
        myDivs.innerHTML = i;
        myDivs.style.border = 'thin solid blue'
        container.appendChild(myDivs);
        // adds event to change background of divs when moused over
        myDivs.addEventListener("mouseover", function () {
            myDivs.style.backgroundColor = 'green';
        });

        // resets grid 
        reset.addEventListener('click', function () {
            myDivs.style.backgroundColor = 'white';
            // let gridSize = prompt('Please enter new grid size');
        })

    }

}

function changeGridSize(input) {
    generateGrid(input);
}

