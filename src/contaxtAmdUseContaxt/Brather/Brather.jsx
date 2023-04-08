import React, { useContext } from 'react';
import { manyCantext } from '../Grounde/Ground';

const Brather = () => {
    const [many] = useContext(manyCantext)
    return (
        <div className='border border-orange-400 p-4 w-full'>
            <h1>Brather Section</h1>
            <p>Many : {many}</p>
        </div>
    );
};

export default Brather;