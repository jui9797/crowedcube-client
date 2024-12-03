import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto min-h-[80vh]'> 
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;