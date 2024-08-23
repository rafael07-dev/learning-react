import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filters() {

    const {filters, setFilters} = useFilters();

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    function handleChangeMinPrice(e) {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    function handleChangeCategory(e) {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor={minPriceFilterId}></label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}></label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='electronics'>Electrodomesticos</option>
                    <option value='jewelery'>Joyería</option>
                    <option value="men's clothing">Ropa de hombre</option>
                </select>
            </div>
        </section>
    )
}