import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
           <div className='flex flex-col justify-center items-center mt-10'>
            <img src="https://i.ibb.co.com/y0Qr2TV/404-pages.jpg" alt="" />
            <button className='btn mt-6 bg-blue-800 text-white'><Link to='/'>Home</Link></button>
           </div>
        </div>
    );
};

export default Error;