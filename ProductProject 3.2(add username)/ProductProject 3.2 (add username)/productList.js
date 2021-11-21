import { products } from './products.js';
import { cartEvents } from './cart.js';

const btnToggleSearch = document.getElementById('toggleSearch');
const cartCount = document.getElementById('cart-count')
let cartItems = { items: [], itemId: [], totalQty: 0 } //array เก็บข้อมูลสินค้าที่กดใส่ตะกร้า

const removeCartBtn = document.getElementById('remove-cart')
const area = document.getElementById('search-area')
let isOpen = !area.getAttribute('data-isOpen')

const updateArea = () => {
    if (isOpen) {
        area.setAttribute('class', 'slide-out-bck-center')
    } else {
        area.setAttribute('class', 'slide-in-fwd-center')
    }
}

const showProducts = products => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = (
        products.length > 0 ? `Found ${products.length} item(s).` : 'Not found.'
    )

    const productsElem = document.getElementById('products')
    productsElem.innerHTML = null

    products.forEach(product => {
        const titleEle = document.createElement('h4')
        titleEle.style.textAlign = 'center'
        titleEle.textContent = product.name

        //-------------------------------------------------------------------------    

        const imgEle = document.createElement('img');
        imgEle.setAttribute('src', `./productPicture/${product.id.toLowerCase()}.jpeg`);
        imgEle.setAttribute('class', 'card-img-top')

        //--------------------------------------------------------------------------

        const idEle = document.createElement('div')
        idEle.textContent = `ID: ${product.id}`

        //-------------------------------------------------------------------------

        const typeEle = document.createElement('div')
        typeEle.textContent = `Type: ${product.type}`

        //---------------------------------------------------------------------------

        const priceEle = document.createElement('div')
        priceEle.textContent = `Price: ${product.price}`

        //-----------------------------------------------------------------------------

        const qtyInStockEle = document.createElement('div')
        qtyInStockEle.textContent = `Stock: ${product.qtyInStock}`

        //-----------------------------------------------------------------------------


        const cardElem = document.createElement('div')
        cardElem.setAttribute('class', 'card w-25 d-inline-block m-3')

        const cardBodyElem = document.createElement('div')
        cardBodyElem.setAttribute('class', 'card-body')

        //-----------------------------------------------------------------------------

        const addCartBtn = document.createElement('button')
        addCartBtn.setAttribute('class', 'btn btn-outline-dark m-3')
        addCartBtn.textContent = 'Add to cart'



        //เพิ่ม : ให้กด add to cartจะเพิ่ม id ชื่อ ราคา จำนวนของสินค้าแต่ละชนิดที่กด add และแสดงเลขที่รูปตะกร้าทีละ1  
        addCartBtn.addEventListener('click', () => {
            //สร้าง itemIncart เพื่อเก็บ id ชื่อ ราคา จำนวนของสินค้าแต่ละชนิดที่กด add เข้ามา
            let itemIncart = { id: product.id, name: product.name, price: product.price, qty: 1 };



            //check ว่าถ้าในตะกร้าไม่มีสินค้าอยู่เลย หรือ ไม่เคยมีสินค้าที่พึ่งกดเพิ่มเข้ามา
            //จะทำการเพิ่ม id ชื่อ ราคา และจำนวนสินค้า(=1) เข้าไปใน cartItems
            if (cartItems.items.length == 0 || cartItems.itemId.includes(itemIncart.id) == false) {
                cartItems.items.push(itemIncart)
                cartItems.itemId.push(itemIncart.id)

                //check ว่าถ้าเคยมีสินค้าที่พึ่งกดเพิ่มมาอยู่ในตะกร้าแล้ว จะทำการเพิ่ม qty ในกับสินค้าตัวนั้นอีก 1
            } else {
                for (let checkItemInCart of cartItems.items) {
                    if (checkItemInCart.id == itemIncart.id) {
                        checkItemInCart.qty++;
                    }
                }
            }

            //ทำการนับ qty ทั้งหมด เพื่อเอามาโชว์ที่ไอคอนตะกร้าว่าตอนนี้มีสินค้าที่กด add to cart ไปแล้วกี่ชิ้น
            cartItems.totalQty = cartItems.items.reduce((sum, item) => { return sum += item.qty }, 0);

            // console.log(cartItems)

            cartCount.textContent = cartItems.totalQty //แสดงจำนวนสินค้าทั้งหมดที่อยู่ในตะกร้า

            // เพิ่ม :

            cartEvents.add(product);

        })

        //-----------------------------------------------------------------------------

        cardBodyElem.append(titleEle, imgEle, idEle, typeEle, priceEle, qtyInStockEle, addCartBtn)
        cardElem.appendChild(cardBodyElem)
        productsElem.appendChild(cardElem)
    })
}

window.addEventListener('DOMContentLoaded', event => {
    updateArea()
    showProducts(products)
    if (+localStorage.getItem('darkModeStatus') === 1) {
        box.checked = true
    } else {
        box.checked = false
    }
    updateTheme()
})

function updateTheme() {
    box.checked ? document.body.classList.add("bg-dark") : document.body.classList.remove("bg-dark");
    // if(localStorage.getItem('darkModeStatus') == true){
    //     document.body.classList.add("bg-dark")
    // }else{
    //     document.body.classList.remove("bg-dark")
    // }
}

btnToggleSearch.addEventListener('click', event => {
    event.preventDefault()
    isOpen = !isOpen
    btnToggleSearch.setAttribute('data-isOpen', isOpen)
    updateArea()
})

//แก้ : เมื่อกดปุ่มถังขยะ จะทำการลบสินค้าในตะกร้าทั้งหมด
removeCartBtn.addEventListener('click', event => {
    event.preventDefault()
    cartItems = { items: [], itemId: [], totalQty: 0 } //ลบข้อมูลสินค้าในตะกร้าทั้งหมด
    cartCount.textContent = 0 //ให้ไอคอนตะกร้าแสดงจำนวนสินค้าในตะกร้าเป็น 0

    // let count = Number(cartCount.textContent)
    // if ((count - 1) >= 0) {
    //     cartCount.textContent = count - 1
    // }
})

const searchBar = document.getElementById('search-bar')
searchBar.addEventListener('keyup', () => {
    const keyword = searchBar.value.trim().toLowerCase()
    const filteredProducts = products.filter(product =>
        product.id.toLowerCase().includes(keyword) ||
        product.name.toLowerCase().includes(keyword)
    )
    showProducts(filteredProducts)
})

const themeSwitch = document.getElementById('box');
themeSwitch.addEventListener('change', () => {
    //   document.body.classList.toggle('bg-dark');
});


const box = document.getElementById('box');
box.addEventListener('click', () => {
    if (+localStorage.getItem('darkModeStatus') === 1) {
        localStorage.setItem('darkModeStatus', 0)
    } else {
        localStorage.setItem('darkModeStatus', 1)
    }
    updateTheme()
});

// window.addEventListener('load', (event) => {
//     let status = localStorage.getItem('darkModeStatus');
//             status = JSON.parse(status);
//   if (status === "false"){
//     console.log("hello");
//     document.body.classList.add("bg-dark"); 
//     document.getElementById('box').checked = false;
//   }
// });

//-----------------------------------------------------------------------------------

// username use cookie
const logginbtn = document.getElementById('toggleLogin');
const textusername = document.getElementById('usernametext');

logginbtn.addEventListener('click', event => {
    let userinput;
    let person = prompt("Please enter your Username:");
    if (person == null || person == "") {
        userinput = "guest";
        CookieUtil.set("username", `${userinput}`);
    } else {
        userinput = person;
        CookieUtil.set("username", `${userinput}`);
    }
    textusername.textContent = userinput;
})

document.addEventListener('DOMContentLoaded', function() {
    if(CookieUtil.get("username") === null){
        textusername.textContent = "guest";
    }else{
        textusername.textContent = CookieUtil.get("username");
    }
 }, false);

//-------------------------------------------------------------------------------------
class CookieUtil {
    static get(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;


        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(
                document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
            );
        }

        return cookieValue;
    }

    static set(name, value, expires) {
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        if (expires) {
            cookieText += `; max-age=${expires}`;
        }
        console.log(`cookieText = ${cookieText}`);
        document.cookie = cookieText;
    }

    static unset(name) {
        CookieUtil.set(name, "none", new Date(0));
    }
}











