const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 'Laurence Svekis';

function btnClicked(){
    const val = myInput.value.trim();
    let html = `<div>${val}</div>`;
    html += `<div>Length : ${val.length}</div>`;
    const key = 'Svekis';
    const inChecker = val.includes(key);
    const mes1 = inChecker ? ` was There` : ` was NOT`;
    html += `<div>'${key}' ${mes1}</div>`;
    html += `<div>Slice 1-5 ${val.slice(1,5)}</div>`;
    html += `<div>Slice 0-3 ${val.slice(0,3)}</div>`;
    html += `<div>Lower ${val.toLowerCase()}</div>`;
    html += `<div>Upper ${val.toUpperCase()}</div>`;
    const updateStr1 = val.replace('e','x');
    html += `<div>#1 ${updateStr1}</div>`;
    const updateStr2 = val.replace(/e/g,'x');
    html += `<div>#2 ${updateStr2}</div>`;
    const updateStr3 = val.replaceAll('e','x');
    html += `<div>#3 ${updateStr3}</div>`;
    const index1 = val.indexOf('re');
    html += `<div>IndexOf ${index1}</div>`;
    const index2 = val.lastIndexOf('e');
    html += `<div>LastIndexOf ${index2}</div>`;
    const sea1 = val.search('e');
    html += `<div>Search ${sea1}</div>`;
    html += `<div>Capitals ${makeCap(val)}</div>`;
    console.log(inChecker);
    output.innerHTML = html;
}

function makeCap(words){
    const arr = words.split(' ');
    const temp = [];
    arr.forEach((word)=>{
        const f = word.charAt(0).toUpperCase();
        const remainLetters = word.slice(1);
        console.log(f+remainLetters);
        temp.push(f+remainLetters);
    })
    return temp.join(' ');
}