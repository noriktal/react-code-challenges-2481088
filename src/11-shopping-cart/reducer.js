
export const initialState = {
    //currentProduct: {name: '', quantity:0, price:0},
    cart: [], 
    total: 0
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, {...action.payload, quantity: 0}]};
        case 'ADD_PRODUCT':
            const productIndex1= state.cart.findIndex(item => item?.name === action.payload.name);
            const newQuantity1 = productIndex1 === -1 ?  1 : state.cart[productIndex1].quantity + 1;
            const newProduct1 = {...action.payload, quantity: newQuantity1, subtotal: action.payload.price*newQuantity1};

            return ({
                    total: state.total + newProduct1.price,
                    cart: productIndex1 === -1 
                    ? [...state.cart, newProduct1] 
                    : state.cart.map((item, index) => {
                        if(index === productIndex1) {
                            return newProduct1;
                        }else{
                            return item;
                        }
                    }),
                });
        case 'REMOVE_PRODUCT':
            const productIndex2= state.cart.findIndex(item => item.name === action.payload.name);
            const newQuantity2 = productIndex2 === -1 ?  1 : state.cart[productIndex2].quantity - 1;
            const newProduct2 = {...action.payload, quantity: newQuantity2, subtotal: action.payload.price*newQuantity2};

            return {
                total: state.total - + newProduct2.price,
                cart: productIndex2 === -1 
                ? [...state.cart, newProduct2] 
                : state.cart.map((item, index) => {
                    if(index === productIndex2) {
                        return newProduct2;
                    }else{
                        return item;
                    }
                }),
            };
        default:
           return state;
    }
}

// Action Creators

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
});

export const removeProduct = (product) => ({
    type: 'REMOVE_PRODUCT',
    payload: product
});