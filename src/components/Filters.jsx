import React, { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

const Filters = () => {
    const {filters, setFilters, categories} = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='flex gap-5 flex-col md:flex-row items-center justify-between my-6'>
            <div className='flex items-center md:gap-4 flex-col md:flex-row'>
                <label htmlFor={minPriceFilterId}>Minimal price</label>
                <input value={filters.minPrice} onChange={handleChangeMinPrice} type='range' id={minPriceFilterId} min='0' max='1000' className='text-black bg-[#3C3B3C]' />
                ${filters.minPrice}
            </div>
            <div className='flex gap-4 '>
                <label htmlFor={categoryFilterId}>Categories</label>
                <select onChange={handleChangeCategory} id={categoryFilterId} className='text-white bg-[#3C3B3C] border rounded-sm w-40 h-7 capitalize'>
                    <option value='all'>All</option>
                    {categories.map((category, index) => (
                        <option key={index}>{category}</option>
                    ))}
                </select>
            </div>

        </section>
    )
}

export default Filters
