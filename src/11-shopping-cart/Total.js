import React, { useContext } from 'react';
import { CartContest } from './ShoppingCart';


export default function Total() {
    const { total } = useContext(CartContest);
  return (
    <div className='total'>
        <h2>Total: ${total}</h2>
      </div>
  )
}
