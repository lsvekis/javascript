const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 10;
myInput.setAttribute('type','number');
const arr = ['one','two','three','four','five'];
let boo = true;
for(let i=0;i<10;i++){
    const ranValue = Math.floor(Math.random()*100);
    arr.push(ranValue);
}
console.log(arr);
function btnClicked(){
    const arr1 = arr.filter((ele)=>{
        return typeof(ele) == 'string';
    })
    const ind = Math.floor(Math.random()*arr.length);
    output.innerHTML = `Random Array Item with index of ${ind} value ${arr[ind]}`;
    let html = '';
    if(boo){
        arr.sort();
        boo = false;
    }else{
        arr.reverse();
    }
    html += `<div>${arr.toString()}</div>`;
    for(let i=0;i<10;i++){
        arr.sort(()=>{
            return Math.random() - 0.5;
        });
        html += `<div>${arr.toString()}</div>`;
    }
    arr.forEach((ele,ind)=>{
        html += `<div>${ind} - ${ele}</div>`;
    })
    output.innerHTML += html;
    console.log(arr1);
}