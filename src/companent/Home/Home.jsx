import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TiShit from '../TiShit/TiShit';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const phones = useLoaderData()
    const [cart, setCart] = useState([])
    const byNewHandels = (phone) => {
        const notifacation = cart.find(cart => cart.picture === phone.picture)
        if (notifacation) {
            const newToast = toast(`Don't try`)
            return newToast
        }
        else {
            const newPhones = [...cart, phone]
            setCart(newPhones)
        }
    }
    const removeHendal = (id) => {
        const remove = cart.filter(cart => cart._id !== id)
        setCart(remove)
    }
    return (
            <div className='w-11/12 mx-auto pt-3 grid grid-cols-3 gap-4'>
                <div className='col-span-2 grid grid-cols-3 gap-4'>
                    {
                        phones.map(phone => <TiShit
                            key={phone._id}
                            phone={phone}
                            byNewHandels={byNewHandels}

                        ></TiShit>)
                    }
                </div>
                <div className='p-4 bg-orange-300 rounded-md h-[100%]'>
                    <h1 className='text-center text-4xl font-bold text-white'>Order Samari {cart.length}</h1>
                    <h1 className='text-center p-3 text-xl bg-slate-400 text-black my-2 rounded-md shadow-md hover:bg-orange-400 hover:text-white'>{cart.length > 0 ? 'thanks you have the amayount' : 'please add the tshit'}</h1>
                    {
                        cart.map(cart => <Cart
                            key={cart._id}
                            cart={cart}
                            removeHendal={removeHendal}
                        ></Cart>)
                    }
                    <ToastContainer />
                </div>
            </div>
    );
};

export default Home;