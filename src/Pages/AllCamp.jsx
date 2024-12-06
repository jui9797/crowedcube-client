import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import CampCard from '../components/CampCard';

const AllCamp = () => {
  const allCampData = useLoaderData()
  return (
    <div>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-center my-4'>Our Exclusive Campaigns</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table bg-blue-200">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                allCampData.map((data, index)=>
                  <tr key={data._id}>
                <th>{index+1}</th>
                <td>{data.title}</td>
                <td>{data.deadline}</td>
                <td><Link to={`/${data?._id}`}><button className='btn btn-success'>See More</button></Link></td>
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