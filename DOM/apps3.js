const divs = document.querySelectorAll('div');
document.body.style.display = 'grid';
document.body.style.gridTemplateColumns = '1fr 1fr';
const arr = ['Laurence', 'Jane', 'Mike', 'Laurence', 'Jane', 'Mike', 'Laurence', 'Jane', 'Mike'];
const uls = [];
console.log(divs);

divs.forEach((ele, ind) => {
    ele.textContent = `List #${ind+1}`;
    const ul = document.createElement('ul');
    ele.style.border = '1px solid #ddd';
    ele.style.textAlign = 'center';
    ele.append(ul);
    uls.push(ul);
    if (ind == 0) addItems();
    const btn = document.createElement('button');
    ele.append(btn);
    btn.textContent = `Move here ${ind+1}`;
    btn.onclick = mover;
})

function mover(e) {

    const parentEle = e.target.parentNode.querySelector('ul');
    console.log(parentEle.children);
    const eles = document.querySelectorAll('.sel');
    console.log(eles);
    parentEle.replaceChildren(...eles, ...parentEle.children);
    eles.forEach(ele => {
        ele.classList.remove('sel');
    })
}



function addItems() {
    arr.forEach((val, ind) => {
        const li = document.createElement('li');
        li.textContent = `${ind+1}. ${val}`;
        li.setAttribute('contenteditable', true);
        li.style.textAlign = 'left';
        li.onclick = () => {
            li.classList.toggle('sel');
            /*
                       console.log(li.classList.contains('sel'));

            if(li.classList.contains('sel')){
                li.classList.remove('sel');
            }else{
                li.classList.add('sel');      
            }
            */

        }
        uls[0].append(li);
    })
}
