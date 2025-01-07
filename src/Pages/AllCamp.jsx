import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";
import { FaArrowRightLong, FaSort } from "react-icons/fa6";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const AllCamp = () => {
  const currentDate = new Date();
  // const formattedDate = currentDate.toISOString().split('T')[0];
  const allCampData = useLoaderData();
  const [campData, setCampData] = useState(allCampData);

  const handleSort = () => {
    const sortedData = [...campData].sort((a, b) => b.minDonation - a.minDonation);
    setCampData(sortedData);
  };

  // const shortDescription = data.description.length > 100 ? `${data.description.substring(0, 30)}...` : data.description;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Bounce>
        <h1 className="mt-16 text-lg md:text-2xl lg:text-3xl font-bold text-center my-4">
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          campData.map((data, index) =>
            // camp card
            <div className="card bg-base-100 rounded-lg shadow-xl" key={index}>
              <figure className='h-[189px]'>
                <img
                  className='h-full w-full'
                  src={data.image}
                  alt="image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#023047]">{data.title}</h2>
                <p className="font-inter text-sm lg:text-base text-gray-600"><span className='font-bold'>Description:</span> {`${data.description.substring(0, 30)}...`}</p>
                <div className="card-actions ">
                  <Link to={`/${data?._id}`}>
                    <button className="btn bg-[#023047] text-white font-inter w-full lg:w-auto">
                      See More <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default AllCamp;
