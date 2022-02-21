const div = document.querySelector('div');
const score = document.createElement('div');
score.style.textAlign = 'center';
document.body.prepend(score);

const ball = document.createElement('div');
ball.style.border = '3px solid white';
div.innerHTML = '';
div.style.width = '500px';
div.style.height = '400px';
div.style.backgroundColor = 'black';
div.style.margin = 'auto';
div.style.overflow = 'hidden';
const pos = {
    x:100,
    y:100,
    dx:1,
    dy:1,
    speed:5,
    move:true,
    score:0
}
adderScore();
div.append(ball);
ball.style.backgroundColor = 'red';
ball.style.height = '50px';
ball.style.width = '50px';
ball.style.borderRadius = '50%';
ball.style.position = 'relative';
ball.onclick = gameHit;
let mover = requestAnimationFrame(ani);

document.addEventListener('keydown',(e)=>{
    console.log(e.key);
    if(e.key === 'Enter') {
        if(pos.move){
            pos.move = false;
            cancelAnimationFrame(mover);
        }else{
            pos.move = true;
            mover = requestAnimationFrame(ani);
        }
    }
})
function gameHit(){
    pos.score++;
    ball.style.backgroundColor = `#${Math.random().toString(16).slice(2,8)}`;
    adderScore();
    pos.x = Math.floor(Math.random()*450);
    pos.y = Math.floor(Math.random()*350);
    ball.style.left = `${pos.x}px`;
    ball.style.top = `${pos.y}px`;
}

function adderScore(){
    score.innerHTML = `<div>Score :${pos.score}</div>`;
}

function ani(){
    pos.move = true;
    if(pos.move){
        if(pos.x > 450 || pos.x < 0){
            pos.dx *= -1;
        }
        if(pos.y > 350 || pos.y < 0){
            pos.dy *= -1;
        }
        pos.x += pos.speed * pos.dx;
        pos.y += pos.speed * pos.dy;
        ball.style.left = `${pos.x}px`;
        ball.style.top = `${pos.y}px`;
    }
    mover = requestAnimationFrame(ani);
}