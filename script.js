container = document.querySelector("#container");

draw(16);

function draw(gridNum){
    var columns =[];
    for(let i = 1; i <= gridNum; i++){
        const column = document.createElement("div");
        column.classList.add("column")
        container.appendChild(column);
        columns.push(column);
    }
    columns.forEach((column) => {
        var row = document.createElement("div");
        column.appendChild(row);
        for (let j = 1; j <= gridNum; j++){
            const div = document.createElement("div");
            div.style.paddingBottom = "100%" ;;
            div.style.opacity = "0";
            div.classList.add("gridElement");
            row.appendChild(div);
            div.addEventListener("mouseover",  function (e){
                e.target.style.backgroundColor = getRandomColor();
                e.target.style.opacity = (String(Number(e.target.style.opacity.replace( "%", "")) + .1));
            });
        }
    });

}
const btn = document.querySelector("#changeGrid");
btn.addEventListener("click", reprintGrid);

function reprintGrid(){
    var gridNum = prompt("How many rows/columns would you like your new grid to have? (100 maximum)");
    if (gridNum <= 100 && gridNum > 0){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        draw(gridNum);
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var c = 0; c < 6; c++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }