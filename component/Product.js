import React, { Component, useState } from 'react';
import styleBtn from '../css/add-to-cart-btn.module.css';

class Product extends Component {
    
    /*
    *Add object to cart by Hooks
    */
    addCart(record) {
        record.inCart =  true;
        console.log(record);
        this.setState({inCart: true});
    }

    /*
    *Add object to cart by Hooks
    */
    removeCart(record) {
        record.inCart =  false;
        console.log(record);
        this.setState({inCart: false});
    }



    render() {
        // const inCart = this.props.record.inCart;
        const productCard = {
            padding: "4rem 2rem",
            margin: "1rem",
            borderRadius: "6px",
            backgroundColor: 'bisque',
        };

        // const [sampleState, setState] = useState('hello world');

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
            {/* {this.props.record.inCart ? (
                <div className={styleBtn.btnAdd}>
                    <button onClick={this.addCart.bind(this, this.props.record)}>Add to cart</button>
                </div>
            ) : (
                <div className={styleBtn.btnRemove}>
                    <button onClick={this.removeCart.bind(this, this.props.record)}>Remove from cart</button>
                </div>
            )} */}
        </div>
        );
    }
}
export default Product;