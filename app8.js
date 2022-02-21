const main = document.querySelector('.container');
const message = adder(main, 'div', '', 'info');
const output1 = adder(message, 'div', 'Content 1', 'output');
const output2 = adder(message, 'div', 'Content 2', 'output');
const output3 = adder(message, 'div', 'Content 3', 'output1');
const output4 = adder(message, 'div', 'Content 4', 'output1');
const output5 = adder(message, 'div', 'Content 5', 'output1');
const output6 = adder(message, 'div', 'Content 6', 'output1');
const output7 = adder(message, 'div', 'Content 7', 'output2');
const output8 = adder(message, 'div', 'Content 8', 'output1');
const gameBoard = adder(main, 'div', '', 'game');
const box3 = adder(gameBoard,'div','AVOID','blocker');
const box1 = adder(gameBoard, 'div', 'Box 1', 'box');
box1.style.backgroundColor = 'red';
output1.style.backgroundColor = 'red';
const box2 = adder(gameBoard, 'div', 'Box 2', 'box');
box2.style.backgroundColor = 'blue';
output2.style.backgroundColor = 'blue';
box2.style.left = '100px';

const game = {
    move: {},
    x1: box1.offsetLeft,
    y1: box1.offsetTop,
    x2: box2.offsetLeft,
    y2: box2.offsetTop,
    speed: 5,
    w1: box1.offsetWidth,
    h1: box1.offsetHeight,
    w2: box2.offsetWidth,
    h2: box2.offsetHeight
};
const keyz = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
    KeyA: false,
    KeyW: false,
    KeyS: false,
    KeyZ: false,
};

document.addEventListener('keydown', (e) => {
    if (e.code in keyz) {
        keyz[e.code] = true;
    }
})
document.addEventListener('keyup', (e) => {
    if (e.code in keyz) {
        keyz[e.code] = false;
    }
})

window.addEventListener('DOMContentLoaded', mover);

function mover() {
    const dim = [gameBoard.offsetWidth - box1.offsetWidth, gameBoard.offsetHeight - box1.offsetHeight];
    //Box 1
    if (keyz.ArrowRight && game.x1 < dim[0]) game.x1 += game.speed;
    if (keyz.ArrowLeft && game.x1 > 0) game.x1 -= game.speed;
    if (keyz.ArrowDown && game.y1 < dim[1]) game.y1 += game.speed;
    if (keyz.ArrowUp && game.y1 > 0) game.y1 -= game.speed;
    box1.style.left = `${game.x1}px`;
    box1.style.top = `${game.y1}px`;

    //Box 2
    if (keyz.KeyS && game.x2 < dim[0]) game.x2 += game.speed;
    if (keyz.KeyA && game.x2 > 0) game.x2 -= game.speed;
    if (keyz.KeyZ && game.y2 < dim[1]) game.y2 += game.speed;
    if (keyz.KeyW && game.y2 > 0) game.y2 -= game.speed;
    box2.style.left = `${game.x2}px`;
    box2.style.top = `${game.y2}px`;

    output1.innerHTML = `Box #1 X:${game.x1} Y:${game.y1} W:${game.w1} H:${game.h1}`;
    output2.innerHTML = `Box #2 X:${game.x2} Y:${game.y2} W:${game.w2} H:${game.h2}`;
    const o3 = game.x1 < (game.x2 + game.w2) && (game.x1+ game.w1) > game.x2;
    const o4 = game.y1 < (game.y2 + game.h2) && (game.y1+ game.h1) > game.y2;
    output3.style.color = (o3) ? 'green' : 'black';
    output4.style.color = (o3) ? 'green' : 'black';
    output5.style.color = (o4) ? 'green' : 'black';
    output6.style.color = (o4) ? 'green' : 'black';
    output3.innerHTML = `H ${o3}: (${game.x1} < ${game.x2} + ${game.x2 + game.w2}) && ((${game.x1} + ${game.w1}) > ${game.x2})`;
    output4.innerHTML = `H ${o3}: (${game.x1} < ${game.x2 + game.x2 + game.w2}) && ((${game.x1+ game.w1}) > ${game.x2})`;
    output5.innerHTML = `V ${o4}:${game.y1} < (${game.y2} + ${game.h2}) && (${game.y1} + ${game.h1}) > ${game.y2}`;
    output6.innerHTML = `V ${o4}: ${game.y1} < (${game.y2 + game.h2}) && (${game.y1 + game.h1}) > ${game.y2}`;
    const val1 = col(box1,box2);
    output7.style.color = val1 ? 'red' : 'black';
    output7.innerHTML = `HIT ${val1}`;
    const val2 = col(box1,box3);
    const val3 = col(box2,box3);
    box3.style.backgroundColor = val2 ? 'red' : '';
    if(!val2){
        box3.style.backgroundColor = val3 ? 'blue' : '';
    }
    output8.innerHTML = `CenterHIT Box1 ${val2} Box2 ${val3}`;
    game.move = window.requestAnimationFrame(mover);
}

function col(el1,el2){
    const a = el1.getBoundingClientRect();
    const b = el2.getBoundingClientRect();
    //console.log(a);
    //const tempX = (a.x < (b.x + b.width)) && ((a.x + a.width) > b.x);
    //const tempY = (a.y < (b.y+b.height)) && ((a.y + a.height) > b.y);
    return (a.x < (b.x + b.width)) && ((a.x + a.width) > b.x) && (a.y < (b.y+b.height)) && ((a.y + a.height) > b.y);
}

function adder(parent, t, html, c) {
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}
