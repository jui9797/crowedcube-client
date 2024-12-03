import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const Navbar = () => {
    // const [isHovered, setIsHovered] = useState(false);
    const { user, logOut ,loading} = useContext(AuthContext)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allCamp">All Campaign</NavLink></li>
        <li><NavLink to="/newCamp">Add New Campaign</NavLink></li>
        <li><NavLink to="/myCamp">My Campaign</NavLink></li>
        <li><NavLink to="/myDonation">My Donation</NavLink></li>
    </>

    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Crowdcube</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {loading ? (
                        <div className="flex items-center">
                            <p className="text-xl font-bold">Loading...</p>
                        </div>
                    ) : user ? (
                        <>
                            <div className="relative inline-block group">
                                {/* User Image */}
                                <img
                                    className="w-16 h-16 rounded-full object-cover"
                                    src={user?.photoURL || 'default-avatar-url.jpg'}
                                    alt="user photo"
                                />

                                {/* Dropdown */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-48 p-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none transition-opacity duration-300 -mb-8">
                                    <p className="text-center text-gray-800 font-medium">{user?.displayName || 'User'}</p>
                                    <button
                                        onClick={logOut}
                                        className="w-full bg-red-500 text-white text-sm py-2 rounded hover:bg-red-600"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login"><button className="btn mr-4">Login</button></NavLink>
                            <NavLink to="/register"><button className="btn">Register</button></NavLink>
                        </>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Navbar;