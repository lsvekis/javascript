const arr1 = ['one',100,false,null,[1,2,3]];
const obj1 = {
    first:'Laurence',
    'full Name':'Laurence Svekis',
    id : 100,
    status : true,
    arr : [1,2,3,'Hello World']
};
const arr2 = arr1;
const obj2 = obj1;
obj2.id = 5000;
arr2[0] = 'Hello World';
arr1[3] = `Laurence Svekis`;
obj1.first = `Linda Jones`;

let val = arr1[4][0];
val = obj1['full Name'];
val = obj1.first;

val = obj2.arr[3];

console.log(val);
document.write(val);
