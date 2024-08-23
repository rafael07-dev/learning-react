import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

export const CartContext = createContext(); // creamos el contexto

export const ACTIONS = {
    addToCart: 'ADD_TO_CART',
    removeToCart: 'REMOVE_FROM_CART',
    clearCart: 'CLEAR_CART'
}

const initialState = []

const cartReducer = (state, action) => {

    const updateState = UPDATE_STATE_BY_ACTION[action.type];

    return updateState ? updateState(state, action) : state
}

const UPDATE_STATE_BY_ACTION = {
    [ACTIONS.addToCart]: (state, action) => {
        const { id } = action.payload

        const productInCart = state.findIndex(item => item.id === id)

        if (productInCart >= 0) {
            const newState = state.map(item => {
                if (item.id === id) {

                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            })

            return newState
        }

        const newState = [
            ...state,
            {
                ...action.payload, // product
                quantity: 1
            }
        ]

        return newState
    },

    [ACTIONS.removeToCart]: (state, action) => {
        const { id } = action.payload
        const newState = state.filter(item => item.id !== id)
        
        return newState
    },

    [ACTIONS.clearCart]: () => {
        const newState = []
        
        return newState
    }
}

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, initialState); // creamos el estado

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, clearCart, removeFromCart }
}

export const CartProvider = ({ children }) => { // proveer el contexto

    const { state, addToCart, clearCart, removeFromCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypesPropTypes = {
    children: PropTypes.node.isRequired
};