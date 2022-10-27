import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/Learners.png'

const Footer = () => {
    return (
        <footer className="px-4 mt-12 divide-y dark:bg-gray-300 ">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <div rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                            <img className='w-10 rounded-full' src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold uppercase">Learner's</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3 flex items-center flex-col justify-center">
                        <h3 className="tracking-wide uppercase ">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" to="/courses">Courses</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 flex items-center flex-col justify-center">
                        <h3 className="tracking-wide uppercase ">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="#">About Us</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 flex items-center flex-col justify-center">
                        <div className="uppercase ">Social media</div>
                        <div className="flex justify-center space-x-3">
                            <Link rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                <FaFacebook className='text-blue-400 h-6 w-6'></FaFacebook>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <FaTwitter className='text-sky-700 h-6 w-6'></FaTwitter>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                <FaInstagram className='text-pink-500 h-6 w-6'></FaInstagram>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center ">© 2022 Learner's. All rights reserved.</div>
        </footer>
    );
};

export default Footer;