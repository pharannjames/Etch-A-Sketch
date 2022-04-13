const container = document.querySelector('#container')


//Generates 266 Divs elements
for (let i = 0; i < 256; i++) {
    let myDivs = document.createElement("div");
    myDivs.style.border = 'thin solid blue'
    container.appendChild(myDivs);
    myDivs.innerText = i;

    myDivs.addEventListener("mouseover", function () {
        myDivs.style.backgroundColor = 'green';
    });
}


