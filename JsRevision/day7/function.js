//function
function add(a,b){
  return a+b;
}
//console.log(add(3,4));

let sum = function(a,b){
  return a+b;
}

//arror fun
let sub = (a,b)=>a-b;
//console.log(sub(7,4));

function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
// let counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());

//call back function

function calculate(a,b,operation){
  return operation(a,b);
}
function operation(x,y){
  return x+y;
}

//console.log(calculate(3,4,operation));

//array
let arr = [1,2,3,4,5];

for(let e of arr){
  //console.log(e);
  
}

//obj
let person ={
  name: 'lakshya',
  age: 21,
  course: 'bca'
}

for(let key in person){
  //console.log(key + ": " + person[key]);
}
//map modify array & return new array not change original array
//console.log(arr.map((num)=>num*2));

let filterarr= arr.filter((num)=>{
  return num%2==0;
})
//console.log(filterarr);

//reduce
let sumarr= arr.reduce((acc,curval)=>acc+curval,0);
//console.log(sumarr);

let cart =[
  {name: 'phone', price: 20000},
  {name: 'laptop', price: 50000},
  {name: 'tablet', price: 30000}
]

let totalprice = cart.reduce((acc,item)=>acc +item.price,0);
//console.log(totalprice);

function display({name,age,course}){
  console.log(`Name: ${name}, Age: ${age}, Course: ${course}`); 
}
//display(person);


//spread operator

let newarr = [...arr,6,7,8];
//console.log(newarr);