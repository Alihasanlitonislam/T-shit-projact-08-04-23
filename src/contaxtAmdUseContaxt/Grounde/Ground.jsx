import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Mather from '../Mather/Mather';
import Uncal from '../Uncal/Uncal';
export const manyCantext = createContext(0)
const Ground = () => {
    const [many, setMany] = useState(0)
    return (
        <manyCantext.Provider value={[many, setMany]}>
            <div className='w-11/12 mx-auto mt-5 border p-5'>
                <h1 className='text-center text-6xl'>Grounded Section</h1>
                <h1 className='text-center text-xl text-red-500'>Many cantaxt : {many}</h1>
                <div className='flex  justify-around gap-5 mt-4'>
                    <Father className=' border' />
                    <Mather className=' border ' />
                    <Uncal className='border ' />
                </div>
            </div>
        </manyCantext.Provider>
    );
};

export default Ground;