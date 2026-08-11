let person = {
  name:'lakshya',
  sirname:'pareek'
}

//localStorage.setItem('person',JSON.stringify(person))

let data = JSON.parse(localStorage.getItem('person'))
//console.log(data);

let cart =[
  {id:1,title:'mens shirt',price:2999},
  {id:2,title:'mens jeans',price:4999}
]

localStorage.setItem('cart',JSON.stringify(cart))

let mycart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(mycart);

let newproduct ={id:3,title:'mens muflars',price:559}

function addtocart(newproduct){
  mycart.push(newproduct)
  localStorage.setItem('cart',JSON.stringify(mycart))
}

addtocart(newproduct)

console.log('new cart');

console.log(JSON.parse(localStorage.getItem('cart') || []));

