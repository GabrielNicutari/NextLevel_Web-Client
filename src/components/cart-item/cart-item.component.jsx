import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: {posterUrl, price, title, quantity}}) => (
    <div className="cart-item">
        <img src={posterUrl} alt="item" />
        <div className="item-details">
            <span className="name">{title}</span>
            <span className="price">{price}DKK</span>
            {quantity} x {price}DKK
        </div>
    </div>
)

export default CartItem;