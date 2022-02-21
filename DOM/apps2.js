const div1 = document.querySelector('div');
const div5 = document.querySelector('#three');
const div6 = document.querySelector('div .one');
const ul1 = document.createElement('ul');
const myInput = maker('input',div1,'');
myInput.setAttribute('type','text');
myInput.value = 'Laurence Svekis';
const btn = maker('button',div1,'Add to List');
btn.onclick = ()=>{
    const lis = document.querySelectorAll('li');
    let temp =  `${myInput.value} ${lis.length+1}`;
    addListItem(temp,'red');
}

div6.style.color = 'purple';
div6.textContent = 'Hello WOrld 2';

console.log(div6.parentNode);
div6.parentNode.removeChild(div6);

console.log(div1);


div1.append(ul1);
console.log(ul1);

for(let i=0;i<10;i++){
    addListItem(`List item ${i+1}`,'blue');
}

function addListItem(val,col){
    const li = document.createElement('li');
    li.innerText = val;
    li.style.color = col;
    li.onclick = (e)=>{
        li.parentNode.removeChild(li);
    }
    return ul1.appendChild(li);
}

const div2 = document.createElement('div');
div1.prepend(div2);
div2.innerHTML = `Hello World`;

const div3 = maker('div',div1,'Laurence Svekis');
div3.style.backgroundColor = 'red';
div5.append(div3);
div5.prepend(ul1);
div5.append(div6);

function maker(eleT,parent,html){
    const ele = document.createElement(eleT);
    ele.innerHTML = html;
    return parent.appendChild(ele);
}

