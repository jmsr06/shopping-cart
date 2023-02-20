import { useContext } from "react"
import { FiltersContext } from "../context/filters"
import { products as initialProducts } from "../mocks/products.json"

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const categories = []
    initialProducts.map((product) => {
        if (!categories.includes(product.category)) {
            categories.push(product.category)
        }
    })

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && (
                    product.category == filters.category || filters.category == 'all'
                )
            )
        })
    }
    return { filterProducts,filters, setFilters, categories }
}