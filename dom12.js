const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 10;
myInput.setAttribute('type','number');
const arr = ['one','two','three','four','five'];
const temp1 = [];
for(let i=0;i<10;i++){
    const ranValue = Math.floor(Math.random()*100);
    temp1.push(ranValue);
}

function btnClicked(){
    const arr1 = arr.map((item,ind,array)=>{
        console.log(item);
        return `${item} ${ind} `;
    })
    const arr2 = temp1.map(val=> val*2);
    const arr3 = temp1.filter((val)=>{
        return val > 50;
    });
    const arr4 = temp1.reduce((previous,current,index)=>{
        console.log(previous);
        console.log(current);
        return previous + current;
    }); // total of all the items in the array

    const arr5 = temp1.every((val)=>{
        console.log(val);
        return val < 150;
    }) //boolean on the condition all have to be true
    const arr6 = temp1.some((val)=>{
        console.log(val);
        return val < 50;
    }) //boolean on the condition all have to be true
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    console.log(arr5);
    console.log(arr6);
    const arr7 = temp1.map((val)=>{
        console.log(val);
        return val * myInput.value;
    })
    let html = '';
    arr7.forEach((ele,ind) => {
        html += `<div>${temp1[ind]} x ${myInput.value} = ${ele}</div>`;
    })
    output.innerHTML = html;
}