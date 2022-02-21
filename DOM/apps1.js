const ele1 = document.querySelector('.one');
const ele2 = document.querySelector('#two');
const ele3 = document.querySelector('div > div');
const ele4 = document.getElementById('one');
const eles1 = document.querySelectorAll('div');
const eles2 = document.getElementsByTagName('div');
const eles3 = document.getElementsByClassName('one');

console.log(ele1);
console.log(ele2);
console.log(ele3);
console.log(ele4);
console.log(eles2['one']);
console.clear();
console.log(eles1);

console.log(eles2);
console.log(eles3);

eles1.forEach((ele,ind,arr)=>{
    console.log(ele.textContent);
    ele.innerHTML = `<div>JavaScript List ${ind+1} </div>`;
    //console.log(arr);
})
console.log(eles1);
console.log(eles2);
for(let i=0;i<eles2.length;i++){
    console.log(eles2[i].innerHTML);
}

//console.log(eles2.item(1));

