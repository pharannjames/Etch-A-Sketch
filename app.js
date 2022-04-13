const container = document.querySelector('#container')


//Generates 266 Divs elements
for (let i = 0; i < 256; i++) {
    let myDivs = document.createElement("div");
    myDivs.style.border = 'thin solid blue'
    container.appendChild(myDivs);

    // adds event to change background of divs when moused over 
    myDivs.addEventListener("mouseover", function () {
        myDivs.style.backgroundColor = 'green';
    });
}


