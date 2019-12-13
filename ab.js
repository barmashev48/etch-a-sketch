const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const ctx = canvas.getContext('2d');
const MOVE_AMOUNT = 10;
const button = document.querySelector('.shake');

let x = 0;
let y = 0;

let hue = 0;

//setup canvas
ctx.lineCap = 'round';
ctx.lineWidth = '50';

x = Math.floor(Math.random() * width);
y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.closePath();
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.stroke();

// draw function

function draw(key) {
    switch(key){
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;  
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break; 
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;           
    }

    hue++
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.stroke();



}


//key handler
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw(e.key);
    }


}

//clear function
function clear() {
    ctx.clearRect(0, 0, width, height);
}

//listeners

window.addEventListener('keydown', handleKey);
button.addEventListener('click', clear)
