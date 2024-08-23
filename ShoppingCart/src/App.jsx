import {products as initialProducts} from './mocks/products.json'
import Header from './components/Header'
import Products from './components/Products'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import './App.css'

function App() {

  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App;
