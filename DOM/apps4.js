window.onload = init;
//document.body.onload = init1;
document.addEventListener('DOMContentLoaded',init3);

function init3(){
    const div = document.querySelector('div');
    div.style.backgroundColor = '#ddd';
    const h1 = document.createElement('h1');
    h1.textContent = 'Laurence Svekis';
    div.append(h1);
    div.addEventListener('click',click1,{once:true}); 
    h1.addEventListener('click',click2);
    h1.addEventListener('click',click3);
}


function init2(){
    const div = document.querySelector('div');
    div.style.backgroundColor = '#ddd';
    const h1 = document.createElement('h1');
    h1.textContent = 'Laurence Svekis';
    div.append(h1);
    div.onclick = click1;
    h1.onclick = click2;
}


function click1(e){
    //console.log(e.target);
    console.log('DIV');
}
function click2(e){
    //console.log(e.target);
    //e.target.removeEventListener('click',click2);
    console.log('H1');
}
function click3(e){
    e.target.removeEventListener('click',click2);
    console.log('Event #3');
}
function init1(){
    console.log('doc');
    const div = document.querySelector('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Laurence Svekis';
    h1.onclick = ()=>{
        console.log('h1 #2');
    }
    h1.addEventListener('click',(e)=>{
        console.log('h1 #1');
    })
    h1.onclick = ()=>{
        console.log('h1 #3');
    }
    h1.addEventListener('click',(e)=>{
        console.log('h1 #4');
    })
    h1.addEventListener('click',(e)=>{
        console.log('h1 #5');
    })
    div.append(h1);
    console.log(div);
}


function init(){
    console.log('window');

}

