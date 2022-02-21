const fun1 = function (val) {
    counter=counter+val;
    const output = `<div>Hello ${counter}</div>`;
    document.write(output);
}
let counter = 0;
let word = '';
fun1(21);
fun1(2);
fun1(3);
fun2('h');
fun2('e');
fun2('l');
fun2('l');
fun2('o');
//fun1 = 100;
console.log(fun1);

const fun5 = fun1;
fun5(1000);

function fun2(val){
    word = word + val;
    counter++;
    let output = `<div>Hello ${counter}</div>`;
    output += `<div>Hello ${word}</div>`;
    document.write(output);
}
let valTotal = 0;
valTotal += fun3(10,44,55);
valTotal += fun3(4,66);
valTotal += fun3(5);
console.log(valTotal);

function fun3(num1=0,num2=0,num3=0){
    const total = num1 + num2 + num3;
    console.log(valTotal);
    return total;
}

const temp = 5000;
fun4(100);

function fun4(val){
    const temp = 9;
    const myVal = val + temp;
    //console.clear();
    console.log(myVal);
}