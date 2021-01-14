let colorButton = document.querySelector('button')
let body = document.querySelector('body')
let changeColor = function() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.backgroundColor = bgColor
}

colorButton.onclick = changeColor