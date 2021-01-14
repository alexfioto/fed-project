let colorButton = document.getElementById('color-changer')
let body = document.querySelector('body')
let changeColor = function() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    body.style.backgroundColor = bgColor
}

colorButton.onclick = changeColor

let musicButton = document.getElementById('musician-button')
let dataScienceButton = document.getElementById('data-scientist-button')

function musicTheme() {
    let elements = document.getElementsByClassName('text')
    let h2 = document.querySelector('h2')
    for (i=0; i<elements.length; i++) {
        elements[i].style.color = 'gold'
        elements[i].style.fontFamily = "Chalkduster, fantasy"
    }
    body.style.backgroundColor = 'blue'
    h2.innerHTML = 'Musician'
}

function dataScienceTheme() {
    let elements = document.getElementsByClassName('text')
    let h2 = document.querySelector('h2')
    for (i=0; i<elements.length; i++) {
        elements[i].style.color = 'rgb(2, 249, 14'
        elements[i].style.fontFamily = "'Courier New', monospace"
    }
    body.style.backgroundColor = 'black'
    h2.innerHTML = 'Data Scientist'
}

musicButton.onclick = musicTheme

dataScienceButton.onclick = dataScienceTheme