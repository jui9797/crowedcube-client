import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import Swal from 'sweetalert2'

const NewCamp = () => {
    const {user} =useContext(AuthContext)

const handleSubmit=e=>{
    e.preventDefault()
    const form =e.target
    const image =form.image.value
    const title =form.title.value
    const type =form.type.value
    const description =form.description.value
    const minDonation =form.minDonation.value
    const deadline =form.deadline.value
    const userEmail =form.userEmail.value
    const userName =form.userName.value
    const newCamp ={image, title, type, description, minDonation, deadline, userEmail, userName}
    

    fetch('https://assignment10-server-ten.vercel.app/newcamp',{
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(newCamp)
    })
    .then(res => res.json())
    .then(data=>{
        
        
        Swal.fire({
          title: "Great.....!",
          text: "New campaign is creating successful",
          icon: "success"
        });
    })
}

    return (
        <div className="max-w-lg mx-auto  p-6 shadow-md rounded-md bg-pink-200 my-6 mt-20">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">Add New Campaign</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-600">Image/Thumbnail URL</label>
              <input
                type="url"
                id="image"
                name="image"
                
                required
                placeholder="Enter image URL"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            {/* Campaign Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-600">Campaign Title</label>
              <input
                type="text"
                id="title"
                name="title"
                
                required
                placeholder="Enter campaign title"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            {/* Campaign Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-600">Campaign Type</label>
              <select
                id="type"
                name="type"
                
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="personal issue">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative ideas">Creative Ideas</option>
              </select>
            </div>
    
            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
              <textarea
                id="description"
                name="description"
                
                required
                rows="4"
                placeholder="Enter campaign description"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
    
            {/* Minimum Donation */}
            <div>
              <label htmlFor="minDonation" className="block text-sm font-medium text-gray-600">Minimum Donation Amount</label>
              <input
                type="number"
                id="minDonation"
                name="minDonation"
                
                required
                placeholder="Enter minimum donation amount"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            {/* Deadline */}
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            {/* User Email (Read Only) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">User Email</label>
              <input
                type="email"
                id="email"
                name='userEmail'
                value={user.email}
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
    
            {/* User Name (Read Only) */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">User Name</label>
              <input
                type="text"
                id="name"
                name='userName'
                value={user.displayName}
                readOnly
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
    
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-pink-500 text-white font-semibold rounded-md shadow hover:bg-pink-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      );
    };

export default NewCamp;