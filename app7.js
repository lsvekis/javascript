const main = document.querySelector('.container');
const info = maker(main, 'div', '', 'info');
const gameboard = maker(main, 'div', '', 'gameboard');
const message = maker(info, 'div', 'Click Start Button', 'message');
const btn1 = maker(info, 'button', 'Start Game', 'btn');
const paddle = maker(gameboard, 'div', '', 'paddle');
paddle.val = 5;
gameboard.style.display = 'none';
const game = {
    box: [],
    num: 15,
    ani: {},
    pspeed: 1,
    speed: 2,
    width: main.offsetWidth,
    play: false,
    score: 0
};
btn1.onclick = startGame;
//window.addEventListener('DOMContentLoaded', init);

function init() {
    for (let i = 0; i < game.num; i++) {
        const ele = maker(gameboard, 'div', i + 1, 'box');
        ele.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
        ele.onclick = dropper;
        ele.speedVal = Math.floor(Math.random() * 1) + 1;
        ele.style.left = Math.floor(Math.random() * (game.width - 50)) + 'px';
    }
}

function mover() {
    const actives = document.querySelectorAll('.active');
    actives.forEach((ele) => {
        let y = ele.offsetTop + ele.speedVal;
        ele.style.top = y + 'px';
        if (y > 400) {
            ele.classList.remove('active');
            ele.style.left = Math.floor(Math.random() * (game.width - 50)) + 'px';
            ele.style.top = '0px';
        }
        const poff = paddle.offsetTop;
        if (y + 50 > poff && y < poff + 20) {
            const x = ele.offsetLeft;
            const xend = x + 50;
            const px = paddle.offsetLeft;
            const pxend = px + 100;
            let valHit = 'MISS';
            if ((xend > px) && (xend < pxend)) {
                valHit = 'HIT';
                message.style.color = 'green';
                ele.remove();
                game.score++;
            } else {
                message.style.color = 'red';
            }
            message.textContent = `(${valHit}!) SCORE : ${game.score} `;
            if (game.score >= game.num) {
                //GAME OVER
                game.play = false;
                btn1.style.display = 'block';
                btn1.textContent = 'ReStart';
                message.style.color = 'black';
                message.innerHTML += '<div>Game Over</div>';
            }

            //game.play =false;
        }

    })
    let paddleY = paddle.offsetLeft + (game.pspeed * paddle.val);
    if (paddleY > game.width - 100 || paddleY < 0) {
        paddle.val *= -1;
    }
    paddle.style.left = paddleY + 'px';
    if (game.play) {
        game.ani = requestAnimationFrame(mover);
    } else {
        cancelAnimationFrame(game.ani);
    }

}

function dropper(e) {
    console.log(this);
    this.classList.add('active');
}


function startGame() {
    game.play = true;
    game.score = 0;
    init();
    btn1.style.display = 'none';
    gameboard.style.display = 'block';
    message.textContent = 'Click the boxes Hit the paddle.';
    mover();
}

function maker(parent, t, html, c) {
    const ele = document.createElement(t);
    ele.innerHTML = html;
    ele.classList.add(c);
    return parent.appendChild(ele);
}