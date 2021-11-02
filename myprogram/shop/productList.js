import { products } from "./product.js";

    const productListElement = document.getElementById('products')
    products.forEach((product, index) => {
        const titleEle = document.createElement('div')
        titleEle.textContent = product.name


        productListElement.appendChild(titleEle)
    })
