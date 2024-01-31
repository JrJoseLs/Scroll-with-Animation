for (let i=5; i<=60; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}


// boxes
let boxes = document.querySelectorAll('.box');

function scrollTrigger() {
    boxes.forEach(box => {
        if (box.offsetTop < window.scrollY) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollTrigger);


// random color
let randomColorBlocks = document.querySelectorAll('.box');

function addColor() {
    randomColorBlocks.forEach(e => {
        e.style.backgroundColor = getRandomColor();
    });
}

function getRandomColor() {
    let chars = "123456789abcdef";
    let colorLength = 6;
    let color = "";

    for (let i = 0; i < colorLength; i++) { // Cambiado "+" a "++" aquí
        let randomIndex = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomIndex, randomIndex + 1);
    }
    return "#" + color;
}

addColor();
