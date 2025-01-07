import React, { useContext, useEffect, useState }  from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';

import { Bounce } from 'react-awesome-reveal';
// import DonationCard from '../components/DonationCard';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Link } from 'react-router-dom';


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
        <div className='mt-20'>
      <Bounce><h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center my-4'>My Donation</h1></Bounce>

      {/* table */}
      <div>
                <div className="overflow-x-auto max-w-full">
                    <table className="table table-auto bg-pink-100 rounded-none border-2 border-pink-900 my-10">
                        {/* Table Head */}
                        <thead className="border-2 border-pink-900 bg-pink-300 text-[#023047] font-bold text-sm md:text-lg">
                            <tr>
                                <th className="px-2 py-1"></th>
                                <th className="px-2 py-1">Title</th>
                                <th className="px-2 py-1">Donation</th>
                                <th className="px-2 py-1">Deadline</th>
                                <th className="px-2 py-1">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {donation && donation.map((data, index) => (
                                <tr key={data._id} className="border-b-2 border-pink-900 text-xs md:text-base">
                                    <th className="px-2 py-1">{index + 1}</th>
                                    <td className="px-2 py-1">{data.title}</td>
                                    <td className="px-2 py-1">${data.minDonation}</td>
                                    <td className="px-2 py-1">{data.deadline}</td>
                                    <td className="flex flex-wrap gap-2 px-2 py-1">
                                        <Link to={`/updateCampaign/${data._id}`}>
                                            <button className="btn bg-[#023047] text-white hover:text-[#023047] hover:bg-white hover:border-[#023047] p-1 text-sm md:p-2">
                                                Update
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(data._id)}
                                            className="btn bg-pink-500 text-white hover:text-[#023047] hover:bg-white hover:border-[#023047] p-1 text-sm md:p-2"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>



      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-10'>
        {
            donation.map(dataInfo=><DonationCard key={dataInfo._id} dataInfo={dataInfo}></DonationCard>)
        }
      </div> */}
      {/* <DonationCard key={dataInfo._id} dataInfo={dataInfo}></DonationCard> */}
    </div>
    );
};

export default MyDonations;