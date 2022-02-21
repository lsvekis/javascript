const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 'Laurence';

const myObj = {
    first : 'Laurence',
    last : 'Svekis',
    ele : output,
    id : 0, 
    fullName : function(val){
        return `${this.first} ${this.last} ${this.id} ${val}`
    },
    zName(val){
        return `${this.first} ${this.last} ${this.id} ${val}`
    },
    adder(first,last){
        this.first = first;
        this.last = last;
        this.id = Math.floor(Math.random()*100)
        return `${this.first} ${this.last} ${this.id}`;
    }
};

function btnClicked(){
    const newFirst = 'Laurence';
    const ranNum = Math.floor(Math.random()*100);
    const newLast = `Svekis${ranNum}`;
    console.log(myObj.adder(newFirst,newLast));
    output.innerHTML = `<div>${myObj.fullName('test')}</div>`;
    console.log(myObj.zName('test'));
    console.clear();
    const arr1 = Object.entries(myObj);
    console.log(arr1);
    const arr2 = Object.keys(myObj);
    console.log(arr2);
    const arr3 = Object.values(myObj);
    console.log(arr3);
    const key = myInput.value;
    console.log(myObj[key] !== undefined);
    console.log(key in myObj);
    for(const prop in myObj){
        const val = myObj[prop];
        console.log(typeof(val));
        if(typeof(val) == 'string' || typeof(val) == 'number'){
            console.log(`${prop} : ${myObj[prop]}`);
        }else{
            console.warn(`Other type ${typeof(val)}`)
        }
    }
    console.log(typeof(arr1));
}