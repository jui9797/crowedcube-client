import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from './Provider/AuthProvider';

const Details = () => {
    const navigate =useNavigate()
    const {user} =useContext(AuthContext)
    const data = useLoaderData()
    
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0];

const handleDonate =()=>{
    if(data.deadline < formattedDate){
        return(
            Swal.fire({
                title: 'Sorry this Campaign has completed',
                text: "donate other campaign",
                
                icon: "error"
              }) 
        )
    }
    Swal.fire({
        title: `Congrates ${user?.displayName}`,
        text: "Donation process is successful",
        
        icon: "success"
      });
      const donatedData={
        image:data.image,
        title:data.title,
        type:data.type,
        description:data.description,
        minDonation:data.minDonation,
        deadline:data.deadline,
        userEmail:user?.email,
        userName:user?.displayName
      }
      
      fetch('https://assignment10-server-ten.vercel.app/allDonation',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(donatedData)
      })
      .then(res=>res.json())
      .then(data=>{
        
        
      })
      navigate('/allCamp')
}

    return (
        <div className='mt-20'>
            <div className="hero bg-blue-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={data.image}
                        className="w-[360px] h-[256px] rounded-lg shadow-2xl border-2 border-red-900" />
                    <div>
                        <h1 className=" text-3xl lg:text-5xl font-bold text-red-900 font-rubik">{data.title}</h1>
                        <p className="py-2 font-inter">
                            <span className='font-bold ml-2'>Description:</span> {data.description}
                        </p>
                        <p className="py-2 font-inter">
                            <span className='font-bold ml-2'>Type:</span> {data.type}
                        </p>
                        <p className="py-2 font-inter">
                            <span className='font-bold ml-2'>Min Donation:</span>${data.minDonation}
                        </p>
                        <p className="py-2 font-inter">
                            <span className='font-bold ml-2'>Deadline:</span> {data.deadline}
                        </p>
                        {/* rating */}
                        <div className="rating p-2">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-900" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-red-900"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-900" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-900" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-900" />
                        </div>
                        <br />
                        <button onClick={handleDonate} className="btn bg-red-900 text-white hover:text-red-900 hover:bg-white font-bold hover:border-red-900 font-inter ml-2">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;