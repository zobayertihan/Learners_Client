import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { ReactToPdf } from 'react-to-pdf';

const Course = () => {
    const ref = React.createRef();
    const course = useLoaderData();
    return (
        <div>
            {/* <div>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div style={{ width: 500, height: 500, background: 'blue' }} ref={ref} />
            </div> */}
            <div className='flex items-end justify-end p-5 ' >
                <button onClick={''} className='h-8 w-8 tooltip tooltip-bottom' data-tip="Print"><FaPrint className='h-8 w-8' /></button>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {course.name}
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {course.description}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="rounded shadow-lg sm:h-full"
                            src={course.image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className='p-10'>
                <Link><button className=' bg-gray-300 hover:text-violet-600 hover:underline hover:underline-offset-4 transition duration-700 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide rounded shadow-md md:w-auto bg-dark-400 focus:shadow-outline focus:outline-none p'>Get Premium Access</button></Link>
            </div>
        </div>

    );
};

export default Course;