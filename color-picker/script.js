let color = document.querySelector("#colorPicker");

let text = document.querySelector("#colorText");

function colorBg(){
    document.body.style.backgroundColor = color.value;
}

color.addEventListener("input", colorBg)