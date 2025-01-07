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

    const shortDescription = data.description.length > 100 ? `${data.description.substring(0, 30)}...` : data.description;

    return (
        <div className={` ${
            isDarkTheme ? 'bg-gray-800 text-purple-700' : 'bg-gray-100 text-gray-900'
          }`}>
        <div className="h-[500px] bg-blue-200 p-4 lg:p-6">
            <div data-aos="zoom-out" className="card  shadow-xl flex flex-col  h-full rounded bg-white">
                <div className="w-full h-[150px]">
                    <img
                        className="w-full h-full object-cover "
                        src={data.image}
                        alt="Album"
                    />
                </div>
                <div className="card-body  flex flex-col justify-between h-[300px]">
                    <h2 className="card-title font-rubik font-bold text-lg lg:text-xl">{data.title}</h2>
                    <h1 className="font-inter text-sm lg:text-base">Description: {shortDescription}</h1>
                    <h1 className="font-inter text-sm lg:text-base">
                        Deadline: {formattedDate > data.deadline ? 'Campaigning Successful' : data.deadline}
                    </h1>
                    <div>
                        <p className="text-sm lg:text-base"><small>Progress</small></p>
                        <input type="range" min={0} max="100" value={data.minDonation.substring(0, 50)} className="range range-xs" />
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