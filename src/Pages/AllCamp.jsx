import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import CampCard from '../components/CampCard';
import { Bounce } from "react-awesome-reveal";

const AllCamp = () => {
  const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0];
  const allCampData = useLoaderData()
  return (
    <div>
      <Bounce><h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center my-4'>Our Exclusive Campaigns</h1></Bounce>
      <div className='mb-6'>
        <div className="overflow-hidden">
          <table className="table bg-blue-200 rounded-none">
            {/* head */}
            <thead className=' font-bold text-black'>
              <tr>
                
                <th>Title</th>
                <th>Deadline</th>
                <th>Min Donation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                allCampData.map((data)=>
                  <tr key={data._id}>
                
                <td className='w-[300px] font-bold'>{data.title}</td>
                <td>{formattedDate > data.deadline ? 'Campaigning Successful' : data.deadline}</td>
                <td>$ {data.minDonation}</td>
                <td className='w-[150px]'><Link to={`/${data?._id}`}><button className='btn bg-[#023047] text-white'>See More</button></Link></td>
              </tr>
                )
              }
              
              
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default AllCamp;