const defaultSize = 16
const defaultColor = "black"
const defaultMode = "color"

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize; 

function colorStatus (color){
    currentColor = color
}
function modeStatus (mode){
    currentMode = mode
}
function sizeStatus (size){
    currentSize = size
}

const colorInput = document.getElementById("color")
const randomColorInput = document.getElementById("randomColor")
const eraserInput = document.getElementById("eraser")
const clearTableInput = document.getElementById("clear")
const rangeTableInput = document.getElementById("rangeTable")
const saveTable = document.getElementById("save")
const colorModeInput = document.getElementById("colorMode")
const drawTable = document.querySelector(".drawTable");

// Make the divs in the container 
function makeTable (number){
    for(let i = 1 ; i <= number*number ; i++){
        const div = document.createElement("div")
        div.id = "box"
        drawTable.appendChild(div)
    }
    drawTable.style.gridTemplateColumns = "repeat("+ number +",1fr)"
    drawTable.style.gridTemplateRows = "repeat("+ number +",1fr)"
    const box = document.querySelectorAll("#box")
    for(let l = 0 ; l < box.length ; l++){
    box[l].addEventListener("mouseover",paintBox)
}
}
makeTable(16)

function paintBox(color){
    this.style.backgroundColor = "black"
}
colorInput.onchange = (e) => currentColor(e.target.value)
colorModeInput.onclick = () => currentMode("colorMode")
randomColorInput.onclick = () => currentMode("randomColor")
eraserInput.onclick = () => currentMode("eraser")
clearTableInput.onclick = () =>  cleanTable()

function cleanTable(){
    drawTable.innerHTML = ""
    makeTable(currentSize)
}




  






