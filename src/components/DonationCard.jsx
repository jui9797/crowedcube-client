import React from 'react';

const DonationCard = ({dataInfo}) => {
    const {title,  deadline, minDonation, image} =dataInfo
    
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0];
    return (

        <div>
            <div className="h-full   p-4 lg:p-6">
            <div  className="card lg:card-side shadow-xl flex flex-col lg:flex-row h-full rounded bg-white">
                <figure className="w-full lg:w-1/2 h-[200px] lg:h-full">
                    <img
                        className="w-full h-full object-cover "
                        src={image}
                        alt="Album"
                    />
                </figure>
                <div className="card-body lg:w-1/2 flex flex-col justify-between">
                    <h2 className="card-title font-rubik font-bold text-lg lg:text-xl">Title:{title}</h2>
                    <h1 className="font-inter text-sm lg:text-base">
                        Deadline: {formattedDate > deadline ? 'Campaigning Successful' :deadline}
                    </h1>
                    <div>
                        <p className="text-sm lg:text-base"><small>Progress</small></p>
                        <input type="range" min={0} max="100" value={minDonation} className="range range-xs" />
                    </div>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DonationCard;