import React, { useContext, useState } from 'react';
import { FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/Learners.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const [value, setValue] = useState(true)
    const handleValue = (event) => {
        if (value === true) {
            event.target.value = false
            setValue(event.target.value);

        }
        else {
            event.target.value = true
            setValue(event.target.value);
        }


    }
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
                            {
                                user?.uid ?
                                    <>
                                        <button className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700" onClick={handleSignOut}>Sign Out</button>
                                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                            {
                                                user?.uid ?
                                                    <img className="w-10 rounded-full" src={user?.photoURL} alt='' /> :
                                                    <FaUserAlt className='bg-blue-500' />
                                            }
                                        </div></>
                                    :
                                    <>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <Link to='/register'> Sign Up</Link>
                                        </li>
                                        <li className="hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700">
                                            <Link to='/login'>Sign In</Link>
                                        </li>
                                    </>
                            }
                            <button onClick={handleValue}>{
                                value ?
                                    <div className="tooltip tooltip-bottom" data-tip="Dark" >
                                        <FaMoon />
                                    </div>
                                    :
                                    <div className="tooltip tooltip-bottom" data-tip="Light">
                                        <FaSun />
                                    </div>
                            }</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;