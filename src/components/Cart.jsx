import React, { useId, useState } from 'react'
import { useCart } from '../hooks/useCart';

function CartItem({ thumbnail, price, title, quantity, addCart }) {
    return (
        <li className='border-b border-gray-600 pb-4 flex flex-col justify-center items-center my-5'>
            <img src={thumbnail} alt={title} className='aspect-video w-full' />
            <div className='mt-3'>
                <strong>{title}</strong> - ${price}
            </div>
            <footer className='flex gap-2 justify-center items-center'>
                <small >
                    Qty: {quantity}
                </small>
                <button onClick={addCart} className='px-2 py-1 bg-[#191819] hover:opacity-50 rounded-lg'>+</button>
            </footer>
        </li>
    )
}

const Cart = () => {
    const [showCart, setShowCart] = useState(false)
    // const cartCheckboxId = useId();
    const { cart, clearCart, addCart } = useCart()
    const handleOpenCart = () => {
        setShowCart(!showCart)
    }
    return (
        <div>
            <label className='cart-button flex justify-center items-center text-xl p-1 absolute right-8 top-6 z-[9999] rounded-full hover:opacity-50 cursor-pointer' onClick={handleOpenCart}>
                {showCart ?
                    <i className="fa-solid fa-xmark text-red-500 fixed z-[9999]"></i>
                    :
                    <i className="fa-solid fa-cart-shopping"></i>
                }
            </label>
            {/* <input id={cartCheckboxId} type='checkbox' hidden /> */}
            <aside className={`h-screen overflow-y-auto cart z-[999] bg-black p-8 fixed right-0 top-0 w-52 md:w-72 ${showCart ? 'block' : 'hidden'}`}>
                <ul className='mt-8'>
                    {cart.length >0  ? cart.map(item =>
                        <CartItem key={item.id} {...item}
                            addCart={() => addCart(item)}
                        />):
                        <p className='text-center text-sm'>There aren't products in the shopping cart.</p>}
                </ul>
                {cart.length > 0 &&
                    <div className='w-full flex justify-center items-center mt-5'>
                        <button onClick={clearCart} className='px-5 py-2 bg-[#191819] hover:opacity-50 rounded-lg'><i className="fa-regular fa-trash-can"></i></button>
                    </div>
                }
            </aside>
        </div>
    )
}

export default Cart
