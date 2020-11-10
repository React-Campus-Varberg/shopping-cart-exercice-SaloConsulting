
import React from 'react';
// import ReactDOM from 'react-dom';
import Cart from    './Cart';

function Header() {
  return (
    <div className="header-component">
        <div className="leftNav">Top-navigation</div>
        <div className="rightNac">
          <Cart />
        </div>
    </div>
  );
}

export default Header;
