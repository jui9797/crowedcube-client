import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoute = ({children}) => {
    const location =useLocation()
const{loading, user} =useContext(AuthContext)

if(loading){
    return (<>
    <Loader></Loader>
    </>)
}

if(user && user?.email){
    return children
}

    return (
        <div>
             <Navigate to='/login' state={location.pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;