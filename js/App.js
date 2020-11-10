import React from 'react';
// import ReactDOM from 'react-dom';
import Product from '../component/Product';

function App() {
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

  console.log('test - records');
  console.log(records);
  const productWrapper = {
    display: "flex",
  };
  return (
    <div>
        <h1>Uppgift 2 - Shopping cart using React Hooks</h1>
        <p>Hur jag har gjort?</p>
        <ul>
          <li>Local array med json objets</li>
          <li>Jag har tre olika komponenter: Cart, Header och Products</li>
          <li>I products har jag implementerat on-click actions när man trycker på "Add to cart" och "Remove from cart"</li>
          <li>Vad jag skall göra:</li>
          <li>Använda React Hooks som hanterar en array med object som är i cart.</li>
        </ul>
        <p>Jag lyckas inte med att implementera state-hook. Jag antar detta för jag använder av klass-komponenter? Ska jag möjligen skapa funktionella komponenter för de två olika knapparna, add-to-cart och remove-from-cart??</p>
        <h2>Lista på skivor</h2>
        <div style={productWrapper}>
        {records.map(record => 
          <Product
            record={record}
          />
        )}
        </div>
    </div>
  );
}

export default App;
