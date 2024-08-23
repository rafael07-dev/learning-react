import { Filters } from "./Filters"
import './Header.css'

export default function Header() {

    return(
        <header className="site-header">
            <h1>Shopping Cart </h1>
            <Filters/>
        </header>
    )
}