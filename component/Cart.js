import React from 'react';

/**
 * The cart
 * @param {current cart state} props 
 */
function Cart(props) {
    let cartLength = props.stateCartLength;
    let lastItem = props.lastRecordAdded;

    //Style
    const cart = {
      padding: "1rem",
      margin: "1rem",
      borderRadius: "6px",
      backgroundColor: 'yellow',
      float: 'right',
    };
    return (
      <details style={cart}>
        <summary>Total item in cart: {cartLength}</summary>
        <p>Last item added: {lastItem}</p>
      </details>
    )
}

export default Cart;