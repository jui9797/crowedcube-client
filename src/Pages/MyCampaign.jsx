
import { Link, useLoaderData } from 'react-router-dom';



const MyCampaign = () => {
   const loadedData =useLoaderData() 


   const handleDelete=(id)=>{
   console.log(id)
   }
  
    
    return (
        <div>
           <h2 className='text-3xl md:text-5xl text-center my-10'>My Campaigns</h2>
            <div>
            <div className="overflow-x-auto">
          <table className="table bg-pink-100 rounded-none border-2 border-pink-900 my-10">
            {/* head */}
            <thead className='border-2 border-pink-900 bg-pink-300 text-[#023047] font-bold text-xl'>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Donation</th>
                <th>Deadline</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                loadedData.map((data, index)=>
                  <tr key={data._id} className='border-b-2 border-pink-900'>
                <th>{index+1}</th>
                <td>{data.title}</td>
                <td>${data.minDonation}</td>
                <td>{data.deadline}</td>
                <td>
                    <button className='btn bg-[#023047] text-white hover:text-[#023047] hover:bg-white hover:border-[#023047]  p-2 mr-2'><Link to={data._id}>Update</Link></button>
                    <button onClick={()=>handleDelete(data._id)} className='btn p-2 bg-pink-500 text-white hover:text-[#023047] hover:bg-white hover:border-[#023047]'>Delete</button>
                    
                </td>
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

export default MyCampaign;