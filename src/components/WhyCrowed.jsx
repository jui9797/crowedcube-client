import React from 'react';
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { SiMoneygram } from "react-icons/si";
import { PiHandWithdrawFill } from "react-icons/pi";
import Marquee from 'react-fast-marquee';

const WhyCrowed = () => {
    return (
        <div className='my-10 bg-blue-200  w-full'>
            <p className='text-center font-bold font-inter'><small>Services</small></p>
            <h2 className='text-3xl lg:text-4xl text-center mb-8 font-bold font-rubik'>Why CrowdCube?</h2>
            <Marquee gradient={false} pauseOnHover={true} speed={50}>
            <div className='flex  gap-8 font-inter'>
                <div className='bg-white hover:bg-[#023047] hover:text-white flex flex-col justify-center items-center  p-4 border-none text-xl text-center'>
                 <h2 className='text-6xl mb-2 '><FaHandHoldingHeart /></h2> <h2 className='w-2/3'>Industry,s best fundraising success</h2></div>
                <div className='bg-white hover:bg-[#023047] hover:text-white  flex flex-col justify-center items-center border-2 p-4 border-none text-xl text-center'>
                <h2 className='text-6xl mb-2 '><MdOutlineSupport /></h2><h2 className='w-2/3'>Supported By 55,00,000+ Donors</h2></div>
                <div className='bg-white hover:bg-[#023047] hover:text-white  flex flex-col justify-center items-center border-2 p-4 border-none text-xl text-center'>
                <h2 className='text-6xl mb-2 '><MdOutlineManageHistory /></h2><h2 className='w-2/3'>Easy-To-Manage Tools To Boost Results</h2></div>
                <div className='bg-white hover:bg-[#023047] hover:text-white  flex flex-col justify-center items-center border-2 p-4 border-none text-xl text-center'>
                <h2 className='text-6xl mb-2 '><FaHandshake /></h2><h2 className='w-2/3'>CrowdCube Get Expert Support 24/7</h2></div>
                <div className='bg-white hover:bg-[#023047] hover:text-white  flex flex-col justify-center items-center border-2 p-4 border-none text-xl text-center'>
                <h2 className='text-6xl mb-2 '><GiReceiveMoney /></h2><h2 className='w-2/3'>Receive donations via all popular payment</h2></div>
                <div className='bg-white hover:bg-[#023047] hover:text-white  flex flex-col justify-center items-center border-2 p-4 border-none text-xl text-center'>
                <h2 className='text-6xl mb-2 '><SiMoneygram /></h2><h2 className='w-2/3'>International Payment Support</h2></div>
                <div className='bg-white hover:bg-[#023047] hover:text-white  flex flex-col justify-center items-center border-2 p-4 border-none text-xl text-center'>
                <h2 className='text-6xl mb-2 '><PiHandWithdrawFill /></h2><h2 className='w-2/3'>Withdraw Funds Without Hassle</h2></div>
                <div className='bg-white hover:bg-[#023047] hover:text-white  flex flex-col justify-center items-center border-2 p-4 border-none text-xl text-center'>
                <h2 className='text-6xl mb-2 mr-4'><RiDashboardHorizontalFill /></h2><h2 className='w-2/3'>A Dedicated Smart-Dashboard</h2></div>
                <div className="hidden lg:block w-4"></div>
            </div>
            </Marquee>
        </div>
    );
};

export default WhyCrowed;