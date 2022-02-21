const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
const arr = ['JavaScript', 'Laurence Svekis', 'Html', 'code'];
const game = {
    hidden: ''
};
starter();

function btnClicked() {
    if (btn.textContent == 'New Game') {
        starter();
    } else {
        const checkVal = myInput.value.toLowerCase();
        if (checkVal == game.hidden) {
            console.log('correct');
            output.innerHTML += `<div>Correct it was ${checkVal}</div>`;
            btn.textContent = 'New Game';
            myInput.style.border = 'black solid 1px';
            myInput.style.display = 'none';
        } else {
            console.log('wrong');
            myInput.style.border = 'red solid 1px';
            output.innerHTML += `<div style="color:red">X ${checkVal}</div>`;
        }
    }
}

function starter() {
    btn.textContent = 'Check Answer';
    myInput.style.border = 'black solid 1px';
    myInput.style.display = 'block';
    myInput.value = '';
    const ind = Math.floor(Math.random() * arr.length);
    game.hidden = arr[ind].toLowerCase();
    const rep = maker(game.hidden);
    output.innerHTML = `<div>${rep}</div>`;
}

function maker(words) {
    const tempArr = words.split(' ');
    const holder = [];
    tempArr.forEach(word => {
        word = word.toLowerCase();
        const letters = word.split('');
        letters.sort(() => {
            return Math.random() - 0.5;
        });
        holder.push(letters.join(''));
    })
    console.log(holder);
    return holder.join(' ');
}
