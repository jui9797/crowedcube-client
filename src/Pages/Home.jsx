import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='border-2 my-10'>
                <h2>running campaign section</h2>
            </div>
            <div className='border-2 my-10'>
                <h3>2 extra section</h3>
            </div>
        </div>
    );
};

export default Home;