const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
const arr = ['Svekis','Laurence','100',50,10];

function btnClicked(){
    const val = myInput.value;
    const res = arr.includes(val);
    const message = (res) ? `was found` : `Not Found`;
    let html = `<h2>Search Results for ${val}</h2>`;
    html += `<div>${val} - ${message}</div>`;
    html += `<div>Includes ${res}</div>`;
    const indexPos = arr.indexOf(val);
    html += `<div>IndexOf ${indexPos}</div>`;
    const indexPosLast = arr.lastIndexOf(val);
    html += `<div>IndexLast ${indexPosLast}</div>`;
    const finderVal = arr.find((v)=>{
        return typeof(v) == 'number';
    });
    html += `<div>Find 1 ${finderVal}</div>`;
    const finderValP = arr.find((v)=>{
        return v == val;
    });
    html += `<div>Find 2 ${finderValP}</div>`;
    const finderValNum = arr.find((v)=>{
        return v > 10;
    });
    html += `<div>Find 3 ${finderValNum}</div>`;
    output.innerHTML = html;
    console.log(res);
    console.log(indexPos);
    console.log(indexPosLast);
    console.log(finderVal);
    console.log(finderValP);
    console.log(finderValNum);
}

