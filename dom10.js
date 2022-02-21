const output = document.querySelector('div');
const myInput = document.querySelector('input');
const btn = document.querySelector('button');
btn.onclick = btnClicked;
myInput.value = 'Laurence';
const arr1 = ['One'];
const tempArr = ['onex','twox','threex'];
const arr = arr1.concat(tempArr,tempArr);


function btnClicked(){
    const val =  myInput.value;
    let temp = arr.push(val,'LAST'); // add to array return the array length
    console.log(temp);
    temp = arr.pop(); //remove last
    console.log(temp);
    temp = arr.shift(); //remove first item
    console.log(temp);
    temp = arr.unshift('First'); //add to the front of array array length returned
    console.log(temp);
    console.log(arr.length);
    arr[arr.length - 1] = 'LAST';
    //delete arr[0];
    //console.log(arr);
    arr.push('one1','two2','three3');
    //temp = arr.splice(1);  return array with all items after the index of 1
    //temp = arr.splice(1,3);
    temp = arr.splice(1,3,'Add1','Add2','Add3');
    console.log(temp); 
    temp = arr.splice(3,0,'New1','New2','New3');
    console.log(temp); 
    temp = arr.slice(); //duplicate array as new array
    temp[0] = 'TEST';
    temp = arr.slice(5); // return array items from index 5 
    temp = arr.slice(1,4); // return portion of array using slice

    console.clear();
    console.log(temp); 
    console.log(arr);
    const myStr = arr.toString();
    const myStr1 = arr.join(' - ');

    output.innerHTML = `<div>${myStr}</div>`;
    console.log(arr);
    console.log(myStr);
    console.log(myStr1);
}