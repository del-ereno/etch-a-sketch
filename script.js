const container = document.querySelector("#container");
for (let i = 1; i <= 16; i++){
    const div = document.createElement("div");
    div.style.padding = "50px";
    div.classList.add(String("div" + i));
    container.appendChild(div);
}