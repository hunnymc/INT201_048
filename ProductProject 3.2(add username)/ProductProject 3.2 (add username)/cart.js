export const cartEvents = {
    productadded: [],
    add: function (product) {
            
        cartEvents.productadded = localStorage.getItem('cart');
        if (cartEvents.productadded == undefined || cartEvents.productadded.length === 0) {
            cartEvents.productadded = [];
        } else {
            cartEvents.productadded = JSON.parse(cartEvents.productadded);
        }

        let product_Id = product.id;

        if (product.qtyInStock > 0) {
            let index = cartEvents.productadded.findIndex((item) => item.productId === product_Id);
            if (index !== -1) {

                cartEvents.productadded[index].qty++;
            } else {
            //   let cartAdd = {
            //     tshirtId: tshirt.tshirtId,
            //     qty: 1,
            //   };
              cartEvents.productadded.push({productId: product.id,qty: 1});
            }
        }
    localStorage.setItem('cart', JSON.stringify(cartEvents.productadded));
    }
}