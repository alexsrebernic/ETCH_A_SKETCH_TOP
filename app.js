const drawTable = document.querySelector(".drawTable");
// Make the boxs in the container function
function makeTable (number){
    for(let i = 1 ; i <= number*number ; i++){
        const div = document.createElement("div")
        div.className = "box"
        drawTable.appendChild(div)
    }
    drawTable.style.gridTemplateColumns = "repeat("+ number +",1fr)"
    drawTable.style.gridTemplateRows = "repeat("+ number +",1fr)"
}
makeTable(16)

// Paint the boxs in the table
const box = document.getElementsByClassName("box")
function paintBox(){
    this.style.backgroundColor = "black"
}
box.addEventListener("click",paintBox)
