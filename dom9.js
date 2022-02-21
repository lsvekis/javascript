const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 'Laurence';

function FullName(first='Laurence',last='Svekis'){
    //first = first || 'Laurence';
    this.firstName = first,
    this.lastName = last,
    this.full = `${first} ${last}`;
}


function btnClicked(){
    const person = new FullName(myInput.value,'Smith');
    console.log(person.full);
}