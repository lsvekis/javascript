const myInput = document.querySelector('input[type="color"]');
console.log(myInput);
const holder = [];
const main = document.createElement('div');

const btn = document.createElement('button');
const btn2 = document.createElement('button');
btn.textContent = "Save Color";
btn2.textContent = "List Saved Colors";
document.body.prepend(btn);
document.body.prepend(btn2);
document.body.prepend(main);
console.log(main);

btn2.onclick = ()=>{
    holder.forEach((ele)=>{
        const span = document.createElement('span');
        main.append(span);
        span.style.width = '50px';
        span.style.height = '50px';
        span.style.display = 'inline-block';
        span.style.backgroundColor = ele;
        span.onclick = ()=>{
            span.remove();}
    })
}


btn.onclick = ()=>{
    holder.push(myInput.value);
    //main.textContent = holder.toString();
    const btn1 = document.createElement('button');
    main.append(btn1);
    btn1.textContent = myInput.value;
    btn1.style.backgroundColor = myInput.value;
    btn1.style.color = 'white';
    btn1.onclick = ()=>{
        document.body.style.backgroundColor = btn1.textContent;
    }
}


myInput.onchange = (e)=>{
    console.log(e.target.value);
    console.log(myInput.value);
    document.body.style.backgroundColor = myInput.value;
    ///console.log(this.value);
}