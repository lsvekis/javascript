const val = {
    num: 15
};
const main = elemaker('div', document.body, '');
const output = elemaker('div', main, '');
for (let i = 0; i < val.num; i++) {
    const btn = elemaker('button', main, `Button #${i+1}`);
    btn.total = 0;
    btn.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
    btn.style.color = 'white';
    btn.classList.add('btn');
    btn.onclick = adder;
}
const output1 = elemaker('div', main, '');
const btnMain = elemaker('button', main, `All Totals`);
btnMain.onclick = () => {
    const btns = document.querySelectorAll('.btn');
    output1.innerHTML = '';
    const ul = elemaker('ul', output1, '');
    btns.forEach((ele, index) => {
        const li = elemaker('li', ul, `${ele.textContent} = ${ele.total}`);
        li.style.backgroundColor = ele.style.backgroundColor;
        li.style.color = ele.style.color;
    })
}

function elemaker(eleT, parent, html) {
    const ele = document.createElement(eleT);
    ele.innerHTML = html;
    return parent.appendChild(ele);
}

function adder(e) {
    this.total++;
    output.style.backgroundColor = this.style.backgroundColor;
    output.innerHTML = `${this.textContent} :(${this.total})`;
}