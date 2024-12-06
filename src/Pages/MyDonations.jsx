import React, { useState }  from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import CampCard from '../components/CampCard';

const MyDonations = () => {
    const loadedData =useLoaderData()
    
    // console.log(loadedData)




    return (
        <div>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center my-4'>My Donation</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-10'>
        {
            loadedData.map(data=><CampCard key={data._id} data={data}></CampCard>)
        }
      </div>
      
    </div>
    );
};

export default MyDonations;