import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';

const PrivateRoute = ({children}) => {
const{loading, user} =useContext(AuthContext)

if(loading){
    return (<>
    <p className='text-xl font-bold'>Loading</p>
    </>)
}

if(user && user?.email){
    return children
}

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;