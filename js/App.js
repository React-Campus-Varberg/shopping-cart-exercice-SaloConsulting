import React from 'react';
// import ReactDOM from 'react-dom';
import Product from '../component/Product';
import Cart from '../component/Cart';


class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            cartRecords: [],
            latestCartItem: ''
        }

        //this tappar sin referens nedan och vi behöver binda this till funktionen addTodo
        this.addCart = this.addCart.bind(this);
    }

    //Add to state cart
    addCart(record) {
        this.setState((prevState) => ({
          cartRecords: prevState.cartRecords.concat(record)
        }));
        this.setState({ latestCartItem: record.name })
    }

    render() {
      let records = [
        {
          "id": 1,
          "name": "Wolfmother",
          "registration": new Date('2003-01-03'),
          "tracks": 7,
          "price": 10,
          "inCart": true
        },
        {
          "id": 2,
          "name": "The Strokes",
          "registration": new Date('2001-01-03'),
          "tracks": 12,
          "price": 20,
          "inCart": false
        },
        {
          "id": 3,
          "name": "Fu Manchu",
          "registration": new Date('1998-01-03'),
          "tracks": 18,
          "price": 15,
          "inCart": false
        },
        {
          "id": 4,
          "name": "Foo Fighters",
          "registration": new Date('2003-02-12'),
          "tracks": 10,
          "price": 25,
          "inCart": false
        }
      ];    
      const styleProductWrapper = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
      };
      return (
          <div>
              <Cart 
                stateCartLength={this.state.cartRecords.length} 
                stateCart={this.state.cartRecords}
                lastRecordAdded={this.state.latestCartItem}
              />
              <h1>Uppgift 2-3 - Shopping cart passing state to components</h1>
              <h2>Lista på skivor</h2>
              <div style={styleProductWrapper}>
                {records.map(record => 
                  <Product
                    record={record}
                    updateStateCart={this.addCart} 
                  />
                )}
              </div>
          </div>
        )
    }
}
export default App;
// ReactDOM.render(<App />, document.getElementById('root'));