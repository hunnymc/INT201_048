import { products } from './products.js';

document.addEventListener('DOMContentLoaded', function () {
    const productListElement = document.getElementById('products')
    products.forEach((product, index) => {
        const titleEle = document.createElement('h4')
        titleEle.style.textAlign = 'center'
        titleEle.textContent = product.name

    //-------------------------------------------------------------------------    
        const imgEle = document.createElement('img');                               //img
        imgEle.setAttribute("src", product.img);
        imgEle.setAttribute("height", 300);
         imgEle.setAttribute("width", 260);
    
    //--------------------------------------------------------------------------
        const idEle = document.createElement('div')
        idEle.classList.add('row')                       

        const idLabel = document.createTextNode('ID :')
        const idLabelEle = document.createElement('div')
        idLabelEle.classList.add('col-4')  
        idLabelEle.appendChild(idLabel)  
        idEle.appendChild(idLabelEle)                       //สร้าง idLabelEle 'ID :' ให้ไปต่อเป็น Child ของ idEle

        const idValueEle = document.createElement('div')
        idValueEle.classList.add('col-8')    
        idValueEle.textContent = product.id                 //idValueEle เป็น product.id
        idEle.appendChild(idValueEle)                       //ไปต่อเป็น Child ของ idEle

    //-------------------------------------------------------------------------
        const typeEle = document.createElement('div')
        typeEle.classList.add('row')

        const typeLabel = document.createTextNode('Type :')
        const typeLabelEle = document.createElement('div')
        typeLabelEle.classList.add('col-4')  
        typeLabelEle.appendChild(typeLabel)  
        typeEle.appendChild(typeLabelEle)

        const typeValueEle = document.createElement('div')
        typeValueEle.classList.add('col-8')  
        typeValueEle.textContent = product.type
        typeEle.appendChild(typeValueEle)

    //---------------------------------------------------------------------------
        const priceEle = document.createElement('div')
        priceEle.classList.add('row')

        const priceLabel = document.createTextNode('Price : ')
        const priceLabelEle = document.createElement('div')
        priceLabelEle.classList.add('col-4')  
        priceLabelEle.appendChild(priceLabel)  
        priceEle.appendChild(priceLabelEle)

        const priceValueEle = document.createElement('div')
        priceValueEle.classList.add('col-8') 
        priceValueEle.textContent = product.price
        priceEle.appendChild(priceValueEle)

    //-----------------------------------------------------------------------------
        const qtyEle = document.createElement('div')
        qtyEle.classList.add('row')

        const qtyLabel = document.createTextNode('In stock : ')
        const qtyLabelEle = document.createElement('div')
        qtyLabelEle.classList.add('col-4')  
        qtyLabelEle.appendChild(qtyLabel)  
        qtyEle.appendChild(qtyLabelEle)

        const qtyValueEle = document.createElement('div')
        qtyValueEle.classList.add('col-8') 
        qtyValueEle.textContent = product.qtyInStock
        qtyEle.appendChild(qtyValueEle)

    //----------------------------------------------------------------------------- 
        const cardElem = document.createElement('div')
        cardElem.classList.add('card', 'w-50')

        const cardHeaderElem = document.createElement('div')
        cardHeaderElem.classList.add('card-header')

        const cardBodyElem = document.createElement('div')
        cardBodyElem.classList.add('card-body')
    
        const cardColumnL = document.createElement('div')
        cardColumnL.classList.add('col-sm')
        const cardColumnR = document.createElement('div')
        cardColumnR.classList.add('col-sm')

        const cardColumn = document.createElement('div')
        cardColumn.classList.add('row')

    //-----------------------------------------------------------------------------
        cardHeaderElem.appendChild(titleEle)
        cardBodyElem.appendChild(cardHeaderElem)
        cardColumnL.appendChild(imgEle)
        cardColumnR.appendChild(idEle)
        cardColumnR.appendChild(typeEle)
        cardColumnR.appendChild(priceEle)
        cardColumnR.appendChild(qtyEle)
        cardColumn.appendChild(cardColumnL)
        cardColumn.appendChild(cardColumnR)
        cardBodyElem.appendChild(cardColumn)
        cardElem.appendChild(cardBodyElem)
        productListElement.appendChild(cardElem)
    })
}, false);