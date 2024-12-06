import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const CampCard = ({ data , isDarkTheme }) => {


    useEffect(() => {
        Aos.init({ duration: 1000 }); 
    }, []);
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0];

    return (
        <div className={` ${
            isDarkTheme ? 'bg-gray-800 text-purple-700' : 'bg-gray-100 text-gray-900'
          }`}>
        <div className="h-full  bg-blue-200 p-4 lg:p-6">
            <div data-aos="zoom-out" className="card lg:card-side shadow-xl flex flex-col lg:flex-row h-full rounded bg-white">
                <figure className="w-full lg:w-1/2 h-[200px] lg:h-full">
                    <img
                        className="w-full h-full object-cover "
                        src={data.image}
                        alt="Album"
                    />
                </figure>
                <div className="card-body lg:w-1/2 flex flex-col justify-between">
                    <h2 className="card-title font-rubik font-bold text-lg lg:text-xl">{data.title}</h2>
                    <h1 className="font-inter text-sm lg:text-base">
                        Deadline: {formattedDate > data.deadline ? 'Campaigning Successful' : data.deadline}
                    </h1>
                    <div>
                        <p className="text-sm lg:text-base"><small>Progress</small></p>
                        <input type="range" min={0} max="100" value={data.minDonation} className="range range-xs" />
                    </div>
                    <div className="card-actions">
                        <Link to={`/${data?._id}`}>
                            <button className="btn bg-[#023047] text-white font-inter w-full lg:w-auto">
                                See More <FaArrowRightLong />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CampCard;