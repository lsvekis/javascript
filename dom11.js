const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 'Laurence';
const arr = [];
for(let i=0;i<10;i++){
    output.innerHTML += `<div>${i} Test Div</div>`;
}
const eles = document.querySelectorAll('div div');
console.log(eles);
eles.forEach((ele)=>{
    console.log(ele);
    ele.val = 0;
    ele.onclick = (e)=>{
        console.clear();
        console.log(ele);
        console.log(e.target);
        ele.val++;
        ele.innerText = `${ele.val} was clicked`;
        if(ele.style.color == 'red'){
            ele.style.color = 'black';
        }else{
            ele.style.color = 'red';
        }
        
    }
})


function btnClicked(){
    arr.push(myInput.value);
    console.log(arr.length);
    for(let i=0;i<arr.length;i++){
        console.log(`${i} ${arr[i]}`);
    }
    let html = '';
    arr.forEach((item,index,arr1)=>{
        html += `<div>${index+1}. ${item}</div>`;
        console.log(item);
        console.log(index);
        console.log(arr1);
        //console.clear();
        //arr1[0] = 'TEST';
    })
    output.innerHTML = html;
}