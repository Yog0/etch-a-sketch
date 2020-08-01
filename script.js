const grid = document.querySelector('#grid');
grid.setAttribute('style', 'display: grid; grid-template-columns: repeat(20, 5%): 400px; width: 400px');

function trigger(e) {
    let box = document.querySelector(`div[id="${e.srcElement.id}"]`)

    // set random RGB values
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    if (this.style.background == "white") {
        // if nothing in box, set background to random RGB
        box.setAttribute('style', `background: rgb(${r}, ${g}, ${b})`);

        // record RGB values in arrays
        arrayRed[e.srcElement.id] = r;
        arrayGreen[e.srcElement.id] = g;
        arrayBlue[e.srcElement.id] = b;
    }
    else {
        // r = Math.floor((255-arrayRed[e.srcElement.id])*-0.5 + arrayRed[e.srcElement.id]);
        // g = Math.floor((255-arrayGreen[e.srcElement.id])*-0.5 + arrayGreen[e.srcElement.id]);
        // b = Math.floor((255-arrayBlue[e.srcElement.id])*-0.5 + arrayBlue[e.srcElement.id]);

        // update RGB values, set box color and update arrays with new values
        r = Math.floor(arrayRed[e.srcElement.id]-25);
        g = Math.floor(arrayGreen[e.srcElement.id]-25);
        b = Math.floor(arrayBlue[e.srcElement.id]-25);
        
        box.setAttribute('style', `background: rgb(${r}, ${g}, ${b})`);
        arrayRed[e.srcElement.id] = r;
        arrayGreen[e.srcElement.id] = g;
        arrayBlue[e.srcElement.id] = b;
    }
}
function gridSize(side) {
    let numCol = side;
    let colPercent = (100/numCol);
    grid.setAttribute('style', `display: grid; grid-template-columns: repeat(${numCol}, ${colPercent}%); height: 600px; width: 600px`);
    for (i = 0; i < (side ** 2); i ++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('style', 'background: white; border: 1px dotted black; height: auto; width: auto');
        gridBox.classList.add('gridBox');
        gridBox.setAttribute('id', `${i}`);
        grid.appendChild(gridBox);
        
        // initialise listeners
        const gridArea = Array.from(document.querySelectorAll('.gridBox'));
        gridArea.forEach(gridBox => gridBox.addEventListener('pointerover', trigger));
    
    }
}

const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    const clearNode = document.getElementById('grid')
    let input = prompt("Please enter the number of squares per side.");
    if (input < 1 || input > 64 || isNaN(input)) {
        alert("Please enter a number between 1 and 64");
    }
    else {
    // clear grid
    while (clearNode.firstChild) {
        clearNode.removeChild(clearNode.lastChild);
      }
             
      gridSize(input);
    }
    });
let side = 20;
let arrayRed = [];
let arrayGreen = [];
let arrayBlue = [];
gridSize(side);




