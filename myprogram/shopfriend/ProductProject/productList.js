import  {products}  from "./product.js";

document.addEventListener('DOMContentLoaded', function () {
    const productListElement = document.getElementById('products')
    products.forEach((product, index) => {
        const titleEle = document.createElement('h4')
        titleEle.textContent = product.name

    //-------------------------------------------------------------------------    
        const imgEle = document.createElement('img');
        imgEle.setAttribute("src", product.img);
        imgEle.setAttribute("height", 300);
        imgEle.setAttribute("width", 260);

    //--------------------------------------------------------------------------

        const idEle = document.createElement('div')
        idEle.classList.add('d-flex')

        const idLableEle = document.createTextNode('ID :')
        idEle.appendChild(idLableEle)

        const idValueEle = document.createElement('div')
        idValueEle.textContent = product.id
        idEle.appendChild(idValueEle)

    //-------------------------------------------------------------------------
        const typeEle = document.createElement('div')
        typeEle.classList.add('d-flex')

        const typeLabelEle = document.createTextNode('Type :')
        typeEle.appendChild(typeLabelEle)

        const typeValueEle = document.createElement('div')
        typeValueEle.textContent = product.type
        typeEle.appendChild(typeValueEle)

    //---------------------------------------------------------------------------
        const priceEle = document.createElement('div')
        priceEle.classList.add('d-flex')

        const priceLabelEle = document.createTextNode('Price : ')
        priceEle.appendChild(priceLabelEle)

        const priceValueEle = document.createElement('div')
        priceValueEle.textContent = product.price
        priceEle.appendChild(priceValueEle)

    //-----------------------------------------------------------------------------
        const qtyInStockEle = document.createElement('div')
        qtyInStockEle.classList.add('d-flex')

        const qtyInStockLabelEle =document.createTextNode('In stock : ')
        qtyInStockEle.appendChild(qtyInStockLabelEle)

        const qtyInStockValueEle = document.createElement('div')
        qtyInStockValueEle.textContent = product.qtyInStock
        qtyInStockEle.appendChild(qtyInStockValueEle)

    //-----------------------------------------------------------------------------
        const cardElem = document.createElement('div')
        cardElem.classList.add('card', 'w-25')

        const cardBodyElem = document.createElement('div')
        cardBodyElem.classList.add('card-body')
    
    //-----------------------------------------------------------------------------
        cardBodyElem.appendChild(titleEle)
        cardBodyElem.appendChild(imgEle)
        cardBodyElem.appendChild(idEle)
        cardBodyElem.appendChild(typeEle)
        cardBodyElem.appendChild(priceEle)
        cardBodyElem.appendChild(qtyInStockEle)
        cardElem.appendChild(cardBodyElem)
        productListElement.appendChild(cardElem)
    })
}, false);