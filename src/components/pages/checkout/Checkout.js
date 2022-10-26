import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Checkout = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    const check = () => {
        toast.success('Congratulation. Purchase Complete')
    }
    return (
        <div>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='h-full w-screen flex justify-center mt-6'>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={check}>
                        <div className='flex gap-5'>
                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Full Name
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name='name' type="text" placeholder={user.displayName} readOnly />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='email' id="email" type="email" placeholder={user.email} readOnly />
                                </div>
                            </div>
                            <div>
                                <h3>Course: {course.name}</h3>
                                <img src={course.image} alt="" />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h4 className='my-4'>Total: {course.price} </h4>
                            <TbCurrencyTaka className='flex items-center justify-center' />
                        </div>
                    </form>
                    <div className="flex items-center justify-between">
                        <button onClick={check} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="">
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
            <div className=" items-center justify-between">
                <Link to={'/'}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="">
                    Home
                </button></Link>
            </div>
        </div>
    );
};

export default Checkout;