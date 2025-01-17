import React from 'react';
// import lottieImg from '../assets/lottie/Animation - 1736184897677.json'
import { FaLongArrowAltRight } from "react-icons/fa";
import 'animate.css';
import joinImg from '../assets/Add User-bro.png'
// import Lottie from 'lottie-react';

const Join = ({isDarkTheme}) => {
    return (
        <div className={`w-11/12 mx-auto flex flex-col lg:flex-row gap-8 `}>
            <div className="lg:w-1/2">
                <p className={`text-green-800 font-bold mb-4 flex justify-start items-center gap-2 ${
            isDarkTheme ? ' text-white' : ''
          }`}>
                    <small>Join To Us</small>
                    <FaLongArrowAltRight />
                </p>
                <h2 className={`text-3xl lg:text-5xl mb-4 font-bold text-[#023047] animate__animated animate__bounce ${
            isDarkTheme ? ' text-white' : ''
          }`}>
                    Not Donate Yet?
                </h2>
                <p className={`text-green-950 mb-4 ${
            isDarkTheme ? ' text-white' : ''
          }`}>
                    Become a part of our mission to make a difference! By joining us, you,ll contribute to impactful campaigns and help create lasting change. Together, we can achieve more—whether by supporting a cause, volunteering your time, or spreading awareness. Let,s unite and build a brighter future for everyone!
                </p>
                <div>
                    <button className="btn mr-4 bg-[#023047] text-white font-bold">Sign In</button>
                    <button className="btn text-[#023047] bg-white border-[#023047] font-bold">Register</button>
                </div>
            </div>
            <div className="lg:w-1/2">
            {/* <Lottie animationData={lottieImg}></Lottie> */}
                <img className="w-full h-[200px] lg:h-[350px]" src={joinImg} alt="Join Us" />

            </div>
        </div>
    );
};

export default Join;
