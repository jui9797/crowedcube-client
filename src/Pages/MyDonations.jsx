import React, { useContext, useEffect, useState }  from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Bounce } from 'react-awesome-reveal';
import DonationCard from '../components/DonationCard';
import { AuthContext } from '../components/Provider/AuthProvider';


const MyDonations = () => {
   const {user} =useContext(AuthContext)
    const [donation, setDonation] =useState([])
    useEffect(() => {
      const fetchData = async () => {

          const response = await fetch(`https://assignment10-server-ten.vercel.app/allDonationData?email=${user.email}`);
          const result = await response.json();
          setDonation(result);
          

      };

      fetchData();
  }, [user?.email]);



    return (
        <div>
      <Bounce><h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center my-4'>My Donation</h1></Bounce>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-10'>
        {
            donation.map(dataInfo=><DonationCard key={dataInfo._id} dataInfo={dataInfo}></DonationCard>)
        }
      </div>
      {/* <DonationCard key={dataInfo._id} dataInfo={dataInfo}></DonationCard> */}
    </div>
    );
};

export default MyDonations;