const drawTable = document.querySelector(".drawTable");
// Make the boxs in the container 
function makeTable (number){
    for(let i = 1 ; i <= number*number ; i++){
        const div = document.createElement("div")
        div.id = "box"
        div.setAttribute("draggable", "false");
        div.setAttribute("data-bottom", "true");

        drawTable.appendChild(div)
    }
    drawTable.style.gridTemplateColumns = "repeat("+ number +",1fr)"
    drawTable.style.gridTemplateRows = "repeat("+ number +",1fr)"
}
makeTable(16)
// Paint the boxs in the table
const box = document.querySelectorAll("#box")
function paintBox(){
    this.style.backgroundColor = "black"
}
for(let l = 1 ; l < box.length ; l++){
    box[l].addEventListener("mouseover",paintBox)
}
