const drawTable = document.querySelector(".drawTable");

// Make the divs in the container function
function makeTable (number){
    for(let i = 1 ; i <= number*number ; i++){
        const div = document.createElement("div")
        drawTable.appendChild(div)
    }
    drawTable.style.gridTemplateColumns = "repeat("+ number +",1fr)"
    drawTable.style.gridTemplateRows = "repeat("+ number +",1fr)"
}
console.log(makeTable(8))
