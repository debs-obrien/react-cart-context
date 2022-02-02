import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import {
  CreateCartContext,
  CartContextProvider
} from '@learn-bit-react/ecommerce.ui.cart.cart-context';

const contextObject = CreateCartContext();

const MockUpdateContextComponent = () => {
  const context = useContext(contextObject);
  const item = {
    id: '123',
    title: 'Test Product',
    description: 'Test Product Description',
    price: 10,
    src: 'https://via.placeholder.com/150',
    alt: 'Test Product'
  };
  function addProductToCart() {
    context.addProductToCart({ item, quantity: 1 });
  }

  return (
    <div>
      <button
        className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-20"
        onClick={() => addProductToCart()}
      >
        Add to Cart
      </button>
    </div>
  );
};

const MockCartDisplay = () => {
  const context = useContext(contextObject);

  return (
    <div>
      <h2>Cart:</h2>
      {context.cart.map((cartItem, index) => {
        return (
          <div key={index}>
            <h2>{cartItem.item.title}</h2>
            <p> {cartItem.item.price}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded p-20"
              onClick={() => context.removeProductFromCart(cartItem.item)}
            >
              Remove from Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider context={contextObject}>
          <MockCartDisplay />
          <MockUpdateContextComponent />
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;
