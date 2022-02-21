const main = document.querySelector('.main');
console.log(main);
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const output = document.createElement('div');
main.append(output);
main.append(btn1);
main.append(btn2);
main.append(btn3);
btn1.textContent = 'Use Fetch';
btn2.textContent = 'Use Async';
btn3.textContent = 'PromiseAll';
const urls = ['app6-1.json', 'app6-2.json', 'app6-3.json'];

btn1.onclick = fetchNow;
btn2.onclick = fetchData;
btn3.onclick = fetchAllUrls;

function fetchAllUrls() {
    Promise.all(urls.map(url =>
        fetch(url).then(res => res.json())
    )).then((data) => {
        let html = '';
        data.forEach((val, ind) => {
            console.log(val);
            html += `<div>${ind+1}. ${val.first} ${val.last}</div>`;
        })
        output.innerHTML = html;
    });
}


function fetchAllUrls2() {
    Promise.all([
        fetch(urls[0]).then(resp => resp.json()),
        fetch(urls[1]).then(resp => resp.json()),
        fetch(urls[2]).then(resp => resp.json()),
    ]).then(console.log);
}

function fetchNow() {
    fetch(urls[1])
        .then(response => response.json())
        .then(data => {
            console.log(data);
            output.textContent = `${data.first} ${data.last}`;
        })
        .catch(error => console.log(error));

}

async function fetchData() {
    let rep = await fetch(urls[0]);
    let data = await rep.json();
    console.log(data);
    output.textContent = `${data.first} ${data.last}`;
}