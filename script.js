container = document.querySelector("#container");

draw(102);

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
            div.classList.add("gridElement");
            row.appendChild(div);
            div.addEventListener("mouseover",  function (e){
                e.target.style.background = "blue";
            });
            div.addEventListener("mouseout",  function (e){
                e.target.style.background = "white";
            });
        }
    });
}

const btn = document.querySelector("#changeGrid");
btn.addEventListener("click", reprintGrid);

function reprintGrid(){
    var gridNum = prompt("How many rows/columns would you like your new grid to have?");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    draw(gridNum);
}


/** 
for (let c = 1; c <= 4; i++){

    for (let r = 1; r <= 4; i++){
        const div = document.createElement("div");
        div.style.padding = "50px";
        div.classList.add(String("div"));
        eval().appendChild(div);
    }
}
*/