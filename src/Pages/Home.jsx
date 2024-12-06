
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import CampCard from '../components/CampCard';
import Join from '../components/Join';
import WhyCrowed from '../components/WhyCrowed';
import { useState } from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Home = () => {
    const loadedData = useLoaderData()
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);



    return (
        <div className={isDarkTheme ? 'bg-gray-500 text-white' : 'bg-white text-gray-900'}>
            {/* theme */}
            <div className="text-right absolute top-20 ">
                <button
                    className="btn bg-[#023047] text-white px-3 py-2 rounded-full border-none"
                    onClick={toggleTheme}
                >
                     {isDarkTheme ? <MdLightMode /> : <MdDarkMode />} 
                </button>
            </div>

            <Banner></Banner>
            <div className='my-10 lg:my-28 w-full'>
                <WhyCrowed isDarkTheme={isDarkTheme}></WhyCrowed>
            </div>
            <div className=' my-10 p-6'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center my-4 lg:my-8 font-rubik'>Our Running Campaigns</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        loadedData.map(data => <CampCard key={data._id} data={data} isDarkTheme={isDarkTheme}></CampCard>)

                    }
                </div>
            </div>
            <div className='p-10 lg:p-20'>
                <Join isDarkTheme={isDarkTheme}></Join>
            </div>
        </div>
    );
};

export default Home;