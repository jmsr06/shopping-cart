import React from 'react'
import { useCart } from '../hooks/useCart'

const Products = ({ products }) => {
    const { addCart, removeToCart, cart } = useCart()

    const checkProductInCart = (product) => {
        return cart != undefined && cart.some(item => item.id == product.id)
    }
    return (
        <main className='w-full'>
            <ul className='grid grid-cols-responsive lg:grid-cols-responsive-lg gap-5 md:gap-14 place-items-center'>
                {products.length >0 ? products.map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li className='bg-[#111] text-white rounded-md p-5 flex flex-col justify-center items-center gap-2' key={product.id}>
                            <img className='aspect-video rounded-sm w-full block object-cover bg-[#111]' src={product.thumbnail} alt={product.title} />
                            <div><strong>{product.title}</strong> - ${product.price}</div>
                            <div>
                                <button onClick={() => isProductInCart ? removeToCart(product) : addCart(product)} className={`${isProductInCart ? 'bg-red-500' : 'bg-[#191819]'} hover:opacity-50 py-2 px-4 rounded-md`}>
                                    {
                                        isProductInCart ?
                                            <i className="fa-regular fa-trash-can"></i>
                                            :
                                            <i className="fa-solid fa-cart-plus"></i>
                                    }
                                </button>
                            </div>
                        </li>
                    )
                }) :
                <p className='text-sm mt-10'>There aren't products with these characteristics.</p>}
            </ul>

        </main>
    )
}

export default Products
