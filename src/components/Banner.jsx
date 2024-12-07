


import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' h-[250px] lg:h-[500px]'>
            <div className="carousel w-full h-full"style={{
                    backgroundImage: `url('https://i.ibb.co.com/HDWJgtb/banner-fund.png')`,
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    
                }}>
                <div id="item1" className="carousel-item w-full bg-black bg-opacity-70 flex flex-col justify-center items-center">
                    <div className='text-white  p-6'>
                        <h1 className='text-3xl lg:text-7xl font-rubik font-bold mb-2'>Change World For</h1>
                        <h1 className='text-3xl lg:text-6xl font-rubik font-thin mb-2'>Better Future...!</h1>
                        <button className='btn bg-pink-600 font-inter text-white border-none font-bold hover:bg-blue-950 mr-4'><Link to='/allCamp'>Explore More</Link></button>
                        
                    </div>
                    
                </div>
                <div id="item2" className="carousel-item w-full flex flex-col justify-center items-center" style={{
                    backgroundImage: `url('https://i.ibb.co.com/KD5Ksw1/colorful-geometric-background-trendy-gradient-shapes-composition-cool-background-design-for-posters.jpg')`,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}>
                    <div className='text-white text-center'>
                        <h1 className='text-2xl lg:text-5xl font-rubik font-semibold mb-4'>Dreams grow bigger when shared.</h1>
                        <h1 className='text-xs lg:text-xl font-rubik font-thin mb-4 w-2/3  mx-auto'>Every dream starts with a single step, and your support can make that step possible. Together, we can turn ideas into impactful realities. Join the movement today!</h1>
                        <button className='btn bg-pink-600 font-inter text-white border-none font-bold hover:bg-blue-950 mr-4'><Link to='/allCamp'>Explore More</Link></button>
                        
                    </div>
                    
                </div>
                <div id="item3" className="carousel-item w-full flex flex-col " style={{
                    backgroundImage: `url('https://i.ibb.co.com/ck4FQ79/pngtree-ecommerce-banner-planning-segmentation-selection-image-1375247.jpg')`,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}>
                    <div className='bg-black bg-opacity-50 h-full'>
                    <div className='text-white   md:w-1/2 lg:mt-20 pl-4'>
                        <h1 className='text-2xl lg:text-5xl font-rubik font-semibold mb-4'>Community-driven change starts here.</h1>
                        <h1 className='text-xs  font-rubik font-thin mb-4 w-2/3  '>Every dream starts with a single step, and your support can make that step possible. Together, we can turn ideas into impactful realities. Join the movement today!</h1>
                        <button className='btn bg-white font-inter text-pink-800 border-none font-bold hover:bg-indigo-900 hover:text-white hover:border-2 mr-4'><Link to='/allCamp'>Explore More</Link></button>
                        
                    </div>
                    </div>
                    
                    
                </div>
                <div id="item4" className="carousel-item w-full flex flex-col justify-right " style={{
                    backgroundImage: `url('https://i.ibb.co.com/j6vFLK7/pexels-photo-3184291.jpg')`,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}>
                    <div className='bg-black bg-opacity-60 h-full'>
                    <div className='text-white flex flex-col justify-center items-center text-center mt-10 lg:mt-20'>
                        <h1 className='text-2xl lg:text-5xl font-rubik font-semibold mb-2'>Dreams grow bigger when shared.</h1>
                        <h1 className='text-xs lg:text-xl font-rubik font-thin mb-4 w-2/3   mx-auto'>Every dream starts with a single step, and your support can make that step possible. Together, we can turn ideas into impactful realities. Join the movement today!</h1>
                        <button className='btn bg-pink-600 font-inter text-white border-none font-bold hover:bg-blue-950 mr-4'><Link to='/allCamp'>Explore More</Link></button>
                        
                    </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Banner;