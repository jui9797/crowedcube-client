import React from 'react';

const Newsletter = () => {
    return (
        <div className='text-center my-10 lg:my-28 bg-blue-200 p-4 lg:p-8'>
            <h2 className='font-bold text-3xl lg:text-5xl text-[#023047] mb-2'>Subscribe</h2>
            <p>Subscribe our newsletter to stay updated every moment.</p>
            <div className='lg:p-4'>
                <div className="flex w-full lg:w-2/3 mx-auto mt-2 ">
                <input type="text" placeholder="Type here" className="input w-full rounded-r-none" />
                <input type="submit" value="Submit" className="btn bg-[#023047] text-white rounded-l-none" />
                    
                </div>
            </div>
        </div>
    );
};

export default Newsletter;