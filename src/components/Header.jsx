import React from 'react'
import Filters from "./Filters"

const Header = () => {
    return (
        <div>
            <h1 className='font-bold text-center text-3xl mb-16'>React Shop <i className="fa-solid fa-cart-shopping"></i></h1>
            <Filters/>
        </div>
    )
}

export default Header
