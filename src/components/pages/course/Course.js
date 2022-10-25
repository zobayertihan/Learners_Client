import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>Course: {course.name}</h1>
            <p>{course.description}</p>
        </div>
    );
};

export default Course;