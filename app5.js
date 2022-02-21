const slider = document.querySelector('.slider');
const btns = document.querySelectorAll('.btn');
window.addEventListener('DOMContentLoaded',init);
btns.forEach(btn =>{
    btn.onclick = ()=>{
        console.log('clicked');
        mover(btn.classList.contains('next'));
    }
})

function mover(dir){
    const cur = document.querySelector('.active');
    cur.classList.remove('active');
    const nex = cur.nextElementSibling || slider.firstElementChild;
    const pre = cur.previousElementSibling || slider.lastElementChild;
    const newActive = (dir) ? nex : pre;
    newActive.classList.add('active');
}

function init(){
    //console.log('ready');
    fetch('app5.json')
        .then(response => response.json())
        .then(data =>{
            adder(data);
        })
}

function adder(data){
    //slider
    data.forEach((item,index)=>{
        const slide = document.createElement('div');
        slide.classList.add('slide');
        const title = document.createElement('h2');
        title.textContent = item.title;
        title.style.textAlign = 'center';
        if(index==0) slide.classList.add('active');
        const div  = document.createElement('div');
        div.innerHTML = item.html;
        slide.append(title);
        slide.append(div);
        slide.style.backgroundColor = item.back;
        slide.style.color = item.color;
        slider.append(slide);
    })
}