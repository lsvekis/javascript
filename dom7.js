const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
myInput.setAttribute('type','number');
myInput.setAttribute('max',20);
myInput.setAttribute('min',0);
myInput.value = 5;
btn.onclick = btnClicked;

function btnClicked(){
    console.clear();
    let num = myInput.value;
    let html = '';
    for(let i=0;i<num;i++){
        console.log(i);
        html += `<div>${i+1} For</div>`;
    }
    let i = 0;
    while(i<num){
        i++;
        html += `<div>${i} While</div>`;
    }

    do{
        i++;
        html += `<div>${i} Do</div>`;
    }
    while(i<num);
    output.innerHTML = html;
    console.log('ready');
}