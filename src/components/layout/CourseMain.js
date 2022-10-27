import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../shared/leftNav/LeftNav';

const CourseMain = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <div className='md:w-3/12 flex justify-center'>
                <LeftNav ></LeftNav>
            </div>
            <div className='md:w-9/12'>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default CourseMain;