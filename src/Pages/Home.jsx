import React, { useState } from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import CampCard from '../components/CampCard';

const Home = () => {
    const loadedData =useLoaderData()
    
    

   

    return (
        <div>
            <Banner></Banner>
            <div className='border-2 my-10 p-6'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center my-4'>Our Running Campaigns</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    loadedData.map(data=><CampCard key={data._id} data={data}></CampCard>)
                    
                }
                </div>
            </div>
            <div className='border-2 my-10'>
                <h3>2 extra section</h3>
            </div>
        </div>
    );
};

export default Home;