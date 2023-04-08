import React from 'react';

const TiShit = ({phone, byNewHandels}) => {
    const {name,picture,price} = phone;
    return (
        <div className='p-4 border rounded-md'>
            <img src={picture} alt=""  className='w-full h-48 rounded-md'/>
            <h1 className='pt-3 text-xl font-bold'>Name : {name}</h1>
            <p className='py-3 text-xl'>Price : <span className='text-orange-400'>${price}</span></p>
            <button onClick={() =>byNewHandels(phone)} className='w-full p-2 text-xl rounded-md bg-orange-500 text-black'>By New</button>
        </div>
    );
};

export default TiShit;