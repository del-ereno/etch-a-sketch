//const container = document.querySelector("#container");
const columns = document.querySelectorAll("#column");
columns.forEach((column) => {
    var row = document.createElement("div");
    column.appendChild(row);
    for (let i = 1; i <= 4; i++){
        const div = document.createElement("div");
        div.style.padding = "50px";
        div.classList.add("gridElement");
        row.appendChild(div);
    }
});


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