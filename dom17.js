const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;

const arr = [1,2,3,4,5,6];
const strArr = JSON.stringify(arr);
console.log(strArr);
const obj = {
    first : 'Laurnce',
    last : 'Svekis'
};
const strObj = JSON.stringify(obj);
console.log(strObj);

const arr1 = JSON.parse(strArr);
console.log(arr1);

const obj1 = JSON.parse(strObj);
console.log(obj1);
console.clear();
const holder = {status:'ready'};
init();

function init(){
    const val = localStorage.getItem('val');
    console.log(val);
    const temp = JSON.parse(val);
    console.log(temp);
    if(temp != null){
        console.log('value');
        output.textContent = temp.user;
        output.innerHTML += `<div>${JSON.stringify(temp)}</div>`;
        myInput.value = temp.v;
    }else{
        output.textContent = 'Not found';
    }
}

function btnClicked() {
    const valInput = myInput.value;
    holder.user = valInput;
    holder.v = valInput;
    const temp = JSON.stringify(holder);
    localStorage.setItem('val',temp);
    output.textContent = valInput;
    output.innerHTML += `<div>${JSON.stringify(holder)}</div>`;
}




