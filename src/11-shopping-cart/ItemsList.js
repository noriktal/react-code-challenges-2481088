import React, {useContext} from 'react';
import { CartContest } from './ShoppingCart';

const items = [{
    name: 'apple',
    price: 0.39
  }, {
    name: 'banana',
    price: 0.79
  }, {
    name: 'cherry tomatoes',
    price: 3.99
  }];

export default function ItemsList() {

    const { addToCart } = useContext(CartContest)
  return (
    <div className='items'>
    <h2>Items</h2>
    {items.map(item => (
      <div key={item.name}>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button onClick={() => {addToCart(item)}}>Add to Cart</button>
      </div>)
    )}
  </div>
  )
}
