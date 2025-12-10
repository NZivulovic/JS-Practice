
const mainDiv = document.getElementById("divContainer");

gridSize = 16;
totalGridSize = gridSize * gridSize;

const changeGridSizeButton = document.createElement("button");
changeGridSizeButton.innerText = "Change Grid Size\n (max 100)";
changeGridSizeButton.setAttribute("id", "changeGridSizeButton");

document.body.prepend(changeGridSizeButton);



function drawGrid() {
    for (i = 0; i < totalGridSize; i++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("class", "divRow");
        divRow.setAttribute("id", i);
        mainDiv.appendChild(divRow);
    }
}
drawGrid();

let divRowElement = document.querySelectorAll(".divRow")
for (i = 0; i < divRowElement.length; i++) {
    divRowElement[i].onmouseenter = function () {
        divRowElement[this.id].style.backgroundColor = 'black';
    }
}



changeGridSizeButton.addEventListener('click', function () {
    let newGridSize = prompt("Type in new Grid Size: 1 - 100");
    let newTotalGridSize = newGridSize * newGridSize;
    if (newGridSize >= 1 && newGridSize <= 100) {
        gridSize = newGridSize;
        totalGridSize = newTotalGridSize;
        return drawGrid();
    }
    else return alert("Number is lower than 1 or higher than 100, or not whole number!");

});
