let cartProducts=[]

let productsContainer = document.querySelector(".products-container");
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

    let product ={
    id: button.dataset.id,
    name: button.dataset.name,
    price: button.dataset.price,
    image: button.dataset.image,
    categories: button.datasetcategories,
    description: button.description
    } 
    cartProducts.push(product)
    localStorage.setItem('products',JSON.stringify(cartProducts))

  })
})
