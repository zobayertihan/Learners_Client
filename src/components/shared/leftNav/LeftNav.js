import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://server-zobayertihan.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='ul'>
            {
                courses.map(course =>
                    <li className='flex items-start p-5 hover:bg-gray-300 ' key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </li>)
            }
        </div>
    );
};

export default LeftNav;