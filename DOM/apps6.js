const div = document.querySelector('div');
div.innerHTML = '';
console.log(div);
const output = document.createElement('div');
div.append(output);
const ul = document.createElement('ul');
div.append(ul);
const btn = document.createElement('button');
btn.textContent = 'Reset Colors';
btn.style.display = 'block';
div.append(btn);
const holder = [];
btn.onclick = (e) => {
    holder.forEach(ele => {
        ele.style.backgroundColor = ranColor();
    })
}
for (let i = 0; i < 10; i++) {
    const ele = document.createElement('div');
    holder.push(ele);
    ele.style.width = '50px';
    ele.style.height = '50px';
    ele.style.border = '1px solid #ddd';
    ele.style.display = 'inline-block';
    ele.style.backgroundColor = ranColor();
    ele.style.lineHeight = '50px';
    ele.style.textAlign = 'center';
    ele.textContent = `${i+1}`;
    //ele.onclick = updateColor;
    ele.addEventListener('click', () => {
        document.body.style.backgroundColor = ele.style.backgroundColor;
    });
    ele.onmouseover = (e) => {
        //logger(`mouseOver ${i+1}`);
    }
    ele.addEventListener('mouseover', () => {
        logger(`mouseOver ${i+1}`);
    })
    ele.addEventListener('mouseleave', () => {
        logger(`mouseLeave ${i+1}`);
    })
    ele.addEventListener('mouseout', () => {
        logger(`mouseOut ${i+1}`);
    })
    ele.addEventListener('mousedown', () => {
        logger(`mouseDown ${i+1}`);
    })
    ele.addEventListener('mouseup', () => {
        logger(`mouseUp ${i+1}`);
    })
    ele.addEventListener('mouseenter', () => {
        logger(`mouseEnter ${i+1}`);
    })
    div.append(ele);
}
for (let i = 0; i < 10; i++) {
    const ele = document.createElement('input');
    ele.style.display = 'block';
    ele.setAttribute('type', 'text');
    ele.value = `${i+1} Input value`;
    div.append(ele);
    ele.onfocus = () => {
        ele.style.color = 'red';
    }
    ele.addEventListener('focusout', () => {
        ele.style.color = 'black';
    });
    ele.onchange = () => {
        ele.style.backgroundColor = 'blue';
    }
    ele.onkeydown = (e) => {
        if (e.key === 'Enter') {
            adder(ele.value);
            console.log(ele.value);
        }

    }
}
document.addEventListener('keydown', tracker);
document.addEventListener('keyup', tracker);

function adder(val) {
    console.log(val);
    const li = document.createElement('li');
    li.textContent = val;
    ul.append(li);
}

function tracker(e) {
    console.log(e.key);
}

function logger(val) {
    console.log(val);
    output.innerHTML = val;
}

function updateColor() {
    document.body.style.backgroundColor = ranColor();
}

function ranColor() {
    return `#${Math.random().toString(16).slice(2,8)}`;
}