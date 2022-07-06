import React, {useContext} from 'react';
import { CartContest } from './ShoppingCart';

export default function Cart() {

    const { cart, removeProduct, addProduct } = useContext(CartContest)
  return (
    <div>
          <h2>Cart</h2>
          {cart.length ? 
            cart.map(item => (
                <div key={item.name}>
                <h3>{item.name}</h3>
                <p>
                    <button onClick={() => {removeProduct(item)}}>-</button>
                    {item.quantity}
                    <button onClick={() => {addProduct(item)}}>+</button>
                </p>
                <p>Subtotal: ${item.subtotal}</p>
                </div>
            ))
            : null
        }
        </div>
  )
}
