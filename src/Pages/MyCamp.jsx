import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCamp = () => {
    const loadedData =useLoaderData()
    console.log(loadedData)
    return (
        <div>
            my camps
        </div>
    );
};

export default MyCamp;