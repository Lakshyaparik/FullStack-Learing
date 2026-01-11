let productsContainer = document.querySelector('.products-container')
products.forEach(product => {
  let productCard = document.createElement('div')
  productCard.className ='product-card'

  productCard.innerHTML = `
  <img src=${product.image} alt="productimage">
  <h3>${product.name}</h3>
  <p>${product.price}</p>
  <button>Add to Cart</button>
  `

  productsContainer.appendChild(productCard)

});


