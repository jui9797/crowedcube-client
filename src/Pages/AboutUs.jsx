import React from 'react';
import teamPhoto from '../assets/group-photo.jpg'
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import v1 from '../assets/v-1.jpg'
import v2 from '../assets/v-2.jpg'
import v3 from '../assets/v-3.jpg'
import v4 from '../assets/v-4.jpg'
import v5 from '../assets/v-5.jpg'
import v6 from '../assets/v-6.jpg'

const AboutUs = () => {
    return (
        <div className='my-20 text-[#023047]'>
            <h2 className='text-4xl'>About CrowedCube...</h2>
            {/* section-1 */}
            <div>
                <div className='mt-4 h-[300px] lg:h-[500px] w-full mb-4'>
                    <img className='h-full w-full' src={teamPhoto} alt="" />
                </div>
                <div className='my-4 font-bold'>
                    <p>There’s a part of every one of us that dreams of a better world. That spark of inspiration to help a person, fix a neighborhood, or even change a nation. At CrowedCube, we empower both individuals and charities to turn compassion into action. Because that is how change happens.
                        With fundraising for all, we are creating the giving layer of the internet: a space where individuals, teams, organisations, and nonprofits can champion causes that matter and raise money to make a lasting difference. Through CrowedCube, people and organisations have the tools they need to share their cause far and wide and harness the power of generosity. We are transforming the way people give and changing lives—are you ready to join us?</p>
                </div>
            </div>
            {/* section-2 */}
            <div className='my-10 lg:my-28'>
            <h2 className='text-3xl mb-10 font-bold text-center'>Meet Our Team</h2>
            {/* photo grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* grid-1 */}
            <div className='hover:bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center'>
             <img className='w-48 h-48 rounded-full border-2 border-blue-900 p-2 bg-white' src={v1} alt="" />
             <h1 className='text-3xl'>Robert</h1>
             <p className='text-gray-600'>Volunteer</p>
            </div>
                {/* grid-2 */}
            <div className='hover:bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center'>
             <img className='w-48 h-48 rounded-full border-2 border-blue-900 p-2 bg-white' src={v2} alt="" />
             <h1 className='text-3xl'>Sarah</h1>
             <p className='text-gray-600'>Volunteer</p>
            </div>
            
                {/* grid-3 */}
            <div className='hover:bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center'>
             <img className='w-48 h-48 rounded-full border-2 border-blue-900 p-2 bg-white' src={v3} alt="" />
             <h1 className='text-3xl'>Mac</h1>
             <p className='text-gray-600'>Volunteer</p>
            </div>
                {/* grid-4 */}
            <div className='hover:bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center'>
             <img className='w-48 h-48 rounded-full border-2 border-blue-900 p-2 bg-white' src={v4} alt="" />
             <h1 className='text-3xl'>Willum</h1>
             <p className='text-gray-600'>Volunteer</p>
            </div>
                {/* grid-5 */}
            <div className='hover:bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center'>
             <img className='w-48 h-48 rounded-full border-2 border-blue-900 p-2 bg-white' src={v5} alt="" />
             <h1 className='text-3xl'>Alex</h1>
             <p className='text-gray-600'>Volunteer</p>
            </div>
                {/* grid-6 */}
            <div className='hover:bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center'>
             <img className='w-48 h-48 rounded-full border-2 border-blue-900 p-2 bg-white' src={v6} alt="" />
             <h1 className='text-3xl'>Cristeen</h1>
             <p className='text-gray-600'>Volunteer</p>
            </div>
            
            </div>
            </div>
            {/* section-3 */}
            <div className='my-10 lg:my-20 p-4 '>
                <h2 className='text-3xl mb-10 font-bold text-center'>The GoFundMe difference</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-8'>
                
                <div>
                   <h2 className='font-semibold mb-2 lg:mb-4 text-2xl flex justify-left items-center gap-2'><FaHandsHoldingCircle /> Trust</h2>
                   <p className='text-gray-600'>Our Trust & Safety team works around the clock to ensure your safety and protect against fraud. We also provide the industry’s first and only donor protection guarantee. With eight years of experience and the most money raised, GoFundMe has earned the trust of respected institutions and government officials around the world.</p>
                </div>
   
                <div>
                   <h2 className='font-semibold mb-2 lg:mb-4 text-2xl flex justify-left items-center gap-2'><FaPersonRunning /> Speed</h2>
                   <p className='text-gray-600'>We’ve helped families and communities get back on their feet quickly. In just the first 30 days following Hurricane Harvey, GoFundMe delivered over $27 million directly to people affected by the storm.</p>
                </div>
   
                <div>
                   <h2 className='font-semibold mb-2 lg:mb-4 text-2xl flex justify-left items-center gap-2'><TbTargetArrow /> Reach</h2>
                   <p className='text-gray-600'>GoFundMe helps you easily share your story far and wide over email, text, and social media to rally support for your cause. In addition, we have a dedicated team looking for great stories to amplify and share with the media and our community.</p>
                </div>
               </div>
            </div>
           
        </div>
    );
};

export default AboutUs;