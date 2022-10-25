import React from 'react';
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
                            <Link to={`/course/${course.id}`}><button className='btn btn-info'>See Details</button></Link>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default Courses;