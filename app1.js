const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const output = document.querySelector('.output');
//Function Expression
const adder2 =  function(){
    if(!this.total) {
        this.total = 1;
    }else{
        this.total++;
    }
    output.textContent = `Total #2 : (${this.total})`;
}
const adder3 = ()=>{
    if(!this.total) {
        this.total = 1;
    }else{
        this.total++;
    }
    output.textContent = `Total #3 : (${this.total})`;
}
btn1.onclick = adder1;
btn2.onclick = adder2;
btn3.onclick = adder3;

///Function Declaration

function adder1(){
    if(!this.total) {
        this.total = 1;
    }else{
        this.total++;
    }
    output.textContent = `Total #1 : (${this.total})`;
}