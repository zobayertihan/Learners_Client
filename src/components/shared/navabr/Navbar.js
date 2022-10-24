import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import logo from '../../../assets/Images/Learners.png'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-gray-200">
            <div className="md:flex items-center justify-between mx-5">
                <div className="flex justify-between items-center py-4">
                    <div className='flex justify-center items-center mr-5'>
                        <img className='rounded-full w-10' src={logo} alt="" />
                        <Link className='text-black ml-5 text-xl font-bold' to={'/'}> Learner's</Link>
                    </div>
                    <div className="md:hidden">
                        <div
                            className="text-black-200 rounded-md "
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ?
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                )
                                :
                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="text-md text-center text-black font-semibold items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                Courses
                            </li>
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                FAQ
                            </li>
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                Blog
                            </li>
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                <Link to='/register'> Sign Up</Link>
                            </li>
                            <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                <Link to='/login'>Sign In</Link>
                            </li>
                            <button></button>
                            <div className="tooltip tooltip-bottom" data-tip="Person">
                                <img className="w-10 rounded-full" src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;