import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prdt)=> total+prdt.price,0)
    // const shippingCharge = cart.reduce((total, prdt)=> total+prdt.shipping,0)
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total+product.price;
    // }
    let shipping = 0;
    if (total > 40) {
        shipping = 15.00;
    }
    else if(total > 20){
        shipping = 7;
    }
    else if(total >30){
        shipping= 15.50;
    }
    else if(total>0){
        shipping=5.00;
    };
    const tex =Math.round(total /5);
    const grandTotal = (total + shipping +tex);
    const formatNumber = number =>{
        const precision = number.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
            <h4>Order summary</h4>
            <h4>Items ordered: {cart.length}</h4>
            <p>Product price:{formatNumber(total)}</p>
            <p>shipping:{shipping}</p>
            <p><small>Vat + Text {tex}</small></p>
            <p>Total price:{grandTotal}</p>
        </div>
    );
};

export default Cart;