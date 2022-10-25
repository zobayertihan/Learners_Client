import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses);
    return (
        <div>
            {
                courses?.map(course => <li
                    key={course.id} >
                    <div className='flex flex-col items-center justify-center'>
                        <img src={course.image} alt="" />
                        <Link to={`/course/${course.id}`} >{course.name}</Link>
                    </div>
                </li>)
            }

        </div>
    );
};

export default Courses;