import React from 'react';
import bnnerimg from '../assets/IMG-20241205-WA0010.jpg'
import bnnerimg2 from '../assets/Thuận_Nguyễn-lifeofpix-368880369495.jpg'

const Banner = () => {
    return (
        <div className='border-2 border-black  h-[250px]  lg:h-[500px]'>
            <div className="carousel w-full h-full"style={{
                    backgroundImage: `url(${bnnerimg})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}>
                <div id="item1" className="carousel-item w-full">
                    <div className='text-white text-left justify-center p-6'>
                        <h1 className='text-3xl lg:text-6xl font-rubik font-bold mb-4'>Change World</h1>
                        <h1 className='text-3xl lg:text-6xl font-rubik font-thin mb-4'>Better Future.</h1>
                        <button className='btn bg-[#ede653] font-inter text-[#023047] border-none font-bold hover:bg-orange-500 mr-4'>Explore More</button>
                        <button className='btn bg-red-500 text-white'>Donate</button>
                    </div>
                    
                </div>
                <div id="item2" className="carousel-item w-full" style={{
                    backgroundImage: `url(${bnnerimg2})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}>
                    <div className='text-white text-left justify-center p-6'>
                        <h1 className='text-3xl lg:text-6xl font-rubik font-bold mb-4'>Join The Journey</h1>
                        <h1 className='text-3xl lg:text-6xl font-rubik font-thin mb-4'>From Idea To Market.</h1>
                        <button className='btn bg-[#ede653] font-inter text-[#023047] border-none font-bold hover:bg-orange-500 mr-4'>Explore More</button>
                        <button className='btn bg-red-500 text-white'>Donate</button>
                    </div>
                    
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;