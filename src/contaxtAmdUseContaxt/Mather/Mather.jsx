import React, { useContext } from 'react';
import { manyCantext } from '../Grounde/Ground';

const Mather = () => {
    const [many, setMany] = useContext(manyCantext)
    return (
        <div className='border border-orange-400 p-4 w-full text-center'>
            <h1 className='text-3xl'>Mather Section</h1>
            <h1 className='text-xl text-red-500'>Many Cantaxt : {many}</h1>
            <button onClick={()=> setMany(many - 1000)} className='w-full p-2 rounded-md bg-orange-400 text-black font-bold text-xl'>Click Many Mainas </button>

        </div>
    );
};

export default Mather;