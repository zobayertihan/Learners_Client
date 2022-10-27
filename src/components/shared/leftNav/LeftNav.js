import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);
    const active = "bg-gray-300 p-5";
    const normal = "";

    useEffect(() => {
        fetch('https://server-zobayertihan.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>

            <ul>
                {
                    courses.map(course =>
                        <li className={'flex items-start p-5 hover:bg-gray-300 '} key={course.id}>
                            <NavLink className={({ isActive }) => isActive ? active : normal} to={`/course/${course.id}`}>{course.name}</NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default LeftNav;