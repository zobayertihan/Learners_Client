import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../shared/leftNav/LeftNav';

const CourseMain = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-3/12'>
                <LeftNav ></LeftNav>
            </div>
            <div className='w-9/12'>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default CourseMain;