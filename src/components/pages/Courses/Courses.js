import React from 'react';
import { FaClock, FaStar, FaUser } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                courses.map(course =>
                    <div key={course.id}>
                        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                                <img src={course.image}
                                    alt=""
                                    className="h-full w-full" />
                            </div>
                            <h2 className="mt-4 font-bold text-xl">{course.name}</h2>
                            <div className='grid grid-cols-2 gap-3 my-3'>
                                <div className='flex items-center'><>Rating : {course.rating}<FaStar className=' ml-1' /></></div>
                                <div className='flex items-center'><FaClock className=' mr-1' /> : {course.dur}</div>
                                <div className='flex items-center'>Enrolled: {course.enrolled}<FaUser className='ml-1' /></div>
                                <div className='flex items-center'>Price: {course.price}<TbCurrencyTaka /></div>
                            </div>
                            <Link to={`/course/${course.id}`}><button className='btn btn-info'>See Details</button></Link>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default Courses;