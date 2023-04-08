import React, { useContext } from 'react';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
const Cart = ({ cart, removeHendal }) => {
    const { name, _id, price, picture } = cart;
    return (
            <div className='flex justify-between items-center mb-4 bg-gray-300 p-5 rounded-md shadow-md'>
                <div className='flex items-center gap-4'>
                    <img src={picture} alt="" className='w-[50px] h-[50px] rounded-md' />
                    <div>
                        <h1>{name}</h1>
                        <p>Price: ${price}</p>
                    </div>
                </div>
                <div>
                    <ArchiveBoxXMarkIcon onClick={() => removeHendal(_id)} className="h-6 w-6 text-blue-500" />
                </div>
            </div>
    );
};

export default Cart;