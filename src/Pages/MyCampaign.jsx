
import { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';



const MyCampaign = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const [campData, setCampData] = useState(loadedData)

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allCamp/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = campData.filter(camp => camp._id !== _id)
                        setCampData(remaining)
                    })

            }
        });
    }


    return (
        <div>
            <Bounce><h2 className='text-3xl md:text-5xl text-center my-10'>My Campaigns</h2></Bounce>
            <div>
                <div className="overflow-x-auto max-w-full">
                    <table className="table table-auto bg-pink-100 rounded-none border-2 border-pink-900 my-10">
                        {/* Table Head */}
                        <thead className="border-2 border-pink-900 bg-pink-300 text-[#023047] font-bold text-sm md:text-lg">
                            <tr>
                                <th className="px-2 py-1"></th>
                                <th className="px-2 py-1">Title</th>
                                <th className="px-2 py-1">Donation</th>
                                <th className="px-2 py-1">Deadline</th>
                                <th className="px-2 py-1">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {campData && campData.map((data, index) => (
                                <tr key={data._id} className="border-b-2 border-pink-900 text-xs md:text-base">
                                    <th className="px-2 py-1">{index + 1}</th>
                                    <td className="px-2 py-1">{data.title}</td>
                                    <td className="px-2 py-1">${data.minDonation}</td>
                                    <td className="px-2 py-1">{data.deadline}</td>
                                    <td className="flex flex-wrap gap-2 px-2 py-1">
                                        <Link to={`/updateCampaign/${data._id}`}>
                                            <button className="btn bg-[#023047] text-white hover:text-[#023047] hover:bg-white hover:border-[#023047] p-1 text-sm md:p-2">
                                                Update
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(data._id)}
                                            className="btn bg-pink-500 text-white hover:text-[#023047] hover:bg-white hover:border-[#023047] p-1 text-sm md:p-2"
                                        >
                                            Delete
                                        </button>
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

export default MyCampaign;