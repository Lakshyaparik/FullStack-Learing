let cartContainer=document.querySelector('.cart-container')

let cartProducts = JSON.parse(localStorage.getItem('products')) || [];

cartProducts.forEach( product => {
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
      
  >Buy Now</button>
  `;

  cartContainer.appendChild(productCard);
});
