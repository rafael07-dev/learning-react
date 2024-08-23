import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart';
import './Products.css';
import { AddToCartIcon } from './Icons';
import { RemoveFromCartIcon } from './Icons';

export default function Products({ products }) {

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {

                    const productInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img
                                src={product.image}
                                alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button style={{backgroundColor: productInCart ? 'red' : '#09f'}} onClick={() => { productInCart ? removeFromCart(product) : addToCart(product) }}>
                                    {
                                        productInCart ? <RemoveFromCartIcon /> : <AddToCartIcon/>
                                    }
                                </button>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
}