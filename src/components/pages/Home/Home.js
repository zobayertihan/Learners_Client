import React, { useEffect, useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import lottie from 'lottie-web';

const Home = () => {
    const courses = useLoaderData();
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../assets/studying-on-laptop.json'),
        });
        return () => {
            lottie.destroy();
        };
    }, [])
    return (
        // <div>
        //     <h1>Home Page</h1>
        //     <h4>Total Catagory: {catagories.length}</h4>
        //     {
        //         catagories.map(catagory => <li
        //             key={catagory.id} >
        //             <div className='flex flex-col items-center justify-center'>
        //                 <img src={catagory.image} alt="" />
        //                 <Link>{catagory.name}</Link>
        //             </div>
        //         </li>)
        //     }
        // </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Learner's
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Learn</span>
                    </span>{' '}
                    and become a master in Programming.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Here you can learn different types of programming languages and frameworks to develop yourself into a good programmer.
                </p>
            </div>
            <div className='container h-96' ref={container}>

            </div>
            <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-1">
                {
                    courses.map(course =>
                        <div key={course.id} className=" duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
                            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                                <img className='h-2/3 w-full m-2' src={course.image} alt="" />
                                <h6 className="mb-2 font-semibold leading-5">{course.name}</h6>
                                <Link to={`/course/${course.id}`}><button className='btn btn-info'>See Details</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;