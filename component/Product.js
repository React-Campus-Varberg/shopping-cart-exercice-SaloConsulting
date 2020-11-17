import React, { Component } from 'react';
import styleBtn from '../css/add-to-cart-btn.module.css';

class Product extends Component {    
    constructor(props) {
        super(props);
    }

    /*
    *Add object to cart by Hooks
    */
    addCart(record) {
        record.inCart =  true;
        this.props.updateStateCart(record)
    }

    /*
    *Add object to cart by Hooks
    */
    removeCart(record) {
        record.inCart =  false;
    }



    render() {
        // const inCart = this.props.record.inCart;
        const productCard = {
            padding: "4rem 2rem",
            margin: "1rem",
            borderRadius: "6px",
            backgroundColor: 'bisque',
        };
        return (
            <div style={productCard}>
                <div>In cart: {String(this.props.record.inCart)}</div>
                <hr></hr>
                <h3>{this.props.record.name}</h3>
                <div>Tracks:{this.props.record.tracks} | Price: {this.props.record.price}</div>
                <div className={styleBtn.btnAdd}>
                    <button onClick={this.addCart.bind(this, this.props.record)}>Add to cart</button>
                </div>
                <div className={styleBtn.btnRemove}>
                    <button onClick={this.removeCart.bind(this, this.props.record)}>Remove from cart</button>
                </div>
            </div>
        );
    }
}
export default Product;