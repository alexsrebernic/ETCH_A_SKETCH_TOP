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
colorInput.onchange = (e) => colorStatus(e.target.value)
colorModeInput.onclick = () => modeStatus("colorMode")
randomColorInput.onclick = () => modeStatus("randomColor")
eraserInput.onclick = () => modeStatus("eraser")
clearTableInput.onclick = () =>  cleanTable()



function cleanTable(){
    drawTable.innerHTML = ""
    makeTable(currentSize)
}
function paintBox(){
   if (currentMode == "randomColor"){
    var o = Math.round, r = Math.random, s = 255;
    this.style.backgroundColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
   } else if (currentMode == "colorMode"){
       this.style.backgroundColor = currentColor
   } else if (currentMode == "eraser"){
       this.style.backgroundColor = "white"
    }
   }




  






