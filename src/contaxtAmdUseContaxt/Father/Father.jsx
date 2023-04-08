import React from 'react';
import MySlef from '../MySlef/MySlef';
import Brather from '../Brather/Brather';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='border border-orange-400 p-4 w-full'>
            <h1 className='text-center'>Father Section</h1>
            <div className='flex justify-between gap-4 mt-4'>
                <MySlef />
                <Sister />
                <Brather />
            </div>
        </div>
    );
};

export default Father;