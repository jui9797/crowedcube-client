import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";
import { FaSort } from "react-icons/fa6";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const AllCamp = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];
  const allCampData = useLoaderData();
  const [campData, setCampData] = useState(allCampData);

  const handleSort = () => {
    const sortedData = [...campData].sort((a, b) => b.minDonation - a.minDonation);
    setCampData(sortedData); 
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Bounce>
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center my-4">
          Our Exclusive Campaigns
        </h1>
      </Bounce>
      <div className="flex justify-center">
        <button
          onClick={handleSort}
          className="btn flex items-center justify-center mb-4 bg-pink-500 text-white px-4 py-2 rounded-md shadow-lg"
          data-tooltip-id="sortTooltip"
          data-tooltip-content="Sort by Minimum Donation"
        >
          Sort <span className="ml-2"><FaSort /></span>
        </button>
      </div>
      <ReactTooltip id="sortTooltip" place="right" type="dark" effect="solid" />
      <div className="mb-6">
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-blue-200 rounded-md shadow-lg">
            {/* head */}
            <thead className="bg-blue-800 text-white font-bold">
              <tr>
                <th className="p-1">Title</th>
                <th className="p-1">Deadline</th>
                <th className="p-1">Min Donation</th>
                <th className="p-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campData.map((data) => (
                <tr key={data._id} className="text-center border-b">
                  <td className="p-1 text-sm md:text-base w-72 font-bold">{data.title}</td>
                  <td className="p-2 text-sm md:text-base">
                    {formattedDate > data.deadline ? 'Campaigning Successful' : data.deadline}
                  </td>
                  <td className="p-2 text-sm md:text-base">$ {data.minDonation}</td>
                  <td className="p-1">
                    <Link to={`/${data._id}`}>
                      <button className="btn bg-[#023047] text-white px-2  text-sm md:text-base rounded-md">
                        See More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCamp;
