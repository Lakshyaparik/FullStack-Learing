
let cartProducts=JSON.parse(localStorage.getItem('products')) || [];
let productsContainer = document.querySelector(".products-container");
let cartedItemId=JSON.parse(localStorage.getItem('cartedItemId')) || [];


products.forEach((product) => {
  let productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.innerHTML = `
  <img src=${product.image} alt="productimage">
  <h3>${product.name}</h3>
  <p>${product.price}</p>
  <button class="add-to-cart"
  data-id="${product.id}"
  data-name="${product.name}"
  data-price="${product.price}"
  data-image="${product.image}"
  data-categories="${product.categories}"
  data-description="${product.description}"
  >
  
  >Add to Cart</button>
  `;
  
  productsContainer.appendChild(productCard);
});


buttons=document.querySelectorAll('.add-to-cart')
buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    cartedId(button.dataset.id)
    button.classList.add('back-light-green')
    let product ={
      id: button.dataset.id,
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image,
      categories: button.datasetcategories,
      description: button.description,
    } 
    cartProducts.push(product)
    localStorage.setItem('products',JSON.stringify(cartProducts))
    button.innerText='Item Carted'
  })
})



function cartedId(id){
  cartedItemId.push(id)
  localStorage.setItem('cartedItemId',JSON.stringify(cartedItemId))
}


function CheckCarted(){
   let getIds=JSON.parse(localStorage.getItem('cartedItemId')) || [];
   buttons.forEach((button)=>{
     getIds.forEach((id)=>{
       if(id===button.dataset.id){
         button.innerText='Item Carted'
         button.classList.add('back-light-green')
       }
     })
   })
 }

 CheckCarted()