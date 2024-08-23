import { useId } from 'react';
import { useCart } from '../hooks/useCart';
import './Cart.css';
import { CartIcon } from './Icons';

export default function Cart() {

    const cartCheboxId = useId()
    const { cart, addToCart, clearCart, removeFromCart } = useCart();

    function CartItem({ image, price, title, quantity, addToCart, removeFromCart }) {
        return (
            <li className='cart-item'>
                <img
                    src={image}
                    alt={title}
                />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>

                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button onClick={addToCart}>+</button>
                    <button onClick={removeFromCart}>Delete</button>
                </footer>
            </li>
        )
    }

    return (
        <>
            <label className='cart-button' htmlFor={cartCheboxId}>
                <CartIcon />
            </label>
            <input id={cartCheboxId} type="checkbox" hidden/>
            <div className='cart-products'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            removeFromCart={() => removeFromCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <button onClick={clearCart}>Clear</button>
            </div>
        </>
    )
}