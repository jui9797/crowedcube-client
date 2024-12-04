import React from 'react';
import { Link } from 'react-router-dom';

const CampCard = ({data}) => {
    const currentDate =new Date()
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    return (
        <div className='border-2'>
            camp card
            <h1>Deadline: {formattedDate > data.deadline ? 'Campaigning Successful' : data.deadline}</h1>
            <Link to={`/newcamp/${data?._id}`}><button className='btn btn-success'>Detail</button></Link>
        </div>
    );
};

export default CampCard;