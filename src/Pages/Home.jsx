import React, { useState } from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import CampCard from '../components/CampCard';
import Join from '../components/Join';
import WhyCrowed from '../components/WhyCrowed';

const Home = () => {
    const loadedData =useLoaderData()
    
    

   

    return (
        <div>
            <Banner></Banner>
            <div className='my-10 lg:my-28 w-full'>
            <WhyCrowed></WhyCrowed>
            </div>
            <div className=' my-10 p-6'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center my-4 lg:my-8 font-rubik'>Our Running Campaigns</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    loadedData.map(data=><CampCard key={data._id} data={data}></CampCard>)
                    
                }
                </div>
            </div>
            <div className=' my-10 lg:my-20'>
                <Join></Join>
            </div>
        </div>
    );
};

export default Home;