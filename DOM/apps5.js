const output = document.querySelector('div');
console.log(output);
output.innerHTML = '';
const out1 = document.createTextNode('Hello');
const out2 = document.createTextNode('World');
output.append(out1);
output.append(out2);
out1.textContent = 'Laurence';
out2.textContent = 'Svekis';
const myInput1 = document.createElement('input');
output.append(myInput1);
myInput1.setAttribute('type','text');
myInput1.setAttribute('name','first');
myInput1.setAttribute('placeholder','FirstName');
myInput1.style.display = 'block';
myInput1.value = 'Laurence';
const myInput2 = document.createElement('input');
output.append(myInput2);
myInput2.setAttribute('type','number');
myInput2.setAttribute('min',1);
myInput2.setAttribute('max',10);
myInput2.value = '5';
myInput2.style.display = 'block';
const myInput3 = document.createElement('input');
output.append(myInput3);
myInput3.setAttribute('type','date');
myInput3.style.display = 'block';
const myInput4 = document.createElement('input');
output.append(myInput4);
myInput4.setAttribute('type','color');
myInput4.style.display = 'block';

const label1 = document.createElement('label');
label1.setAttribute('for','sel');
label1.textContent = 'My List ';
label1.style.display = 'block';
output.append(label1);
const sel1 = document.createElement('select');
sel1.id = 'sel';
sel1.setAttribute('multiple','');
sel1.setAttribute('size','7');
output.append(sel1);

for(let i=0;i<15;i++){
    const op = document.createElement('option');
    op.textContent = `${i+1} Option`;
    sel1.append(op);
}

const btn = document.createElement('button');
btn.textContent = 'List me';
btn.style.display = 'block';
output.append(btn);

const ul = document.createElement('ul');
output.append(ul);

for(let i=0;i<5;i++){
    const radio = document.createElement('input');
    radio.setAttribute('type','radio');
    radio.setAttribute('name','radioButtons');
    radio.value = `${i+1} Selection`;
    radio.id = `r${i+1}`;
    const label1 = document.createElement('label');
    label1.textContent = `${i+1} Selection`;
    label1.setAttribute('for', `r${i+1}`);
    output.append(label1);
    output.append(radio);
    if(i==0) radio.setAttribute('checked','');
}
const btn1 = document.createElement('button');
btn1.textContent = 'Get Radios';
btn1.style.display = 'block';
output.append(btn1);
const output1 = document.createElement('div');
output.append(output1);

btn.addEventListener('click',listItems);
btn1.addEventListener('click',getRadios);

function getRadios(){
    const val1 = document.querySelector('input[name="radioButtons"]:checked');
    console.log(val1.value);
    const ins = document.querySelectorAll('input');
    console.log(ins);
    ins.forEach(ele =>{
        const getAtt =  ele.getAttribute('type');
        if(getAtt != 'radio'){
            console.log(ele.value)
        };
    })
}


function listItems(){
    const eles = sel1.querySelectorAll('option:checked');
    console.log(eles);
    ul.innerHTML = '';
    eles.forEach(ele =>{
        console.log(ele.textContent);
        const li = document.createElement('li');
        li.style.color = myInput4.value;
        ul.append(li);
        li.textContent = ele.textContent;
    })
}

