import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-stone-500'>
            <div className='w-11/12 mx-auto flex justify-between items-center '>
            <div className='p-3'>
                <img className='w-14 rounded-md' src="data:image/png;base64,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" alt="" />
            </div>
            <div className='text-right'>
                <div onClick={() => setOpen(!open)} className=' flex items-end justify-end md:hidden'>
                    <span>
                        {open === true ?
                            <XMarkIcon className="h-8 w-8 text-orange-500" />
                            :<Bars3Icon className="h-8 w-8 text-orange-500" />
                        }
                    </span>
                </div>
                <nav className={` flex flex-col md:flex-row md:text-3xl md:text-white uppercase absolute md:static ${open? 'right-4 ': '-right-36'}`}>
                    <Link to='/' className='mr-4'>Home</Link>
                    <Link to='order' className='mr-4'>Order</Link>
                    <Link to='review' className='mr-4'>Review</Link>
                    <Link to='about' className='mr-4'>About</Link>
                    <Link to='contact' className='mr-4'>Contact</Link>
                </nav>
            </div>
        </div>
        </div>
    );
};

export default Header;