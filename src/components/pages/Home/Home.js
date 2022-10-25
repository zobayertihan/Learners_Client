import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const catagories = useLoaderData();
    return (
        <div>
            <h1>Home Page</h1>
            <h4>Total Catagory: {catagories.length}</h4>
            {
                catagories.map(catagory => <li
                    key={catagory.id} >
                    <div className='flex flex-col items-center justify-center'>
                        <img src={catagory.image} alt="" />
                        <Link>{catagory.name}</Link>
                    </div>
                </li>)
            }
        </div>
    );
};

export default Home;