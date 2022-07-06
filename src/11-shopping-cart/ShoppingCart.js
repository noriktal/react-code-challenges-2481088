import { useContext, createContext, useReducer } from 'react';
import Cart from './Cart';
import ItemsList from './ItemsList';
import Total from './Total';
import { CartReducer, initialState, addToCart, addProduct, removeProduct } from './reducer';



export const CartContest = createContext();


function ShoppingCart () {
  
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const value = {
    total: state.total,
    cart: state.cart,
    addToCart: (product) => dispatch(addToCart(product)),
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: (product) => dispatch(removeProduct(product))
  }

  return (
    <CartContest.Provider value={value}>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <ItemsList />
        <Cart />
      </div>
      <Total />
    </CartContest.Provider>
  )
}

export default ShoppingCart
